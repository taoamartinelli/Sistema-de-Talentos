import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Loader2, LogOut, RefreshCw, X } from 'lucide-react';
import { User } from '../types';
import { resetPassword } from '../services/auth';
import { getAccountInfo, reloadAccount, sendVerificationEmail } from '../services/settings';

interface SettingsModalProps {
  user: User;
  onClose: () => void;
  onLogout: () => void;
}

type Feedback = { type: 'success' | 'error'; text: string } | null;

export const SettingsModal: React.FC<SettingsModalProps> = ({ user, onClose, onLogout }) => {
  const [account, setAccount] = useState(getAccountInfo());
  const [busy, setBusy] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<Feedback>(null);

  const run = async (key: string, action: () => Promise<{ success: boolean; message?: string }>) => {
    setBusy(key);
    setFeedback(null);
    const result = await action();
    setBusy(null);
    setAccount(getAccountInfo());
    setFeedback({
      type: result.success ? 'success' : 'error',
      text: result.message ?? (result.success ? 'Tudo certo.' : 'Não foi possível concluir.')
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="profile-modal settings-modal" onClick={(e) => e.stopPropagation()}>
        <header className="profile-header">
          <div>
            <h3 className="settings-title">Configurações</h3>
            <p className="settings-subtitle">Conta, segurança e sessão</p>
          </div>
          <button type="button" className="profile-close" onClick={onClose} aria-label="Fechar">
            <X size={18} />
          </button>
        </header>

        <div className="profile-body">
          {feedback && (
            <div className={`profile-feedback ${feedback.type}`}>
              {feedback.type === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
              <span>{feedback.text}</span>
            </div>
          )}

          {/* Conta */}
          <section className="profile-card">
            <div className="profile-card-header">Conta</div>
            <div className="profile-card-body">
              <dl className="settings-list">
                <div className="settings-row">
                  <dt>E-mail</dt>
                  <dd>{account?.email || user.email}</dd>
                </div>

                <div className="settings-row">
                  <dt>Situação do e-mail</dt>
                  <dd>
                    {account?.emailVerified ? (
                      <span className="settings-tag verified">Verificado</span>
                    ) : (
                      <span className="settings-tag pending">Não verificado</span>
                    )}
                  </dd>
                </div>

                <div className="settings-row">
                  <dt>Forma de acesso</dt>
                  <dd>{account?.provider ?? '—'}</dd>
                </div>

                <div className="settings-row">
                  <dt>Conta criada em</dt>
                  <dd>{account?.createdAt ?? '—'}</dd>
                </div>

                <div className="settings-row">
                  <dt>Último acesso</dt>
                  <dd>{account?.lastLoginAt ?? '—'}</dd>
                </div>
              </dl>

              {!account?.emailVerified && (
                <div className="settings-actions">
                  <button
                    type="button"
                    className="btn-ghost"
                    onClick={() => run('verify', sendVerificationEmail)}
                    disabled={busy !== null}
                  >
                    {busy === 'verify' ? (
                      <>
                        <Loader2 size={14} className="animate-spin" /> Enviando
                      </>
                    ) : (
                      'Enviar verificação'
                    )}
                  </button>

                  <button
                    type="button"
                    className="btn-plain"
                    onClick={() => run('reload', reloadAccount)}
                    disabled={busy !== null}
                  >
                    <RefreshCw size={14} /> Já verifiquei
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Segurança */}
          <section className="profile-card">
            <div className="profile-card-header">Segurança</div>
            <div className="profile-card-body">
              <div className="settings-block">
                <div>
                  <strong>Redefinir senha por e-mail</strong>
                  <p className="profile-hint">
                    Enviamos um link para {account?.email || user.email} criar uma nova senha.
                  </p>
                </div>
                <button
                  type="button"
                  className="btn-ghost"
                  onClick={() => run('reset', () => resetPassword(account?.email || user.email))}
                  disabled={busy !== null}
                >
                  {busy === 'reset' ? (
                    <>
                      <Loader2 size={14} className="animate-spin" /> Enviando
                    </>
                  ) : (
                    'Enviar link'
                  )}
                </button>
              </div>
            </div>
          </section>

          {/* Sessão */}
          <section className="profile-card">
            <div className="profile-card-header">Sessão</div>
            <div className="profile-card-body">
              <div className="settings-block">
                <div>
                  <strong>Sair do sistema</strong>
                  <p className="profile-hint">Encerra a sessão neste navegador.</p>
                </div>
                <button
                  type="button"
                  className="btn-ghost danger"
                  onClick={() => {
                    onClose();
                    onLogout();
                  }}
                >
                  <LogOut size={14} /> Sair
                </button>
              </div>
            </div>
          </section>
        </div>

        <footer className="profile-footer">
          <button type="button" className="btn-plain" onClick={onClose}>
            Fechar
          </button>
        </footer>
      </div>
    </div>
  );
};
