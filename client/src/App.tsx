import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { LoginScreen } from './components/LoginScreen';
import { Dashboard } from './components/Dashboard';
import { logout, observeSession } from './services/auth';
import { goOffline } from './services/progressSync';
import { NavigationProvider } from './services/navigation';
import { User } from './types';

export const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [checkingSession, setCheckingSession] = useState(true);

  // Restaura a sessão do Firebase ao abrir a aplicação e observa login/logout.
  useEffect(() => {
    const unsubscribe = observeSession((session) => {
      setCurrentUser(session?.user ?? null);
      setToken(session?.token ?? null);
      setCheckingSession(false);
    });
    return unsubscribe;
  }, []);

  const handleLoginSuccess = (user: User, userToken: string) => {
    setCurrentUser(user);
    setToken(userToken);
  };

  const handleLogout = async () => {
    // Encerra a presença antes de sair, senão a pessoa continuaria
    // aparecendo como online até o último sinal envelhecer.
    if (currentUser) await goOffline(currentUser.id);

    await logout();
    setCurrentUser(null);
    setToken(null);
  };

  if (checkingSession) {
    return (
      <div className="app-container session-loading">
        <Loader2 size={28} className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="app-container">
      {!currentUser ? (
        <LoginScreen onLoginSuccess={handleLoginSuccess} />
      ) : (
        <NavigationProvider>
          <Dashboard user={currentUser} onLogout={handleLogout} onUserUpdated={setCurrentUser} />
        </NavigationProvider>
      )}
    </div>
  );
};

export default App;
