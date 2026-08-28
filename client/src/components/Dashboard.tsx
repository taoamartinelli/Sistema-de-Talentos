import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ChevronDown, ClipboardCheck, Home, Layers, LayoutDashboard, Lock, LogOut, MessageCircle,
  Radar,
  Route,
  Settings,
  UserRound
} from 'lucide-react';
import { User } from '../types';
import { ZelloLogo } from './ZelloLogo';
import { ProfileModal } from './ProfileModal';
import { SettingsModal } from './SettingsModal';
import { HomeSection } from './HomeSection';
import { AssessmentSection } from './AssessmentSection';
import { ThreeSixtySection } from './ThreeSixtySection';
import { TrilhasSection } from './TrilhasSection';
import { JourneySection } from './JourneySection';
import { PainelSection } from './PainelSection';
import { DEFAULT_AVATAR } from '../utils/avatar';
import { acknowledge, isAcknowledged } from '../services/progress';
import { ROLE_STYLE, atLeast, hasFreeAccess, hasLevels, roleOf } from '../utils/roles';
import { InterestModal } from './InterestModal';
import { WelcomeModal } from './WelcomeModal';
import {
  addInterest,
  loadInterests,
  removeInterest,
  saveInterests,
  trackAreaOf
} from '../services/interest';
import { AssessmentKey } from '../data/assessments';
import { ApprovalModal } from './ApprovalModal';
import { ReprovedModal } from './ReprovedModal';
import { Simulado360Modal } from './Simulado360Modal';
import { isSimuladoApproved } from '../services/trackSimulado';
import { loadJourney } from '../services/journey';
import { levelLabel, levelOf } from '../services/level';
import { fetchAllProgress, pushProgress, syncProgress, touchPresence } from '../services/progressSync';
import { ChatPanel } from './ChatPanel';
import {
  CHANNELS,
  ChannelSummary,
  Conversation,
  channelHasUnread,
  hasUnread,
  observeChannels,
  observeConversations
} from '../services/chat';
import { SIMULADO_PASSING_SCORE } from '../data/simulado';
import { ResultMap, loadResults } from '../services/assessmentStorage';
import {
  hasSeenApproval,
  hasSeenBase360,
  hasTakenAllAssessments,
  isApprovedOverall,
  isSectionAvailable,
  lockReason,
  markApprovalSeen,
  markBase360Seen,
  stageOf
} from '../services/access';
import { BACK_PRIORITY, useBackHandler } from '../services/navigation';

interface DashboardProps {
  user: User;
  onLogout: () => void;
  onUserUpdated: (user: User) => void;
}

// Menu central do cabeçalho.
const NAV_ITEMS = [
  { key: 'inicio', title: 'Início', subtitle: 'Apresentação', icon: Home },
  { key: 'avaliacao', title: 'Avaliação', subtitle: 'Diagnóstico', icon: ClipboardCheck },
  { key: '360', title: '360', subtitle: 'Feedback', icon: Radar },
  { key: 'trilhas', title: 'Trilhas', subtitle: 'Conteúdos', icon: Route },
  { key: 'jornada', title: 'Minha Jornada', subtitle: 'Seu progresso', icon: Layers },
  { key: 'painel', title: 'Painel', subtitle: 'Visão geral', icon: LayoutDashboard }
] as const;

type SectionKey = (typeof NAV_ITEMS)[number]['key'];

