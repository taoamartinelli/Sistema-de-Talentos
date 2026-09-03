import React from 'react';
import { AlertCircle, BookOpen, CheckCircle2, Route, RotateCcw, X } from 'lucide-react';

interface Simulado360ModalProps {
  userName: string;
  approved: boolean;
  percentage: number;
  passingScore: number;
  onClose: () => void;
  /** Aprovado: leva às trilhas. Reprovado: volta ao conteúdo do 360. */
  onGoToTrilhas: () => void;
}

/**
 * Resultado do simulado final do 360, que é o caminho de avanço de nível
 * para quem não foi aprovado na avaliação inicial.
 */
export const Simulado360Modal: React.FC<Simulado360ModalProps> = ({
  userName,
  approved,
  percentage,
  passingScore,
  onClose,
  onGoToTrilhas
}) => (
  <div className="modal-overlay" onClick={onClose}>
    <div
      className={`approval-modal ${approved ? '' : 'reproved'}`}
      onClick={(event) => event.stopPropagation()}
    >
      <button type="button" className="profile-close" onClick={onClose} aria-label="Fechar">
        <X size={18} />
      </button>

      <div className="approval-icon">
        {approved ? <CheckCircle2 size={30} /> : <AlertCircle size={30} />}
      </div>

      {approved ? (
        <>
          <h3>
            Aprovada no 360, <span className="approval-name">{userName.split(' ')[0]}</span>!
          </h3>
          <p className="approval-lead">
            Você concluiu o simulado da formação 360 com {percentage}% de acerto e a base está
            consolidada.
          </p>

          <div className="approval-note">
            <Route size={16} />
            <div>
              <strong>Inicie uma trilha para passar de nível</strong>
              <span>
                As trilhas foram liberadas. Para avançar de nível, escolha a trilha da área do seu
                interesse e inicie a jornada — é o progresso nela que leva você adiante.
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <h3>
            <span className="approval-name">{userName.split(' ')[0]}</span>, ainda não foi dessa vez
          </h3>
          <p className="approval-lead">
            Você fez {percentage}% no simulado do 360 e o mínimo para aprovação é {passingScore}%.
          </p>

          <div className="approval-note">
            <BookOpen size={16} />
            <div>
              <strong>É preciso ser aprovado no simulado para avançar de nível</strong>
              <span>
                Enquanto o simulado do 360 não for aprovado, as trilhas seguem bloqueadas. Revise os
                módulos e os flash cards da formação e tente novamente.
              </span>
            </div>
          </div>

          <div className="approval-note secondary">
            <RotateCcw size={16} />
            <div>
              <strong>Sem limite de tentativas</strong>
              <span>Você pode refazer o simulado quantas vezes precisar.</span>
            </div>
          </div>
        </>
      )}

      <footer className="approval-foot">
        <button type="button" className="btn-ghost" onClick={onClose}>
          {approved ? 'Continuar no 360' : 'Voltar ao conteúdo'}
        </button>
        {approved && (
          <button type="button" className="btn-primary" onClick={onGoToTrilhas}>
            <Route size={14} /> Ir para as trilhas
          </button>
        )}
      </footer>
    </div>
  </div>
);
