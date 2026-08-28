import React, { useEffect, useState } from 'react';
import { formatarNumero, formatarNumeroDuplo, formatarPercentual } from '../utils/numero';
import {
  AlertCircle,
  Award,
  Check,
  ChevronDown,
  Info,
  Loader2,
  Route,
  ShieldCheck,
  Target,
  UserRound,
  Users
} from 'lucide-react';
import { SystemUser, fetchUsers, setUserRole } from '../services/api';
import { DEFAULT_AVATAR } from '../utils/avatar';
import { ProgressSnapshot, fetchAllProgress, isOnline } from '../services/progressSync';
import { AREA_LABEL } from '../services/interest';
import { ASSESSMENTS } from '../data/assessments';
import {
  ADMIN_EMAIL,
  ROLES,
  ROLE_STYLE,
  Role,
  atLeast,
  hasLevels,
  rankOf,
  roleOf
} from '../utils/roles';
import {
  TRACK_IDS,
  completionFrom,
  isCertifiedFrom,
  trackModules,
  trackTitle
} from '../services/certification';
import { LEVEL_DESCRIPTION, UserLevel, levelLabel } from '../services/level';

interface PainelSectionProps {
  /** Usuário logado, destacado na lista com a etiqueta "você". */
  currentUserId: string;
  /** Perfil de quem está vendo: define se pode atribuir cargos. */
  currentRole: Role;
}

/** Resultado de um simulado de módulo, dentro de uma trilha. */
interface ModuleScore {
  id: string;
  label: string;
  correct: number;
  total: number;
  percentage: number;
}

interface TrackProgress {
  id: string;
  title: string;
  /** Se a pessoa iniciou a jornada formalmente nesta trilha. */
  started: boolean;
  completed: number;
  total: number;
  percentage: number;
  modules: ModuleScore[];
}

/** Resultado do simulado final de uma trilha. */
interface SimuladoScore {
  id: string;
  title: string;
  correct: number;
  total: number;
  percentage: number;
  approved: boolean;
  completedAt: string;
}

interface LevelInfo {
  area: string;
  level: string;
  correct: number;
  total: number;
  percentage: number;
  approved: boolean;
}

interface Row {
  user: SystemUser;
  cargo: Role;
  /** Nível no programa: 00 entrou, 01 iniciou trilha, 02 certificou-se. */
  level: UserLevel | null;
  /** Área de interesse: uma das duas, as duas, ou null quando não há dado. */
  foco: string | null;
  /** Progresso médio das trilhas iniciadas, ou null quando não há dado disponível. */
  progress: number | null;
  levels: LevelInfo[];
  simulados: SimuladoScore[];
  tracks: TrackProgress[];
  certificados: SimuladoScore[];
  /** Último sinal de vida; a presença é recalculada a partir dele. */
  lastSeen?: string;
  /** Quando a pessoa saiu do sistema, se saiu pelo botão de sair. */
  lastLogoutAt?: string;
}

