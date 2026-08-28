import React, { useRef, useState } from 'react';
import { AlertCircle, Camera, CheckCircle2, Info, Loader2, X } from 'lucide-react';
import { User } from '../types';
import { DEFAULT_AVATAR } from '../utils/avatar';
import {
  updateUserEmail,
  updateUserName,
  updateUserPassword,
  updateUserPhoto
} from '../services/profile';

interface ProfileModalProps {
  user: User;
  onClose: () => void;
  onUserUpdated: (user: User) => void;
}

type Feedback = { type: 'success' | 'error'; text: string } | null;

export const ProfileModal: React.FC<ProfileModalProps> = ({ user, onClose, onUserUpdated }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [feedback, setFeedback] = useState<Feedback>(null);

  const nameChanged = name.trim() !== '' && name !== user.name;
  const emailChanged = email.trim() !== '' && email !== user.email;
  const passwordChanged = newPassword.length > 0;
  const hasChanges = nameChanged || emailChanged || passwordChanged;
  const needsPassword = emailChanged || passwordChanged;

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;

    setUploading(true);
    setFeedback(null);
    const result = await updateUserPhoto(file);
    setUploading(false);

    if (result.user) onUserUpdated(result.user);
    setFeedback({
      type: result.success ? 'success' : 'error',
      text: result.message ?? 'Não foi possível enviar a foto.'
    });
  };

  const handleSave = async () => {
    if (!hasChanges) return;

    if (needsPassword && !currentPassword) {
      setFeedback({ type: 'error', text: 'Informe a senha atual para alterar o e-mail ou a senha.' });
      return;
    }

    setSaving(true);
    setFeedback(null);

    const done: string[] = [];
    let failure: string | null = null;

    if (nameChanged) {
      const result = await updateUserName(name);
      if (result.user) onUserUpdated(result.user);
      if (result.success) done.push('nome');
      else failure = result.message ?? 'Não foi possível salvar o nome.';
    }

    if (!failure && passwordChanged) {
      const result = await updateUserPassword(currentPassword, newPassword);
      if (result.success) done.push('senha');
      else failure = result.message ?? 'Não foi possível alterar a senha.';
    }

    if (!failure && emailChanged) {
      const result = await updateUserEmail(currentPassword, email);
      if (result.success) done.push('e-mail (aguardando confirmação por link)');
      else failure = result.message ?? 'Não foi possível alterar o e-mail.';
    }

    setSaving(false);
    setCurrentPassword('');
    setNewPassword('');

    if (failure) {
      setFeedback({ type: 'error', text: failure });
      return;
    }
    setFeedback({ type: 'success', text: `Alterações salvas: ${done.join(', ')}.` });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="profile-modal" onClick={(e) => e.stopPropagation()}>
        {/* Cabeçalho: identidade + ações */}
        <header className="profile-header">
          <div className="profile-identity">
            <div className="profile-photo-wrapper">
              <img src={user.avatarUrl || DEFAULT_AVATAR} alt={user.name} className="profile-photo" />
              <button
                type="button"
                className="profile-photo-btn"
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading || saving}
                title="Alterar foto"
                aria-label="Alterar foto"
              >
                {uploading ? <Loader2 size={13} className="animate-spin" /> : <Camera size={13} />}
              </button>
              <input ref={fileInputRef} type="file" accept="image/*" hidden onChange={handlePhotoChange} />
            </div>

            <div className="profile-identity-info">
              <strong>{user.name}</strong>
              <span>{user.email}</span>
              <span className="profile-badge">Usuário</span>
            </div>
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

          {/* Dados pessoais */}
          <section className="profile-card">
            <div className="profile-card-header">Dados pessoais</div>
            <div className="profile-card-body">
              <div className="profile-grid">
                <div className="profile-field">
                  <label htmlFor="profile-name">Nome de usuário</label>
                  <input
                    id="profile-name"
                    type="text"
                    className="profile-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="profile-field">
                  <label htmlFor="profile-email">E-mail</label>
                  <input
                    id="profile-email"
                    type="email"
                    className="profile-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="profile-note info">
                <Info size={15} />
                <span>
                  A troca de e-mail só vale depois que você confirmar pelo link enviado ao novo endereço.
                </span>
              </div>
            </div>
          </section>

          {/* Segurança */}
          <section className="profile-card">
            <div className="profile-card-header">Segurança</div>
            <div className="profile-card-body">
              <div className="profile-grid">
                <div className="profile-field">
                  <label htmlFor="profile-current-password">Senha atual</label>
                  <input
                    id="profile-current-password"
                    type="password"
                    className="profile-input"
                    placeholder="••••••••"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                </div>

                <div className="profile-field">
                  <label htmlFor="profile-new-password">Nova senha</label>
                  <input
                    id="profile-new-password"
                    type="password"
                    className="profile-input"
                    placeholder="Mínimo de 6 caracteres"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    autoComplete="new-password"
                  />
                </div>
              </div>

              <div className="profile-note warning">
                <AlertCircle size={15} />
                <span>Por segurança, a senha atual é exigida para alterar o e-mail ou a senha.</span>
              </div>
            </div>
          </section>

          {/* Foto */}
          <section className="profile-card">
            <div className="profile-card-header">Foto de perfil</div>
            <div className="profile-card-body profile-photo-row">
              <span className="profile-hint">PNG ou JPG, até 5 MB.</span>
              <button
                type="button"
                className="btn-ghost"
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading || saving}
              >
                {uploading ? (
                  <>
                    <Loader2 size={14} className="animate-spin" /> Enviando
                  </>
                ) : (
                  <>
                    <Camera size={14} /> Alterar foto
                  </>
                )}
              </button>
            </div>
          </section>
        </div>

        <footer className="profile-footer">
          <button type="button" className="btn-plain" onClick={onClose} disabled={saving}>
            Cancelar
          </button>
          <button
            type="button"
            className="btn-primary"
            onClick={handleSave}
            disabled={saving || uploading || !hasChanges}
          >
            {saving ? (
              <>
                <Loader2 size={15} className="animate-spin" /> Salvando
              </>
            ) : (
              'Salvar alterações'
            )}
          </button>
        </footer>
      </div>
    </div>
  );
};
