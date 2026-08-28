import React from 'react';
import { BookOpen, CheckCircle2, Lock, Sparkles } from 'lucide-react';

interface WelcomeModalProps {
  userName: string;
  onClose: () => void;
}

/**
 * Primeira coisa que a pessoa vê ao entrar no sistema.
 * Explica que o avanço depende de ler a apresentação e confirmar o aviso.
 */
export const WelcomeModal: React.FC<WelcomeModalProps> = ({ userName, onClose }) => (
  <div className="modal-overlay">
    <div className="approval-modal">
      <div className="approval-icon">
        <Sparkles size={30} />
      </div>

      <h3>
        Bem-vindo, <span className="approval-name">{userName.split(' ')[0]}</span>
      </h3>
      <p className="approval-lead">
        Antes de começar, leia a apresentação do programa até o fim. Ela explica como funciona a
        formação, o que cada etapa libera e o que se espera de você.
      </p>

      <div className="approval-note">
        <BookOpen size={16} />
        <div>
          <strong>Leia toda a página de Início</strong>
          <span>
            A apresentação descreve a avaliação inicial, o avanço por fases, a certificação e a
            alocação em equipe.
          </span>
        </div>
      </div>

      <div className="approval-note secondary">
        <Lock size={16} />
        <div>
          <strong>Só avança ao clicar em "Estou Ciente"</strong>
          <span>
            As demais páginas permanecem bloqueadas até você confirmar, no fim da apresentação, que
            leu e está ciente das regras do programa.
          </span>
        </div>
      </div>

      <footer className="approval-foot">
        <button type="button" className="btn-primary" onClick={onClose}>
          <CheckCircle2 size={14} /> Começar a leitura
        </button>
      </footer>
    </div>
  </div>
);