/** Data e hora, para registrar a saída do sistema. */
function formatDateTime(iso?: string): string | null {
  if (!iso) return null;

  const date = new Date(iso);
  if (Number.isNaN(date.getTime()) || date.getTime() === 0) return null;

  return date.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function formatDate(iso: string | null): string {
  if (!iso) return '—';
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '—';
  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

/** Foco de estudo: a área escolhida, ou "Desenvolvimento e Análise" quando são as duas. */
function focoOf(snap: ProgressSnapshot): string | null {
  const interests = snap.interests ?? [];
  if (interests.length === 0) return null;
  if (interests.length === 1) return AREA_LABEL[interests[0]];
  return 'Desenvolvimento e Análise';
}

/** Níveis obtidos na avaliação inicial, por área. */
function levelsOf(snap: ProgressSnapshot): LevelInfo[] {
  const results = snap.assessments ?? {};

  return ASSESSMENTS.flatMap((assessment) => {
    const result = results[assessment.key];
    if (!result) return [];

    return [
      {
        area: assessment.title,
        level: result.level,
        correct: result.correct,
        total: result.total,
        percentage: result.percentage,
        approved: result.approved
      }
    ];
  });
}

/** Simulados de módulo já concluídos dentro de uma trilha. */
function moduleScoresOf(snap: ProgressSnapshot, trackId: string): ModuleScore[] {
  const results = snap.modules?.[trackId] ?? {};

  return trackModules(trackId).flatMap((module) => {
    const result = results[module.id];
    if (!result) return [];

    return [
      {
        id: module.id,
        label: `Módulo ${formatarNumeroDuplo(module.number)}`,
        correct: result.correct,
        total: result.total,
        percentage: result.percentage
      }
    ];
  });
}

/** Simulados finais concluídos: o do 360 e o de cada trilha. */
function simuladosOf(snap: ProgressSnapshot): SimuladoScore[] {
  return TRACK_IDS.flatMap((trackId) => {
    const result = snap.simulados?.[trackId];
    if (!result) return [];

    return [
      {
        id: trackId,
        title: trackTitle(trackId),
        correct: result.correct,
        total: result.total,
        percentage: result.percentage,
        approved: result.approved,
        completedAt: result.completedAt
      }
    ];
  });
}

/**
 * Trilhas com progresso: as da jornada e também as estudadas sem iniciar
 * jornada — é o caso do administrador, que tem tudo liberado de saída.
 */
function tracksOf(snap: ProgressSnapshot): TrackProgress[] {
  const started = (snap.journey ?? []).map((entry) => entry.trilhaId);

  return TRACK_IDS.flatMap((trackId) => {
    const modules = moduleScoresOf(snap, trackId);
    const naJornada = started.includes(trackId);

    // Sem jornada e sem nenhum módulo concluído, não há o que mostrar.
    if (!naJornada && modules.length === 0) return [];

    // Concluída com aprovação, a trilha passa para a coluna de certificados.
    if (isCertifiedFrom(snap.modules?.[trackId], snap.simulados?.[trackId], trackId)) return [];

    const { completed, total, percentage } = completionFrom(snap.modules?.[trackId], trackId);

    return [
      {
        id: trackId,
        title: trackTitle(trackId),
        started: naJornada,
        completed,
        total,
        percentage,
        modules
      }
    ];
  });
}

/** Nível do programa a partir do retrato de progresso. */
function levelFromSnapshot(snap: ProgressSnapshot): UserLevel {
  const certificado = TRACK_IDS.some((trackId) =>
    isCertifiedFrom(snap.modules?.[trackId], snap.simulados?.[trackId], trackId)
  );
  if (certificado) return 2;

  return (snap.journey ?? []).length > 0 ? 1 : 0;
}

export const PainelSection: React.FC<PainelSectionProps> = ({ currentUserId, currentRole }) => {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // Por padrão o card mostra só a primeira trilha; o botão abre o restante.
  const [expandidos, setExpandidos] = useState<string[]>([]);
  // Atribuição de perfil: disponível de Líder para cima.
  const podeAtribuir = atLeast(currentRole, 'Líder');
  const [cargoAberto, setCargoAberto] = useState<string | null>(null);
  const [salvandoCargo, setSalvandoCargo] = useState<string | null>(null);
  const [avisoCargo, setAvisoCargo] = useState<string | null>(null);
  // Reavalia a presença periodicamente usando os carimbos já carregados,
  // sem novas leituras no Firestore.
  const [, setAgora] = useState(Date.now());

  useEffect(() => {
    const relogio = window.setInterval(() => setAgora(Date.now()), 30_000);
    return () => window.clearInterval(relogio);
  }, []);

  const aplicarCargo = async (uid: string, novo: Role) => {
    setSalvandoCargo(uid);
    const resultado = await setUserRole(uid, novo);
    setSalvandoCargo(null);
    setCargoAberto(null);
    setAvisoCargo(resultado.message);

    if (resultado.success) {
      setRows((atuais) =>
        atuais.map((linha) =>
          linha.user.id === uid
            ? { ...linha, cargo: novo, user: { ...linha.user, role: novo } }
            : linha
        )
      );
    }
  };

  // Clique fora ou Esc fecham o menu de cargos.
  useEffect(() => {
    if (cargoAberto === null) return;

    const cliqueFora = (event: MouseEvent) => {
      const alvo = event.target as Element | null;
      if (!alvo?.closest('.painel-role-picker')) setCargoAberto(null);
    };

    const tecla = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setCargoAberto(null);
    };

    document.addEventListener('mousedown', cliqueFora);
    document.addEventListener('keydown', tecla);

    return () => {
      document.removeEventListener('mousedown', cliqueFora);
      document.removeEventListener('keydown', tecla);
    };
  }, [cargoAberto]);

  const alternarTrilhas = (userId: string) =>
    setExpandidos((atual) =>
      atual.includes(userId) ? atual.filter((id) => id !== userId) : [...atual, userId]
    );

  useEffect(() => {
    let ativo = true;

    // A lista de pessoas vem do Firebase Auth; o progresso, do Firestore.
    Promise.all([fetchUsers(), fetchAllProgress()]).then(([{ users, error: falha }, progresso]) => {
      if (!ativo) return;

      const linhas: Row[] = users.map((user) => {
        const cargo = roleOf(user);
        const snap = progresso[user.id];

        // Quem nunca sincronizou ainda não tem retrato de progresso.
        if (!snap) {
          return {
            user,
            cargo,
            level: null,
            foco: null,
            progress: null,
            levels: [],
            simulados: [],
            tracks: [],
            certificados: []
          };
        }

        const tracks = tracksOf(snap);
        const simulados = simuladosOf(snap);
        const certificados = simulados.filter((item) =>
          isCertifiedFrom(snap.modules?.[item.id], snap.simulados?.[item.id], item.id)
        );

        // Trilha certificada conta como 100% na média geral.
        const parcelas = [...tracks.map((track) => track.percentage), ...certificados.map(() => 100)];
        const media = parcelas.length
          ? Math.round(parcelas.reduce((total, valor) => total + valor, 0) / parcelas.length)
          : 0;

        return {
          user,
          cargo,
          // A progressão de níveis não vale para o administrador.
          level: hasLevels(cargo) ? levelFromSnapshot(snap) : null,
          foco: focoOf(snap),
          progress: media,
          levels: levelsOf(snap),
          simulados,
          tracks,
          certificados,
          lastSeen: snap.lastSeen,
          lastLogoutAt: snap.lastLogoutAt
        };
      });

      // Do maior perfil para o menor; dentro do mesmo perfil, por nome.
      linhas.sort(
        (a, b) =>
          rankOf(b.cargo) - rankOf(a.cargo) || a.user.name.localeCompare(b.user.name, 'pt-BR')
      );

      setRows(linhas);
      setError(falha ?? null);
      setLoading(false);
    });

    return () => {
      ativo = false;
    };
  }, [currentUserId]);

  const comProgresso = rows.filter((row) => row.progress !== null);
  const media = comProgresso.length
    ? Math.round(
        comProgresso.reduce((total, row) => total + (row.progress ?? 0), 0) / comProgresso.length
      )
    : 0;

  return (
    <div className="page">
      <header className="page-head">
        <span className="home-badge">Painel</span>
        <h1>Usuários do sistema</h1>
        <p>
          Todas as pessoas cadastradas, com cargo, foco de estudo e o resultado de cada avaliação,
          simulado e trilha — sempre em acertos e percentual.
        </p>
      </header>

      {loading ? (
        <section className="subpage">
          <div className="subpage-empty">
            <Loader2 size={26} className="animate-spin" />
            <strong>Carregando usuários...</strong>
          </div>
        </section>
      ) : error ? (
        <section className="subpage">
          <div className="subpage-empty">
            <AlertCircle size={26} />
            <strong>Não foi possível carregar os usuários</strong>
            <span>{error}</span>
          </div>
        </section>
      ) : (
        <>
          <div className="journey-summary">
            <div>
              <strong>{formatarNumero(rows.length)}</strong>
              <span>{rows.length === 1 ? 'usuário cadastrado' : 'usuários cadastrados'}</span>
            </div>
            <div>
              <strong>{formatarNumero(comProgresso.length)}</strong>
              <span>com progresso disponível</span>
            </div>
            <div>
              <strong>{formatarPercentual(media)}</strong>
              <span>progresso médio</span>
            </div>
          </div>

          {rows.length === 0 ? (
            <section className="subpage" style={{ marginTop: '1.2rem' }}>
              <div className="subpage-empty">
                <Users size={26} />
                <strong>Nenhum usuário cadastrado ainda.</strong>
              </div>
            </section>
          ) : (
            <div className="painel-list">
              {rows.map(({ user, cargo, level, foco, progress, levels, simulados, tracks, certificados, lastSeen, lastLogoutAt }) => (
                <article
                  key={user.id}
                  className={`painel-card ${cargoAberto === user.id ? 'menu-aberto' : ''}`}
                >
                  <header className="painel-card-head">
                    <img
                      src={user.avatarUrl || DEFAULT_AVATAR}
                      alt={user.name}
                      className="painel-avatar"
                    />

                    <div className="painel-identity">
                      <strong>
                        {user.name}
                        {user.id === currentUserId && (
                          <span
                            className="painel-tag"
                            style={{
                              color: ROLE_STYLE[cargo].color,
                              background: ROLE_STYLE[cargo].background,
                              borderColor: ROLE_STYLE[cargo].color
                            }}
                          >
                            você
                          </span>
                        )}
                        {user.disabled && <span className="painel-tag off">desativado</span>}
                        {level !== null && (
                          <span
                            className={`painel-level nivel-${level}`}
                            title={LEVEL_DESCRIPTION[level]}
                          >
                            {levelLabel(level)}
                          </span>
                        )}
                      </strong>
                      <span>{user.email}</span>
                    </div>

                    <div className="painel-badges">
                      {/* A conta administrativa é sempre Administrador e não se altera. */}
                      {podeAtribuir &&
                      user.email.toLowerCase() !== ADMIN_EMAIL &&
                      rankOf(cargo) <= rankOf(currentRole) ? (
                        <div className="painel-role-picker">
                          <button
                            type="button"
                            className="painel-cargo botao"
                            style={ROLE_STYLE[cargo]}
                            onClick={() =>
                              setCargoAberto((atual) => (atual === user.id ? null : user.id))
                            }
                            title="Alterar o perfil desta pessoa"
                          >
                            {cargo === 'Administrador' ? (
                              <ShieldCheck size={13} />
                            ) : (
                              <UserRound size={13} />
                            )}
                            {cargo}
                            <ChevronDown size={12} />
                          </button>

                          {cargoAberto === user.id && (
                            <div className="painel-role-menu" role="menu">
                              {ROLES.map((opcao) => {
                                const acimaDoMeu = rankOf(opcao) > rankOf(currentRole);

                                return (
                                  <button
                                    key={opcao}
                                    type="button"
                                    role="menuitem"
                                    className={opcao === cargo ? 'ativo' : ''}
                                    style={acimaDoMeu ? undefined : { color: ROLE_STYLE[opcao].color }}
                                    disabled={acimaDoMeu || salvandoCargo === user.id}
                                    title={
                                      acimaDoMeu
                                        ? 'Você só pode aplicar perfis iguais ou inferiores ao seu'
                                        : undefined
                                    }
                                    onClick={() => aplicarCargo(user.id, opcao)}
                                  >
                                    {opcao}
                                    {opcao === cargo && <Check size={13} />}
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      ) : (
                        <span className="painel-cargo" style={ROLE_STYLE[cargo]}>
                          {cargo === 'Administrador' ? (
                            <ShieldCheck size={13} />
                          ) : (
                            <UserRound size={13} />
                          )}
                          {cargo}
                        </span>
                      )}

                      {foco && (
                        <span className="painel-foco">
                          <Target size={13} /> {foco}
                        </span>
                      )}
                    </div>

                    {progress === null && <span className="painel-nodata">sem dados</span>}
                  </header>

                  {/* Fechado por padrão: cada pessoa ocupa uma linha no painel. */}
                  {cargo !== 'Administrador' && expandidos.includes(user.id) && (
                    <div className="painel-card-body">
                      {/* Avaliação inicial, simulado do 360 e simulados das trilhas, juntos. */}
                      {(levels.length > 0 || simulados.length > 0) && (
                        <div className="painel-block">
                          <span className="painel-block-title">
                            Avaliações e simulados
                            <em className="painel-count">{formatarNumero(levels.length + simulados.length)}</em>
                          </span>
                          <ul className="painel-scores">
                            {levels.map((item) => (
                              <li key={item.area} className={item.approved ? '' : 'rejected'}>
                                <span>{item.area}</span>
                                <em>
                                  {item.level} · {formatarNumero(item.correct)}/{formatarNumero(item.total)} · {formatarPercentual(item.percentage)}
                                </em>
                              </li>
                            ))}

                            {simulados.map((item) => (
                              <li key={item.id} className={item.approved ? '' : 'rejected'}>
                                <span>Simulado · {item.title}</span>
                                <em>
                                  {formatarNumero(item.correct)}/{formatarNumero(item.total)} · {formatarPercentual(item.percentage)} ·{' '}
                                  {item.approved ? 'aprovado' : 'não aprovado'}
                                </em>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="painel-block">
                        <span className="painel-block-title">
                          Trilhas
                          {tracks.length > 0 && <em className="painel-count">{formatarNumero(tracks.length)}</em>}
                        </span>

                        {tracks.length === 0 ? (
                          <span className="painel-empty-line">
                            {progress === null
                              ? 'Sem dados neste dispositivo'
                              : 'Nenhuma trilha iniciada'}
                          </span>
                        ) : (
                          <ul className="painel-tracks">
                            {tracks.map((track) => (
                              <li key={track.id}>
                                <div className="painel-track-head">
                                  <span>
                                    <Route size={12} /> {track.title}
                                    {!track.started && (
                                      <em className="painel-track-tag">sem jornada</em>
                                    )}
                                  </span>
                                  <strong>
                                    {track.completed}/{track.total} · {formatarPercentual(track.percentage)}
                                  </strong>
                                </div>
                                <div className="journey-bar">
                                  <div style={{ width: `${track.percentage}%` }} />
                                </div>

                                {track.modules.length > 0 && (
                                  <ul className="painel-module-scores">
                                    {track.modules.map((module) => (
                                      <li key={module.id}>
                                        {module.label}
                                        <strong>
                                          {formatarNumero(module.correct)}/{formatarNumero(module.total)}
                                        </strong>
                                        <em>{formatarPercentual(module.percentage)}</em>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      {/* Trilha com simulado aprovado sai das trilhas e vira certificado. */}
                      <div className="painel-block">
                        <span className="painel-block-title">
                          Certificados
                          {certificados.length > 0 && (
                            <em className="painel-count">{formatarNumero(certificados.length)}</em>
                          )}
                        </span>

                        {certificados.length === 0 ? (
                          <span className="painel-empty-line">
                            {progress === null
                              ? 'Sem dados neste dispositivo'
                              : 'Nenhuma trilha concluída'}
                          </span>
                        ) : (
                          <ul className="painel-certificates">
                            {certificados.map((item) => (
                              <li key={item.id}>
                                <Award size={15} />
                                <div>
                                  <strong>{item.title}</strong>
                                  <span>
                                    {formatarNumero(item.correct)}/{formatarNumero(item.total)} · {formatarPercentual(item.percentage)} ·{' '}
                                    {formatDate(item.completedAt)}
                                  </span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                    </div>
                  )}

                  {/* O administrador não participa da formação: sem rodapé de progresso. */}
                  {cargo !== 'Administrador' && (
                    <footer className="painel-card-foot">
                      <span className="painel-resumo">
                        {formatarNumero(levels.length)}{' '}
                        {levels.length === 1 ? 'avaliação' : 'avaliações'} · {formatarNumero(simulados.length)}{' '}
                        {simulados.length === 1 ? 'simulado' : 'simulados'} · {formatarNumero(tracks.length)}{' '}
                        {tracks.length === 1 ? 'trilha' : 'trilhas'} · {formatarNumero(certificados.length)}{' '}
                        {certificados.length === 1 ? 'certificado' : 'certificados'}
                      </span>

                      <span className="painel-resumo painel-datas">
                        Conta criada em {formatDate(user.createdAt)} · Último acesso em{' '}
                        {formatDate(user.lastSignInAt)}
                        {!isOnline(lastSeen) && formatDateTime(lastLogoutAt) && (
                          <> · Saiu em {formatDateTime(lastLogoutAt)}</>
                        )}
                      </span>

                      <div className="painel-foot-acoes">
                        {isOnline(lastSeen) && (
                          <span className="painel-online">
                            <i /> online
                          </span>
                        )}

                        <button
                          type="button"
                          className="painel-tracks-toggle"
                          onClick={() => alternarTrilhas(user.id)}
                        >
                          <ChevronDown
                            size={13}
                            className={expandidos.includes(user.id) ? 'open' : ''}
                          />
                          {expandidos.includes(user.id) ? 'Ver menos' : 'Ver tudo'}
                        </button>
                      </div>
                    </footer>
                  )}
                </article>
              ))}
            </div>
          )}

          {avisoCargo && (
            <div className="profile-note info" style={{ marginTop: '1.2rem' }}>
              <Info size={15} />
              <span>{avisoCargo}</span>
            </div>
          )}

          <div className="profile-note info" style={{ marginTop: '1.2rem' }}>
            <Info size={15} />
            <span>
              O progresso fica registrado na nuvem e é atualizado a cada avanço. Quem aparece como
              "sem dados" ainda não entrou no sistema depois dessa mudança — o retrato é criado no
              primeiro acesso.
            </span>
          </div>
        </>
      )}
    </div>
  );
};
