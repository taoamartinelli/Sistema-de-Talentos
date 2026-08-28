import React from 'react';
import { CheckCircle2, Info, Route, X } from 'lucide-react';

interface ApprovalModalProps {
  userName: string;
  onClose: () => void;
  onGoToTrilhas: () => void;
}

/**
 * Aparece uma única vez, logo após a aprovação na avaliação inicial.
 * Libera o caminho direto para as trilhas e esclarece o papel do 360.
 */
export const ApprovalModal: React.FC<ApprovalModalProps> = ({
  userName,
  onClose,
  onGoToTrilhas
}) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="approval-modal" onClick={(event) => event.stopPropagation()}>
      <button type="button" className="profile-close" onClick={onClose} aria-label="Fechar">
        <X size={18} />
      </button>

      <div className="approval-icon">
        <CheckCircle2 size={30} />
      </div>

      <h3>
        Parabéns, <span className="approval-name">{userName.split(' ')[0]}</span>!
      </h3>
      <p className="approval-lead">
        Você foi aprovado na avaliação inicial. Todas as páginas do sistema estão liberadas e você
        já pode começar a estudar.
      </p>

      <div className="approval-note">
        <Route size={16} />
        <div>
          <strong>Vá direto para uma trilha</strong>
          <span>
            Escolha a trilha do seu objetivo, inicie a jornada e avance pelos módulos no seu ritmo.
          </span>
        </div>
      </div>

      <div className="approval-note secondary">
        <Info size={16} />
        <div>
          <strong>O 360 não é obrigatório</strong>
          <span>
            Ele existe para quem ainda não tem a noção básica. Como você foi aprovado, pode
            concluí-lo se quiser reforçar a base — mas não precisa passar por ele para seguir nas
            trilhas.
          </span>
        </div>
      </div>

      <footer className="approval-foot">
        <button type="button" className="btn-ghost" onClick={onClose}>
          Continuar explorando
        </button>
        <button type="button" className="btn-primary" onClick={onGoToTrilhas}>
          <Route size={14} /> Ir para as trilhas
        </button>
      </footer>
    </div>
  </div>
);
