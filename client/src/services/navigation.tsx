import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';

/**
 * Navegação interna do sistema.
 *
 * O app é uma página só, então usamos o histórico do navegador como espinha dorsal:
 * cada camada aberta (seção, trilha, sub-aba, modal, simulado) empurra uma entrada.
 * Assim o "voltar" e o "avançar" — do navegador ou dos botões laterais do mouse —
 * andam pela navegação interna em vez de sair da aplicação.
 *
 * Cada handler desfaz a sua camada e devolve uma função que a refaz; é ela que o
 * "avançar" executa.
 */

/** Prioridades — quanto maior, mais interna é a tela. */
export const BACK_PRIORITY = {
  modal: 100,
  quiz: 80,
  assessment: 70,
  detail: 60,
  subtab: 40,
  section: 20
} as const;

/** O handler desfaz a camada e pode devolver a função que a refaz. */
export type BackHandler = () => (() => void) | void;

interface Handler {
  id: number;
  priority: number;
  onBack: BackHandler;
}

interface NavigationValue {
  register: (handler: Handler) => void;
  unregister: (id: number) => void;
  goBack: () => void;
  goForward: () => void;
  canGoBack: boolean;
  canGoForward: boolean;
}

const NavigationContext = createContext<NavigationValue | null>(null);

let nextId = 1;

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const handlersRef = useRef<Handler[]>([]);
  const redoRef = useRef<Array<() => void>>([]);
  const depthRef = useRef(0);
  /** true enquanto processamos um voltar/avançar — evita empurrar entradas novas. */
  const navigatingRef = useRef(false);
  /** Quantos popstate são consequência de history.back() disparado por nós. */
  const skipPopRef = useRef(0);

  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);

  const sync = useCallback(() => {
    setCanGoBack(handlersRef.current.length > 0);
    setCanGoForward(redoRef.current.length > 0);
  }, []);

  const register = useCallback(
    (handler: Handler) => {
      handlersRef.current = [...handlersRef.current, handler];

      if (!navigatingRef.current) {
        // Navegação nova: cria a entrada no histórico e invalida o "avançar".
        depthRef.current += 1;
        window.history.pushState({ zelloDepth: depthRef.current }, '');
        redoRef.current = [];
      }
      sync();
    },
    [sync]
  );

  const unregister = useCallback(
    (id: number) => {
      handlersRef.current = handlersRef.current.filter((handler) => handler.id !== id);

      if (!navigatingRef.current && depthRef.current > 0) {
        // A tela foi fechada pela própria interface: consome a entrada correspondente.
        skipPopRef.current += 1;
        depthRef.current -= 1;
        window.history.back();
      }
      sync();
    },
    [sync]
  );

  /** Desfaz a camada mais interna e guarda como refazer. */
  const runBack = useCallback(() => {
    const handlers = handlersRef.current;
    if (handlers.length === 0) return;

    const target = handlers.reduce((deepest, handler) =>
      handler.priority >= deepest.priority ? handler : deepest
    );
    const redo = target.onBack();
    if (redo) redoRef.current = [...redoRef.current, redo];
    sync();
  }, [sync]);

  /** Refaz a última camada desfeita. */
  const runForward = useCallback(() => {
    const redo = redoRef.current[redoRef.current.length - 1];
    if (!redo) return;

    redoRef.current = redoRef.current.slice(0, -1);
    redo();
    sync();
  }, [sync]);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (skipPopRef.current > 0) {
        // Foi o nosso próprio history.back(): a tela já se fechou sozinha.
        skipPopRef.current -= 1;
        return;
      }

      const newDepth = (event.state as { zelloDepth?: number } | null)?.zelloDepth ?? 0;
      const currentDepth = depthRef.current;

      navigatingRef.current = true;
      if (newDepth < currentDepth) runBack();
      else if (newDepth > currentDepth) runForward();
      depthRef.current = newDepth;

      // Libera depois que o React aplicar as mudanças de tela.
      window.setTimeout(() => {
        navigatingRef.current = false;
      }, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [runBack, runForward]);

  const goBack = useCallback(() => {
    if (handlersRef.current.length > 0) window.history.back();
  }, []);

  const goForward = useCallback(() => {
    if (redoRef.current.length > 0) window.history.forward();
  }, []);

  return (
    <NavigationContext.Provider
      value={{ register, unregister, goBack, goForward, canGoBack, canGoForward }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export function useNavigation(): NavigationValue {
  const value = useContext(NavigationContext);
  if (!value) {
    // Fora do provider (ex.: tela de login) a navegação simplesmente não faz nada.
    return {
      register: () => {},
      unregister: () => {},
      goBack: () => {},
      goForward: () => {},
      canGoBack: false,
      canGoForward: false
    };
  }
  return value;
}

/**
 * Registra o que fazer ao voltar enquanto a tela estiver aberta.
 * O callback pode devolver a função que refaz a navegação (usada pelo avançar).
 */
export function useBackHandler(active: boolean, onBack: BackHandler, priority: number): void {
  const { register, unregister } = useNavigation();
  const callbackRef = useRef(onBack);
  callbackRef.current = onBack;

  useEffect(() => {
    if (!active) return;

    const id = nextId++;
    register({ id, priority, onBack: () => callbackRef.current() });
    return () => unregister(id);
  }, [active, priority, register, unregister]);
}