export const Dashboard: React.FC<DashboardProps> = ({ user, onLogout, onUserUpdated }) => {
  // Administrador, Suporte e Líder navegam sem travas: nada de aviso de
  // ciência, avaliação obrigatória ou módulo bloqueado.
  const role = roleOf(user);
  const acessoLivre = hasFreeAccess(role);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionKey>('inicio');
  const [trilhaToOpen, setTrilhaToOpen] = useState<string | null>(null);
  const [acknowledged, setAcknowledged] = useState(() => acessoLivre || isAcknowledged(user.id));
  // Primeiro acesso: a pessoa escolhe a área antes de ver o sistema.
  const [interests, setInterests] = useState<AssessmentKey[]>(() => loadInterests(user.id));

  // Resultado da avaliação: define o que fica liberado daqui pra frente.
  const [results, setResults] = useState<ResultMap>(() => loadResults(user.id));
  const [approvalOpen, setApprovalOpen] = useState(false);
  // Aviso de entrada: fica de pé enquanto a pessoa não confirmar a leitura.
  const [welcomeOpen, setWelcomeOpen] = useState(() => !acessoLivre && !isAcknowledged(user.id));
  // Mensagens: a lista de conversas fica aberta o tempo todo para alimentar o aviso de não lidas.
  const [chatOpen, setChatOpen] = useState(false);
  const [conversas, setConversas] = useState<Conversation[]>([]);
  const [canais, setCanais] = useState<ChannelSummary[]>([]);
  // Muda quando um canal é marcado como lido, para o aviso recalcular.
  const [leituraCanais, setLeituraCanais] = useState(0);
  const marcarCanaisLidos = useCallback(() => setLeituraCanais((valor) => valor + 1), []);
  const [presenca, setPresenca] = useState<Record<string, string | undefined>>({});
  // Minha Jornada só existe depois que alguma trilha é iniciada.
  const [hasJourney, setHasJourney] = useState(() => loadJourney(user.id).length > 0);
  // Nível: 00 ao entrar, 01 ao iniciar uma trilha, 02 ao se certificar.
  const [level, setLevel] = useState(() => levelOf(user.id));

  const identity = { name: user.name, email: user.email, avatarUrl: user.avatarUrl };

  // Toda mudança de progresso é espelhada na nuvem, para o Painel ver todos.
  const salvarNaNuvem = () => {
    void pushProgress(user.id, identity);
  };

  const refreshLevel = () => {
    setLevel(levelOf(user.id));
    salvarNaNuvem();
  };

  useEffect(() => observeConversations(user.id, setConversas), [user.id]);
  useEffect(() => observeChannels(setCanais), []);

  // Presença das outras pessoas, usada no chat para mostrar quem está disponível.
  useEffect(() => {
    if (!chatOpen) return;

    void fetchAllProgress().then((todos) => {
      const mapa: Record<string, string | undefined> = {};
      Object.entries(todos).forEach(([uid, snap]) => {
        mapa[uid] = snap.lastSeen;
      });
      setPresenca(mapa);
    });
  }, [chatOpen]);

  // Sinal de vida periódico, para o Painel saber quem está online agora.
  useEffect(() => {
    void touchPresence(user.id);
    const relogio = window.setInterval(() => void touchPresence(user.id), 60_000);
    return () => window.clearInterval(relogio);
  }, [user.id]);

  // Ao entrar, traz o que estiver na nuvem e devolve o estado consolidado.
  useEffect(() => {
    void syncProgress(user.id, identity).then(() => {
      setAcknowledged(acessoLivre || isAcknowledged(user.id));
      setInterests(loadInterests(user.id));
      setResults(loadResults(user.id));
      setHasJourney(loadJourney(user.id).length > 0);
      setApproved360(isSimuladoApproved(user.id, '360'));
      setLevel(levelOf(user.id));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.id]);
  const [reprovedOpen, setReprovedOpen] = useState(false);
  // Simulado do 360: o caminho alternativo para liberar as trilhas.
  const [approved360, setApproved360] = useState(() => isSimuladoApproved(user.id, '360'));
  const [simulado360, setSimulado360] = useState<{ percentage: number; approved: boolean } | null>(
    null
  );

  const stage = stageOf(acknowledged, results, interests, approved360);

  // Áreas do catálogo de trilhas correspondentes aos interesses.
  const trackAreas = useMemo(() => interests.map(trackAreaOf), [interests]);
  const menuRef = useRef<HTMLDivElement>(null);

  // Voltar do navegador/mouse: fecha modais e retorna à página inicial.
  useBackHandler(
    profileOpen,
    () => {
      setProfileOpen(false);
      return () => setProfileOpen(true);
    },
    BACK_PRIORITY.modal
  );
  useBackHandler(
    settingsOpen,
    () => {
      setSettingsOpen(false);
      return () => setSettingsOpen(true);
    },
    BACK_PRIORITY.modal
  );
  useBackHandler(
    activeSection !== 'inicio',
    () => {
      const previous = activeSection;
      setActiveSection('inicio');
      return () => setActiveSection(previous);
    },
    BACK_PRIORITY.section
  );

  // A avaliação só abre depois que o usuário confirma a ciência na página Início.
  const handleAcknowledge = () => {
    acknowledge(user.id);
    setAcknowledged(true);
    salvarNaNuvem();
  };

  // Ao concluir um teste, reavalia os bloqueios e comemora a aprovação uma única vez.
  const handleResultsChange = (updated: ResultMap) => {
    setResults(updated);
    salvarNaNuvem();

    if (isApprovedOverall(updated, interests)) {
      if (!hasSeenApproval(user.id)) {
        markApprovalSeen(user.id);
        setApprovalOpen(true);
      }
      return;
    }

    // Com mais de uma área, só é reprovação quando não resta teste pendente.
    if (hasTakenAllAssessments(updated, interests)) setReprovedOpen(true);
  };

  // Resultado do simulado do 360: libera as trilhas e explica o próximo passo.
  const handleSimulado360 = (result: { percentage: number; approved: boolean }) => {
    refreshLevel();

    if (result.approved) {
      setApproved360(true);
      if (hasSeenBase360(user.id)) return;
      markBase360Seen(user.id);
    }
    setSimulado360(result);
  };

  const canaisNaoLidos = useMemo(
    () =>
      CHANNELS.filter((canal) =>
        channelHasUnread(
          canais.find((item) => item.id === canal.id),
          user.id
        )
      ).length,
    // leituraCanais entra de propósito: a leitura fica no navegador e não
    // dispara re-render sozinha.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [canais, user.id, leituraCanais]
  );

  const naoLidas =
    conversas.filter((conversa) => hasUnread(conversa, user.id)).length + canaisNaoLidos;

  const isLocked = (key: SectionKey) => {
    if (acessoLivre) return false;
    if (!isSectionAvailable(stage, key)) return true;
    return key === 'jornada' && !hasJourney;
  };

  // Ao sair da última trilha, a página deixa de existir: volta para as trilhas.
  const refreshJourney = () => {
    const ativa = loadJourney(user.id).length > 0;
    setHasJourney(ativa);
    refreshLevel();
    if (!ativa && activeSection === 'jornada') setActiveSection('trilhas');
  };

  // Mexer nas áreas de interesse pode bloquear a página aberta: volta para a Início.
  useEffect(() => {
    if (acessoLivre) return;
    if (!isSectionAvailable(stage, activeSection)) setActiveSection('inicio');
  }, [acessoLivre, stage, activeSection]);

  const reasonFor = (key: SectionKey) =>
    isSectionAvailable(stage, key) ? 'Inicie uma trilha para liberar' : lockReason(stage);


  // Fecha o menu ao clicar fora ou apertar Esc.
  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <div className="dashboard-container">
      {/* Main Panel */}
      <main className="dashboard-main">
        {/* Top Navbar */}
        <header className="top-navbar">
          <div className="topbar-brand">
            <ZelloLogo size={42} />
            <div className="brand-info">
              <span className="brand-title">Formação de Talentos</span>
              <span className="brand-tagline">Zello</span>
            </div>
          </div>

          <nav className="topbar-nav">
            {NAV_ITEMS.map(({ key, title, subtitle, icon: Icon }) => {
              const locked = isLocked(key);
              return (
              <button
                key={key}
                type="button"
                className={`topbar-nav-item ${activeSection === key ? 'active' : ''} ${locked ? 'locked' : ''}`}
                onClick={() => !locked && setActiveSection(key)}
                disabled={locked}
                title={locked ? reasonFor(key) : undefined}
              >
                {locked ? <Lock size={18} /> : <Icon size={18} />}
                <span className="topbar-nav-labels">
                  <span className="topbar-nav-title">{title}</span>
                  <span className="topbar-nav-subtitle">{locked ? 'Bloqueado' : subtitle}</span>
                </span>
              </button>
              );
            })}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginLeft: 'auto' }}>
            <button
              type="button"
              className={`icon-btn ${naoLidas > 0 ? 'com-aviso' : ''}`}
              title="Mensagens"
              aria-label="Mensagens"
              onClick={() => setChatOpen((aberto) => !aberto)}
            >
              <MessageCircle size={18} />
              {naoLidas > 0 && <span className="icon-btn-badge">{naoLidas}</span>}
            </button>

            <button
              type="button"
              className="icon-btn"
              title="Configurações"
              aria-label="Configurações"
              onClick={() => setSettingsOpen(true)}
            >
              <Settings size={18} />
            </button>

            <div className="user-menu-wrapper" ref={menuRef}>
              <button
                type="button"
                className="user-profile-btn"
                onClick={() => setMenuOpen((open) => !open)}
                aria-haspopup="menu"
                aria-expanded={menuOpen}
              >
                <img
                  src={user.avatarUrl || DEFAULT_AVATAR}
                  alt={user.name}
                  className="user-avatar"
                />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>{user.name}</span>
                  <span style={{ fontSize: '0.65rem', color: ROLE_STYLE[role].color }}>
                    {hasLevels(role) ? role + ' · ' + levelLabel(level) : role}
                  </span>
                </div>
                <ChevronDown size={14} className={`user-menu-chevron ${menuOpen ? 'open' : ''}`} />
              </button>

              {menuOpen && (
                <div className="user-menu" role="menu">
                  <div className="user-menu-header">
                    <span className="user-menu-name">{user.name}</span>
                    <span className="user-menu-email">{user.email}</span>
                  </div>

                  <button
                    type="button"
                    className="user-menu-item"
                    role="menuitem"
                    onClick={() => {
                      setMenuOpen(false);
                      setProfileOpen(true);
                    }}
                  >
                    <UserRound size={16} />
                    <span>Meu perfil</span>
                  </button>

                  <button
                    type="button"
                    className="user-menu-item danger"
                    role="menuitem"
                    onClick={() => {
                      setMenuOpen(false);
                      onLogout();
                    }}
                  >
                    <LogOut size={16} />
                    <span>Sair do Sistema</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Content View */}
        <div className="dashboard-content">

          {activeSection === 'inicio' ? (
            <HomeSection
              userName={user.name}
              acknowledged={acknowledged}
              onAcknowledge={handleAcknowledge}
              onGoToAssessment={() => setActiveSection('avaliacao')}
            />
          ) : activeSection === 'avaliacao' ? (
            <AssessmentSection
              userId={user.id}
              interests={interests}
              onAddInterest={(area) => {
                setInterests(addInterest(user.id, area));
                salvarNaNuvem();
              }}
              onRemoveInterest={(area) => {
                setInterests(removeInterest(user.id, area));
                salvarNaNuvem();
              }}
              onResultsChange={handleResultsChange}
            />
          ) : activeSection === '360' ? (
            <ThreeSixtySection
              userId={user.id}
              admin={acessoLivre}
              onSimuladoFinish={handleSimulado360}
            />
          ) : activeSection === 'trilhas' ? (
            <TrilhasSection
              userId={user.id}
              openTrilhaId={trilhaToOpen}
              onTrilhaOpened={() => setTrilhaToOpen(null)}
              admin={acessoLivre}
              areas={trackAreas}
              onJourneyChange={refreshJourney}
              onProgressChange={refreshLevel}
            />
          ) : activeSection === 'painel' ? (
            <PainelSection currentUserId={user.id} currentRole={role} />
          ) : activeSection === 'jornada' ? (
            <JourneySection
              onJourneyChange={refreshJourney}
              interests={interests}
              onAddInterest={(area) => {
                setInterests(addInterest(user.id, area));
                salvarNaNuvem();
              }}
              onRemoveInterest={(area) => {
                setInterests(removeInterest(user.id, area));
                salvarNaNuvem();
              }}
              userId={user.id}
              onOpenTrilhas={() => setActiveSection('trilhas')}
              onOpenTrilha={(trilhaId) => {
                setTrilhaToOpen(trilhaId);
                setActiveSection('trilhas');
              }}
            />
          ) : (
            <div className="section-placeholder">
              <strong>{NAV_ITEMS.find((item) => item.key === activeSection)?.title}</strong>
              <span>Esta seção ainda está em construção.</span>
            </div>
          )}
        </div>
      </main>

      {profileOpen && (
        <ProfileModal
          user={user}
          onClose={() => setProfileOpen(false)}
          onUserUpdated={onUserUpdated}
        />
      )}

      {settingsOpen && (
        <SettingsModal
          user={user}
          onClose={() => setSettingsOpen(false)}
          onLogout={onLogout}
        />
      )}

      {approvalOpen && (
        <ApprovalModal
          userName={user.name}
          onClose={() => setApprovalOpen(false)}
          onGoToTrilhas={() => {
            setApprovalOpen(false);
            setActiveSection('trilhas');
          }}
        />
      )}

      {simulado360 && (
        <Simulado360Modal
          userName={user.name}
          approved={simulado360.approved}
          percentage={simulado360.percentage}
          passingScore={SIMULADO_PASSING_SCORE}
          onClose={() => setSimulado360(null)}
          onGoToTrilhas={() => {
            setSimulado360(null);
            setActiveSection('trilhas');
          }}
        />
      )}

      {reprovedOpen && (
        <ReprovedModal
          userName={user.name}
          onClose={() => setReprovedOpen(false)}
          onGoTo360={() => {
            setReprovedOpen(false);
            setActiveSection('360');
          }}
        />
      )}

      {chatOpen && (
        <ChatPanel
          me={{ id: user.id, name: user.name, avatarUrl: user.avatarUrl }}
          conversations={conversas}
          channels={canais}
          presence={presenca}
          onClose={() => setChatOpen(false)}
          onChannelsRead={marcarCanaisLidos}
          canClearChannel={atLeast(role, 'Líder')}
        />
      )}

      {welcomeOpen && (
        <WelcomeModal userName={user.name} onClose={() => setWelcomeOpen(false)} />
      )}

      {/* A escolha da área vem logo após o "Estou Ciente". Perfis com acesso livre não passam por ela. */}
      {!acessoLivre && acknowledged && interests.length === 0 && (
        <InterestModal
          userName={user.name}
          onConfirm={(area) => {
            saveInterests(user.id, [area]);
            setInterests([area]);
            salvarNaNuvem();
          }}
        />
      )}
    </div>
  );
};
