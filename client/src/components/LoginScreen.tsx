import React, { useState } from 'react';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { loginWithEmail, registerWithEmail, resetPassword } from '../services/auth';
import { User } from '../types';
import { ZelloLogo } from './ZelloLogo';

interface LoginScreenProps {
  onLoginSuccess: (user: User, token: string) => void;
}

type Mode = 'login' | 'signup';

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess }) => {
  const [mode, setMode] = useState<Mode>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [infoMessage, setInfoMessage] = useState<string | null>(null);

  const isSignup = mode === 'signup';

  const switchMode = (next: Mode) => {
    setMode(next);
    setErrorMessage(null);
    setInfoMessage(null);
    setPassword('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setInfoMessage(null);

    if (!email.trim() || !password.trim()) {
      setErrorMessage('Por favor, preencha o e-mail e a senha.');
      return;
    }

    if (isSignup && !name.trim()) {
      setErrorMessage('Informe seu nome completo.');
      return;
    }

    if (isSignup && password.length < 6) {
      setErrorMessage('A senha precisa ter pelo menos 6 caracteres.');
      return;
    }

    setLoading(true);
    const result = isSignup
      ? await registerWithEmail(name, email, password)
      : await loginWithEmail(email, password);
    setLoading(false);

    if (result.success && result.user && result.token) {
      onLoginSuccess(result.user, result.token);
    } else {
      setErrorMessage(
        result.message ||
          (isSignup ? 'Não foi possível criar a conta.' : 'Falha ao autenticar. Verifique suas credenciais.')
      );
    }
  };

  const handleForgotPassword = async () => {
    setErrorMessage(null);
    setInfoMessage(null);

    if (!email.trim()) {
      setErrorMessage('Informe seu e-mail para receber o link de redefinição.');
      return;
    }

    setLoading(true);
    const result = await resetPassword(email);
    setLoading(false);

    if (result.success) {
      setInfoMessage(result.message ?? null);
    } else {
      setErrorMessage(result.message ?? null);
    }
  };

  return (
    <div className="login-screen">
      {/* Brand Header */}
      <header className="brand-header">
        <ZelloLogo size={42} />
        <div className="brand-info">
          <span className="brand-title">Formação de Talentos</span>
          <span className="brand-tagline">Zello</span>
        </div>
      </header>

      {/* Main Content Split */}
      <main className="login-main">
        {/* Left Side Hero */}
        <section className="hero-section">
          <h1 className="hero-title">
            O inicio que faz a diferença
          </h1>
          <p className="hero-subtitle">
            Sistema completo com conteúdos, flash cards e simulados.<br />
            Tudo pra vc se capacitar e certificar!
          </p>
          <div className="hero-accent-line"></div>
        </section>

        {/* Right Side Login Form Card */}
        <section className="login-card-container">
          <div className="login-card">
            <h2 className="card-title">{isSignup ? 'Criar conta' : 'Entrar'}</h2>
            <p className="card-subtitle">
              {isSignup ? 'Cadastre-se para acessar o painel' : 'Acesse o painel com suas credenciais'}
            </p>

            {errorMessage && (
              <div className="error-message">
                {errorMessage}
              </div>
            )}

            {infoMessage && (
              <div className="info-message">
                {infoMessage}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {isSignup && (
                <div className="form-group">
                  <label className="form-label" htmlFor="name-input">Nome completo</label>
                  <div className="input-wrapper">
                    <input
                      id="name-input"
                      type="text"
                      className="form-input"
                      placeholder="Seu nome"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>
              )}

              <div className="form-group">
                <label className="form-label" htmlFor="email-input">E-mail</label>
                <div className="input-wrapper">
                  <input
                    id="email-input"
                    type="email"
                    className="form-input"
                    placeholder="usuario@zello.tec.br"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="password-input">Senha</label>
                <div className="input-wrapper">
                  <input
                    id="password-input"
                    type={showPassword ? 'text' : 'password'}
                    className="form-input"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle-btn"
                    onClick={() => setShowPassword(!showPassword)}
                    title={showPassword ? 'Ocultar senha' : 'Exibir senha'}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="btn-submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> {isSignup ? 'Criando conta...' : 'Entrando...'}
                  </>
                ) : (
                  <>
                    {isSignup ? 'Criar conta' : 'Entrar'}
                  </>
                )}
              </button>

              {isSignup ? (
                <button
                  type="button"
                  className="btn-link"
                  onClick={() => switchMode('login')}
                  disabled={loading}
                >
                  Já tenho uma conta
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    className="btn-link"
                    onClick={handleForgotPassword}
                    disabled={loading}
                  >
                    Esqueci minha senha
                  </button>

                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => switchMode('signup')}
                    disabled={loading}
                  >
                    Criar conta
                  </button>
                </>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* Footer Support Info */}
      <footer className="login-footer">
        <span className="support-label">Suporte</span>
        <div className="support-info">
          Dev: taoa.araujo@zello.tec.br
        </div>
        <div className="copyright-text">
          © 2026 By Martinelli
        </div>
      </footer>
    </div>
  );
};
