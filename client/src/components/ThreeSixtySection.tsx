import React from 'react';
import { TrackPage } from './TrackPage';
import { FLASHCARDS } from '../data/flashcards';
import { MODULE_QUIZZES } from '../data/moduleQuizzes';
import { SIMULADO_PASSING_SCORE, SIMULADO_QUESTIONS } from '../data/simulado';
import { MODULES, TRILHA_OVERVIEW } from '../data/trilha360';

interface ThreeSixtySectionProps {
  userId: string;
  /** Administrador: módulos e simulado liberados de saída. */
  admin?: boolean;
  /** Resultado do simulado final do 360, que decide o avanço de nível. */
  onSimuladoFinish?: (result: { percentage: number; approved: boolean }) => void;
}

export const ThreeSixtySection: React.FC<ThreeSixtySectionProps> = ({
  userId,
  admin = false,
  onSimuladoFinish
}) => (
  <div className="page">
    <header className="page-head">
      <span className="home-badge">360</span>
      <h1>Formação 360</h1>
      <p>
        Tudo o que compõe a trilha para estudos iniciantes em um só lugar: os módulos, o material de
        estudo, a revisão por flash cards e o simulado final.
      </p>
    </header>

    <TrackPage
      userId={userId}
      trackId="360"
      moduleQuizzes={MODULE_QUIZZES}
      overview={TRILHA_OVERVIEW}
      modules={MODULES}
      flashcards={FLASHCARDS}
      simulado={SIMULADO_QUESTIONS}
      unlockAll={admin}
      onSimuladoFinish={onSimuladoFinish}
    passingScore={SIMULADO_PASSING_SCORE}
    />
  </div>
);
