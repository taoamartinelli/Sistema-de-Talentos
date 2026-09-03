import React, { useState } from 'react';
import { AlertTriangle, ArrowRight, Check, Layers, Plus, Trash2, X } from 'lucide-react';
import { AREAS, TRILHAS } from '../data/trilhas';
import { formatStartedAt, loadJourney, progressOf, removeTrilha } from '../services/journey';
import { clearModuleResults } from '../services/moduleProgress';
import { BACK_PRIORITY, useBackHandler } from '../services/navigation';
import { Trilha } from '../data/trilhas';
import { AREA_LABEL } from '../services/interest';
import { AssessmentKey } from '../data/assessments';

interface JourneySectionProps {
  userId: string;
  onOpenTrilhas: () => void;
  /** Abre direto a trilha escolhida, sem passar pela lista. */
  onOpenTrilha: (trilhaId: string) => void;
  /** Avisa que a lista de trilhas da jornada mudou. */
  onJourneyChange?: () => void;
  /** Áreas de interesse, compartilhadas com a página de avaliação. */
  interests?: AssessmentKey[];
  onAddInterest?: (area: AssessmentKey) => void;
  onRemoveInterest?: (area: AssessmentKey) => void;
}

export const JourneySection: React.FC<JourneySectionProps> = ({
  userId,
  onOpenTrilhas,
  onOpenTrilha,
  onJourneyChange,
  interests = [],
  onAddInterest,
  onRemoveInterest
}) => {
  const [entries, setEntries] = useState(() => loadJourney(userId));
  const [confirming, setConfirming] = useState<Trilha | null>(null);

  useBackHandler(
    confirming !== null,
    () => {
      setConfirming(null);
      return undefined;
    },
    BACK_PRIORITY.modal
  );

  const confirmRemove = () => {
    if (!confirming) return;
    // Sair da jornada apaga também o progresso dos módulos daquela trilha.
    clearModuleResults(userId, confirming.id);
    setEntries(removeTrilha(userId, confirming.id));
    onJourneyChange?.();
    setConfirming(null);
  };

  const items = entries
    .map((entry) => ({
      entry,
      trilha: TRILHAS.find((item) => item.id === entry.trilhaId)!,
      progress: progressOf(userId, entry)
    }))
    .sort((a, b) => a.trilha.number - b.trilha.number);

  const average = items.length
    ? Math.round(items.reduce((total, item) => total + item.progress.percentage, 0) / items.length)
    : 0;

  return (
    <div className="page">
      <header className="page-head">
        <span className="home-badge">Minha Jornada</span>
        <h1>Suas trilhas em andamento</h1>
        <p>
          Aqui ficam as trilhas em que você iniciou a jornada, com o progresso de cada uma. Para
          entrar em uma nova, abra a página Trilhas e clique em "Iniciar jornada".
        </p>
      </header>

      {/* Áreas de interesse — o mesmo dado usado na página de avaliação. */}
      {(onAddInterest || onRemoveInterest) && (
        <section className="journey-areas">
          <div className="journey-areas-text">
            <strong>Áreas de interesse</strong>
            <span>
              Definem quais testes aparecem na Avaliação e quais trilhas ficam disponíveis. É
              preciso manter ao menos uma área ativa.
            </span>
          </div>

          <div className="journey-areas-options">
            {(['desenvolvimento', 'analise'] as AssessmentKey[]).map((area) => {
              const ativa = interests.includes(area);
              const ultima = ativa && interests.length <= 1;

              return (
                <button
                  key={area}
                  type="button"
                  className={`journey-area-toggle ${ativa ? 'on' : ''}`}
                  disabled={ultima}
                  title={
                    ultima
                      ? 'É preciso manter ao menos uma área de interesse'
                      : ativa
                        ? `Remover ${AREA_LABEL[area]}`
                        : `Adicionar ${AREA_LABEL[area]}`
                  }
                  onClick={() => (ativa ? onRemoveInterest?.(area) : onAddInterest?.(area))}
                >
                  {ativa ? <Check size={13} /> : <Plus size={13} />}
                  {AREA_LABEL[area]}
                </button>
              );
            })}
          </div>
        </section>
      )}

      {items.length === 0 ? (
        <section className="subpage">
          <div className="subpage-empty">
            <Layers size={26} />
            <strong>Você ainda não iniciou nenhuma trilha.</strong>
            <span>Escolha uma trilha e clique em "Iniciar jornada" para acompanhar aqui.</span>
            <button
              type="button"
              className="btn-primary"
              style={{ marginTop: '1rem' }}
              onClick={onOpenTrilhas}
            >
              Ver trilhas <ArrowRight size={14} />
            </button>
          </div>
        </section>
      ) : (
        <>
          <div className="journey-summary">
            <div>
              <strong>{items.length}</strong>
              <span>{items.length === 1 ? 'trilha iniciada' : 'trilhas iniciadas'}</span>
            </div>
            <div>
              <strong>{average}%</strong>
              <span>progresso médio</span>
            </div>
            <div>
              <strong>
                {
                  items.filter((item) => item.progress.percentage === 100 && item.progress.total > 0)
                    .length
                }
              </strong>
              <span>concluídas</span>
            </div>
          </div>

          <div className="journey-list">
            {items.map(({ entry, trilha, progress }) => {
              const area = AREAS.find((item) => item.key === trilha.area);
              return (
                <article
                  key={trilha.id}
                  className="journey-item"
                  role="button"
                  tabIndex={0}
                  title={`Abrir a trilha ${trilha.title}`}
                  onClick={() => onOpenTrilha(trilha.id)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      onOpenTrilha(trilha.id);
                    }
                  }}
                >
                  <div className="journey-item-head">
                    <div>
                      <span className="t360-module-number">
                        Trilha {String(trilha.number).padStart(2, '0')} · {area?.key === 'analista' ? 'Analista' : 'Desenvolvimento'}
                      </span>
                      <h3>{trilha.title}</h3>
                      <span className="journey-item-date">
                        Iniciada em {formatStartedAt(entry.startedAt)}
                      </span>
                    </div>

                    <div className="journey-item-actions">
                      <span className="journey-percent">{progress.percentage}%</span>
                      <button
                        type="button"
                        className="icon-btn"
                        title="Sair desta trilha"
                        aria-label="Sair desta trilha"
                        onClick={(event) => {
                          event.stopPropagation();
                          setConfirming(trilha);
                        }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="journey-bar">
                    <div style={{ width: `${progress.percentage}%` }} />
                  </div>

                  <span className="journey-item-detail">
                    {progress.total > 0
                      ? `${progress.completed} de ${progress.total} módulos concluídos`
                      : 'Conteúdo em preparação — o progresso começa a contar quando os módulos forem publicados.'}
                  </span>
                </article>
              );
            })}
          </div>
        </>
      )}

      {confirming && (
        <div className="modal-overlay" onClick={() => setConfirming(null)}>
          <div className="confirm-modal" onClick={(event) => event.stopPropagation()}>
            <header className="confirm-modal-head">
              <span className="confirm-modal-icon">
                <AlertTriangle size={18} />
              </span>
              <div>
                <h3>Sair da trilha {confirming.title}?</h3>
                <p>Esta ação não pode ser desfeita.</p>
              </div>
              <button
                type="button"
                className="profile-close"
                onClick={() => setConfirming(null)}
                aria-label="Fechar"
              >
                <X size={18} />
              </button>
            </header>

            <div className="confirm-modal-body">
              <p>
                Todo o seu progresso nesta trilha será perdido: os módulos concluídos, os
                resultados dos simulados e a data de início.
              </p>
              <p>
                Se decidir voltar depois, será preciso <strong>iniciar a jornada do zero</strong> e
                refazer todos os simulados de módulo.
              </p>
            </div>

            <footer className="confirm-modal-foot">
              <button type="button" className="btn-plain" onClick={() => setConfirming(null)}>
                Cancelar
              </button>
              <button type="button" className="btn-danger" onClick={confirmRemove}>
                <Trash2 size={14} /> Sair e apagar progresso
              </button>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
};
