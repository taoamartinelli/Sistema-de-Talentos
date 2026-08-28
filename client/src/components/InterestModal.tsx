import React, { useState } from 'react';
import { Check, Code2, FileSearch } from 'lucide-react';
import { AssessmentKey } from '../data/assessments';

interface InterestModalProps {
  userName: string;
  onConfirm: (area: AssessmentKey) => void;
}

const OPTIONS: {
  key: AssessmentKey;
  icon: typeof Code2;
  title: string;
  subtitle: string;
  text: string;
  topics: string[];
}[] = [
  {
    key: 'desenvolvimento',
    icon: Code2,
    title: 'Desenvolvimento',
    subtitle: 'Construir a solução',
    text: 'Para quem quer atuar escrevendo, automatizando e sustentando software.',
    topics: ['Automação', 'IA', 'Kubernetes', 'Dynatrace', 'MuleSoft']
  },
  {
    key: 'analise',
    icon: FileSearch,
    title: 'Análise',
    subtitle: 'Entender e validar a solução',
    text: 'Para quem quer atuar com requisitos, qualidade e condução de produto.',
    topics: ['CTFL', 'CPRE', 'Scrum Master', 'Product Owner']
  }
];

/**
 * Primeiro acesso: a pessoa indica em qual área tem interesse.
 * A escolha define qual teste aparece na página de avaliação.
 */
export const InterestModal: React.FC<InterestModalProps> = ({ userName, onConfirm }) => {
  const [selected, setSelected] = useState<AssessmentKey | null>(null);

  return (
    <div className="modal-overlay">
      <div className="interest-modal">
        <header className="interest-head">
          <span className="home-badge">Bem-vindo</span>
          <h3>
            Olá, <span className="interest-name">{userName.split(' ')[0]}</span>. Onde você quer
            chegar?
          </h3>
          <p>
            Escolha a área em que tem interesse. A avaliação inicial vai medir o seu nível apenas
            nessa área, e é ela que define o seu ponto de partida.
          </p>
        </header>

        <div className="interest-options">
          {OPTIONS.map(({ key, icon: Icon, title, subtitle, text, topics }) => (
            <button
              key={key}
              type="button"
              className={`interest-card ${selected === key ? 'selected' : ''}`}
              onClick={() => setSelected(key)}
              aria-pressed={selected === key}
            >
              <div className="interest-card-head">
                <Icon size={22} />
                {selected === key && (
                  <span className="interest-check">
                    <Check size={13} />
                  </span>
                )}
              </div>

              <strong>{title}</strong>
              <span className="interest-card-subtitle">{subtitle}</span>
              <p>{text}</p>

              <ul className="interest-topics">
                {topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </button>
          ))}
        </div>

        <footer className="interest-foot">
          <span>Você poderá incluir a outra área depois, na página de avaliação.</span>
          <button
            type="button"
            className="btn-primary"
            disabled={selected === null}
            onClick={() => selected && onConfirm(selected)}
          >
            Continuar
          </button>
        </footer>
      </div>
    </div>
  );
};
