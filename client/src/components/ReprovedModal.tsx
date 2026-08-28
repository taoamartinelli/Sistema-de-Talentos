import React from 'react';
import { AlertCircle, Radar, RotateCcw, X } from 'lucide-react';

interface ReprovedModalProps {
  userName: string;
  onClose: () => void;
  onGoTo360: () => void;
}

/**
 * Aparece ao concluir a avaliação inicial sem atingir a nota mínima.
 * O caminho para avançar de nível é concluir a trilha 360.
 */
export const ReprovedModal: React.FC<ReprovedModalProps> = ({
  userName,
  onClose,
  onGoTo360
}) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="approval-modal reproved" onClick={(event) => event.stopPropagation()}>
      <button type="button" className="profile-close" onClick={onClose} aria-label="Fechar">
        <X size={18} />
      </button>

      <div className="approval-icon">
        <AlertCircle size={30} />
      </div>

      <h3>
        <span className="approval-name">{userName.split(' ')[0]}</span>, sua base ainda precisa de
        reforço
      </h3>
      <p className="approval-lead">
        Você não atingiu a nota mínima na avaliação inicial. Isso não te impede de estudar — apenas
        indica por onde começar.
      </p>

      <div className="approval-note">
        <Radar size={16} />
        <div>
          <strong>Conclua a trilha 360 para avançar de nível</strong>
          <span>
            O 360 é a formação base, feita exatamente para quem ainda não tem a noção inicial.
            Estude os módulos e seja aprovado no simulado final dela para liberar as trilhas de
            especialização.
          </span>
        </div>
      </div>

      <div className="approval-note secondary">
        <RotateCcw size={16} />
        <div>
          <strong>Você pode refazer a avaliação</strong>
          <span>
            Depois de estudar pelo 360, refaça o teste a qualquer momento na página Avaliação.
          </span>
        </div>
      </div>

      <footer className="approval-foot">
        <button type="button" className="btn-ghost" onClick={onClose}>
          Ver meu resultado
        </button>
        <button type="button" className="btn-primary" onClick={onGoTo360}>
          <Radar size={14} /> Começar pelo 360
        </button>
      </footer>
    </div>
  </div>
);
