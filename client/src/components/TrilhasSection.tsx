import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Play, Route } from 'lucide-react';
import { AREAS, TRILHAS, TRILHA_PASSING_SCORE, TrackArea, Trilha } from '../data/trilhas';
import { TrackPage } from './TrackPage';
import { isStarted, startTrilha } from '../services/journey';
import { BACK_PRIORITY, useBackHandler } from '../services/navigation';

interface TrilhasSectionProps {
  userId: string;
  /** Id da trilha que deve abrir direto (vindo da Minha Jornada). */
  openTrilhaId?: string | null;
  onTrilhaOpened?: () => void;
  /** Administrador: todas as trilhas abertas, sem precisar iniciar jornada. */
  admin?: boolean;
  /** Áreas de interesse. Lista vazia mostra todas. */
  areas?: TrackArea[];
  /** Avisa que a lista de trilhas da jornada mudou. */
  onJourneyChange?: () => void;
  /** Avisa que houve progresso dentro de uma trilha. */
  onProgressChange?: () => void;
}

export const TrilhasSection: React.FC<TrilhasSectionProps> = ({
  userId,
  openTrilhaId,
  onTrilhaOpened,
  admin = false,
  areas = [],
  onJourneyChange,
  onProgressChange
}) => {
  // Só as áreas de interesse aparecem no catálogo.
  const visibleAreas =
    admin || areas.length === 0 ? AREAS : AREAS.filter((area) => areas.includes(area.key));

  const [selected, setSelected] = useState<Trilha | null>(null);
  const [started, setStarted] = useState(false);

  useBackHandler(
    selected !== null,
    () => {
      const previous = selected;
      setSelected(null);
      return () => setSelected(previous);
    },
    BACK_PRIORITY.detail
  );

  const openTrilha = (trilha: Trilha) => {
    setSelected(trilha);
    setStarted(isStarted(userId, trilha.id));
  };

  // Abertura direta a partir da Minha Jornada.
  useEffect(() => {
    if (!openTrilhaId) return;

    const trilha = TRILHAS.find((item) => item.id === openTrilhaId);
    if (trilha) {
      setSelected(trilha);
      setStarted(isStarted(userId, trilha.id));
    }
    onTrilhaOpened?.();
  }, [openTrilhaId, userId, onTrilhaOpened]);

  const beginJourney = (trilha: Trilha) => {
    startTrilha(userId, trilha.id);
    setStarted(true);
    onJourneyChange?.();
  };

  if (selected) {
    return (
      <div className="page">
        <header className="page-head">
          <div className="trilha-back-row">
            <button type="button" className="btn-plain" onClick={() => setSelected(null)}>
              <ArrowLeft size={14} /> Voltar às trilhas
            </button>
          </div>

          <span className="home-badge">
            Trilha {String(selected.number).padStart(2, '0')}
          </span>

          <div className="trilha-title-row">
            <h1>{selected.title}</h1>
            {started ? (
              <span className="trilha-started">
                <Check size={14} /> Jornada iniciada
              </span>
            ) : (
              <button type="button" className="btn-primary" onClick={() => beginJourney(selected)}>
                <Play size={13} /> Iniciar jornada
              </button>
            )}
          </div>

          <p>{selected.objective}</p>
        </header>

        <TrackPage
          userId={userId}
          trackId={selected.id}
          overview={
            selected.overview ?? {
              title: selected.title,
              intro: selected.objective,
              pillars: selected.topics
            }
          }
          modules={selected.modules}
          flashcards={selected.flashcards}
          simulado={selected.simulado}
          moduleQuizzes={selected.moduleQuizzes}
          requiresJourney
          journeyStarted={started}
          unlockAll={admin}
          onProgressChange={onProgressChange}
          onSimuladoFinish={onProgressChange}
          passingScore={TRILHA_PASSING_SCORE}
        />
      </div>
    );
  }

  return (
    <div className="page">
      <header className="page-head">
        <span className="home-badge">Trilhas</span>
        <h1>Trilhas de formação</h1>
        <p>
          Cada trilha é um caminho completo de estudo, organizado em fases, com conteúdos, flash
          cards e simulado próprios. Escolha a trilha correspondente ao seu objetivo.
        </p>
      </header>

      {visibleAreas.map((area) => {
        const trilhas = TRILHAS.filter((trilha) => trilha.area === area.key);
        if (trilhas.length === 0) return null;

        return (
          <section key={area.key} className="trilha-area">
            <div className="trilha-area-head">
              <h2>{area.title}</h2>
              <p>{area.description}</p>
              <span className="trilha-area-count">
                {trilhas.length} {trilhas.length === 1 ? 'trilha' : 'trilhas'}
              </span>
            </div>

            <div className="t360-modules">
              {trilhas.map((trilha) => (
                <article key={trilha.id} className="t360-module">
                  <span className="t360-module-number">
                    Trilha {String(trilha.number).padStart(2, '0')}
                  </span>
                  <h3>{trilha.title}</h3>
                  <p>{trilha.objective}</p>
                  <span className="t360-module-count">
                    {trilha.modules.length > 0
                      ? `${trilha.modules.length} ${trilha.modules.length === 1 ? 'módulo' : 'módulos'}`
                      : 'Conteúdo em preparação'}
                  </span>
                  <button type="button" className="btn-ghost" onClick={() => openTrilha(trilha)}>
                    Ver trilha <ArrowRight size={14} />
                  </button>
                </article>
              ))}
            </div>
          </section>
        );
      })}

      <div className="t360-completion">
        <h3>Como as trilhas funcionam</h3>
        <ul>
          <li>
            <Route size={14} /> O avanço é por fases: concluir uma libera a próxima.
          </li>
          <li>
            <Route size={14} /> Cada trilha reúne módulos, conteúdos, flash cards e simulado.
          </li>
          <li>
            <Route size={14} /> O simulado tem 50 questões e exige {TRILHA_PASSING_SCORE}% de acerto para aprovação.
          </li>
        </ul>
      </div>
    </div>
  );
};
