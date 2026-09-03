import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Boxes,
  Check,
  CheckCircle2,
  ChevronDown,
  FileCheck2,
  Lock,
  RotateCcw,
  Sparkles,
  Target,
  X
} from 'lucide-react';
import { Flashcard, Module, SimuladoQuestion } from '../data/trilha360';
import { MODULE_QUIZ_PASSING_SCORE, minimoDeAcertos } from '../data/moduleQuizzes';
import { BACK_PRIORITY, useBackHandler } from '../services/navigation';
import {
  ModuleResult,
  ModuleResults,
  isModuleUnlocked,
  loadModuleResults,
  saveModuleResult
} from '../services/moduleProgress';
import { saveSimuladoResult } from '../services/trackSimulado';

/**
 * Estrutura padrão de uma trilha: Módulos, Conteúdos, Flash cards e Simulado.
 * Usada tanto pela página 360 quanto por cada trilha de formação.
 */

export interface TrackOverview {
  title: string;
  intro: string;
  pillars?: string[];
  audience?: string[];
  prerequisite?: string;
  completion?: string[];
}

export interface TrackPageProps {
  userId: string;
  /** Identificador da trilha — separa o progresso de cada uma. */
  trackId: string;
  overview?: TrackOverview;
  modules: Module[];
  flashcards: Flashcard[];
  simulado: SimuladoQuestion[];
  /** Percentual mínimo de acerto para aprovação no simulado final. */
  passingScore: number;
  /** Simulado de conclusão de cada módulo, indexado pelo id do módulo. */
  moduleQuizzes?: Record<string, SimuladoQuestion[]>;
  moduleLabel?: string;
  onProgressChange?: () => void;
  /** Avisa o resultado do simulado final da trilha. */
  onSimuladoFinish?: (result: { percentage: number; approved: boolean }) => void;
  /** Quando true, conteúdos e flash cards só abrem depois de iniciar a jornada. */
  requiresJourney?: boolean;
  journeyStarted?: boolean;
  /** Administrador: nada fica bloqueado. */
  unlockAll?: boolean;
}

type TabKey = 'modulos' | 'conteudos' | 'flashcards' | 'simulado';

const TABS = [
  { key: 'modulos' as const, label: 'Módulos', icon: Boxes },
  { key: 'conteudos' as const, label: 'Conteúdos', icon: BookOpen },
  { key: 'flashcards' as const, label: 'Flash cards', icon: Sparkles },
  { key: 'simulado' as const, label: 'Simulado', icon: FileCheck2 }
];

const EmptyState: React.FC<{ icon: typeof Boxes; title: string }> = ({ icon: Icon, title }) => (
  <div className="subpage-empty">
    <Icon size={26} />
    <strong>{title}</strong>
    <span>Assim que o material for cadastrado, ele aparece aqui.</span>
  </div>
);

/* ------------------------------ Runner de prova ----------------------------- */

interface PreparedOption {
  text: string;
  correct: boolean;
}

interface PreparedQuestion {
  id: string;
  statement: string;
  options: PreparedOption[];
}

const prepare = (questions: SimuladoQuestion[]): PreparedQuestion[] =>
  questions.map((question) => ({
    id: question.id,
    statement: question.statement,
    options: question.options
      .map((text, index) => ({ text, correct: index === question.answer }))
      .map((option) => ({ option, order: Math.random() }))
      .sort((a, b) => a.order - b.order)
      .map(({ option }) => option)
  }));

const QuizRunner: React.FC<{
  questions: PreparedQuestion[];
  exitLabel: string;
  onExit: () => void;
  onFinish: (correct: number) => void;
}> = ({ questions, exitLabel, onExit, onFinish }) => {
  const [answers, setAnswers] = useState<(number | null)[]>(() => new Array(questions.length).fill(null));
  const [index, setIndex] = useState(0);

  const current = questions[index];
  const answered = answers.filter((value) => value !== null).length;
  const progress = Math.round((answered / questions.length) * 100);
  const isLast = index === questions.length - 1;

  const finish = () => {
    const correct = questions.reduce((total, question, position) => {
      const chosen = answers[position];
      return chosen !== null && question.options[chosen]?.correct ? total + 1 : total;
    }, 0);
    onFinish(correct);
  };

  return (
    <div className="assess-runner">
      <header className="assess-runner-head">
        <button type="button" className="btn-plain" onClick={onExit}>
          <ArrowLeft size={14} /> {exitLabel}
        </button>
        <span className="assess-counter">
          Questão {index + 1} de {questions.length}
        </span>
      </header>

      <div className="assess-progress">
        <div className="assess-progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <h2 className="assess-statement">{current.statement}</h2>

      <div className="assess-options">
        {current.options.map((option, optionIndex) => (
          <button
            key={option.text}
            type="button"
            className={`assess-option ${answers[index] === optionIndex ? 'selected' : ''}`}
            onClick={() =>
              setAnswers((previous) => {
                const next = [...previous];
                next[index] = optionIndex;
                return next;
              })
            }
          >
            <span className="assess-option-mark">{String.fromCharCode(65 + optionIndex)}</span>
            <span>{option.text}</span>
          </button>
        ))}
      </div>

      <footer className="assess-runner-foot">
        <button
          type="button"
          className="btn-plain"
          onClick={() => setIndex((value) => Math.max(0, value - 1))}
          disabled={index === 0}
        >
          <ArrowLeft size={14} /> Anterior
        </button>

        {isLast ? (
          <button
            type="button"
            className="btn-primary"
            onClick={finish}
            disabled={answers.some((value) => value === null)}
          >
            Concluir
          </button>
        ) : (
          <button
            type="button"
            className="btn-primary"
            onClick={() => setIndex((value) => Math.min(questions.length - 1, value + 1))}
            disabled={answers[index] === null}
          >
            Próxima <ArrowRight size={14} />
          </button>
        )}
      </footer>
    </div>
  );
};

/* ---------------------------------- Módulos --------------------------------- */

const ModulesTab: React.FC<{
  overview?: TrackOverview;
  modules: Module[];
  results: ModuleResults;
  moduleLabel: string;
  unlockAll: boolean;
  onOpen: (module: Module) => void;
}> = ({ overview, modules, results, moduleLabel, unlockAll, onOpen }) => (
  <>
    {overview && (
      <div className="t360-overview">
        <div>
          <h2>{overview.title}</h2>
          <p>{overview.intro}</p>
        </div>

        {(overview.pillars || overview.audience) && (
          <div className="t360-overview-lists">
            {overview.pillars && (
              <div>
                <h3>Foco da trilha</h3>
                <ul>
                  {overview.pillars.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {overview.audience && (
              <div>
                <h3>Para quem é</h3>
                <ul>
                  {overview.audience.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {overview.prerequisite && <p className="t360-note">{overview.prerequisite}</p>}
              </div>
            )}
          </div>
        )}
      </div>
    )}

    {modules.length === 0 ? (
      <EmptyState icon={Boxes} title="Nenhum módulo publicado ainda." />
    ) : (
      <div className="t360-modules">
        {modules.map((module) => {
          const unlocked = unlockAll || isModuleUnlocked(modules, results, module.id);
          const result = results[module.id];

          return (
            <article key={module.id} className={`t360-module ${unlocked ? '' : 'locked'}`}>
              <span className="t360-module-number">
                {moduleLabel} {String(module.number).padStart(2, '0')}
              </span>
              <h3>{module.title}</h3>
              <p>{module.objective}</p>

              {result?.approved ? (
                <span className="t360-module-result">
                  <CheckCircle2 size={13} /> Simulado {result.correct}/{result.total} · {result.percentage}%
                </span>
              ) : (
                <span className="t360-module-count">
                  {module.topics.length} {module.topics.length === 1 ? 'tópico' : 'tópicos'}
                </span>
              )}

              <button
                type="button"
                className="btn-ghost"
                onClick={() => onOpen(module)}
                disabled={!unlocked}
                title={unlocked ? undefined : 'Conclua o módulo anterior para liberar'}
              >
                {unlocked ? (
                  <>
                    Ver conteúdo <ArrowRight size={14} />
                  </>
                ) : (
                  <>
                    <Lock size={14} /> Bloqueado
                  </>
                )}
              </button>
            </article>
          );
        })}
      </div>
    )}

    {overview?.completion && (
      <div className="t360-completion">
        <h3>Critérios de conclusão da trilha</h3>
        <ul>
          {overview.completion.map((item) => (
            <li key={item}>
              <Check size={14} /> {item}
            </li>
          ))}
        </ul>
      </div>
    )}
  </>
);

/* --------------------------------- Conteúdos -------------------------------- */

const ContentsTab: React.FC<{
  modules: Module[];
  selected: Module | null;
  results: ModuleResults;
  moduleLabel: string;
  quizLength: number;
  unlockAll: boolean;
  onSelect: (module: Module) => void;
  onComplete: (module: Module) => void;
}> = ({ modules, selected, results, moduleLabel, quizLength, unlockAll, onSelect, onComplete }) => {
  if (!selected) return <EmptyState icon={BookOpen} title="Nenhum conteúdo publicado ainda." />;

  const result = results[selected.id];

  return (
    <div className="t360-contents">
      <aside className="t360-module-list">
        {modules.map((module) => {
          const unlocked = unlockAll || isModuleUnlocked(modules, results, module.id);
          const moduleResult = results[module.id];

          return (
            <button
              key={module.id}
              type="button"
              className={`t360-module-item ${module.id === selected.id ? 'active' : ''} ${
                unlocked ? '' : 'locked'
              }`}
              onClick={() => unlocked && onSelect(module)}
              disabled={!unlocked}
              title={unlocked ? undefined : 'Conclua o módulo anterior para liberar'}
            >
              <span className="t360-module-item-number">{String(module.number).padStart(2, '0')}</span>
              <span className="t360-module-item-body">
                <span className="t360-module-item-title">{module.title}</span>
                {moduleResult && (
                  <span className={`t360-module-item-score ${moduleResult.approved ? 'ok' : 'fail'}`}>
                    Simulado — {moduleResult.correct}/{moduleResult.total} · {moduleResult.percentage}%
                  </span>
                )}
              </span>
              {!unlocked && <Lock size={13} />}
            </button>
          );
        })}
      </aside>

      <article className="t360-content">
        <span className="t360-module-number">
          {moduleLabel} {String(selected.number).padStart(2, '0')}
        </span>
        <h2>{selected.title}</h2>
        <p className="t360-objective">
          <strong>Objetivo:</strong> {selected.objective}
        </p>

        {selected.topics.map((topic) => (
          <section key={topic.title} className="t360-topic">
            <h3>{topic.title}</h3>
            {topic.text && <p>{topic.text}</p>}
            {topic.items && (
              <ul>
                {topic.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {selected.practice && (
          <section className="t360-topic">
            <h3>Prática</h3>
            <ul>
              {selected.practice.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        <div className="t360-outcome">
          <Target size={16} />
          <div>
            <strong>Resultado esperado</strong>
            <p>{selected.outcome}</p>
          </div>
        </div>

        {quizLength > 0 && (
          <div className="t360-finish">
            <div>
              <strong>Terminou este módulo?</strong>
              <p>
                O simulado de conclusão tem {quizLength} questões sobre o conteúdo acima. É preciso
                acertar no mínimo <strong>{minimoDeAcertos(quizLength)}</strong> para liberar o
                próximo módulo.
              </p>
              {result && (
                <span className={`t360-module-item-score ${result.approved ? 'ok' : 'fail'}`}>
                  Última tentativa — {result.correct}/{result.total} · {result.percentage}%
                </span>
              )}
            </div>
            <button type="button" className="btn-primary" onClick={() => onComplete(selected)}>
              {result?.approved ? 'Refazer simulado' : 'Concluído'}
            </button>
          </div>
        )}
      </article>
    </div>
  );
};

/* ------------------------- Simulado de conclusão do módulo ------------------- */

const ModuleQuiz: React.FC<{
  module: Module;
  questions: SimuladoQuestion[];
  moduleLabel: string;
  isLastModule: boolean;
  onExit: () => void;
  onSave: (result: ModuleResult) => void;
}> = ({ module, questions: source, moduleLabel, isLastModule, onExit, onSave }) => {
  const [questions, setQuestions] = useState(() => prepare(source));
  const [result, setResult] = useState<ModuleResult | null>(null);
  const [attempt, setAttempt] = useState(0);

  const finish = (correct: number) => {
    const percentage = Math.round((correct / questions.length) * 100);
    const finished: ModuleResult = {
      moduleId: module.id,
      correct,
      total: questions.length,
      percentage,
      approved: percentage >= MODULE_QUIZ_PASSING_SCORE,
      completedAt: new Date().toISOString()
    };
    setResult(finished);
    onSave(finished);
  };

  const retry = () => {
    setQuestions(prepare(source));
    setResult(null);
    setAttempt((value) => value + 1);
  };

  if (result) {
    return (
      <div className={`assess-result ${result.approved ? 'approved' : 'rejected'}`}>
        <div className="assess-result-score">
          <strong>{result.percentage}%</strong>
          <span>
            {result.correct} de {result.total} corretas
          </span>
        </div>

        <span className={`assess-status ${result.approved ? 'approved' : 'rejected'}`}>
          {result.approved ? 'Módulo concluído' : 'Não aprovado'}
        </span>

        <h2>
          {moduleLabel} {String(module.number).padStart(2, '0')} — {module.title}
        </h2>
        <p>
          {result.approved
            ? isLastModule
              ? 'Você concluiu o último módulo desta trilha.'
              : 'O próximo módulo foi liberado.'
            : `É preciso acertar no mínimo ${minimoDeAcertos(result.total)} das ${result.total} questões para concluir o módulo. Revise o conteúdo e tente novamente.`}
        </p>

        <div className="assess-result-actions">
          <button type="button" className="btn-primary" onClick={onExit}>
            Voltar ao conteúdo
          </button>
          <button type="button" className="btn-ghost" onClick={retry}>
            <RotateCcw size={14} /> Refazer
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="t360-quiz-head">
        <span className="t360-module-number">
          {moduleLabel} {String(module.number).padStart(2, '0')} · Simulado de conclusão
        </span>
        <h2>{module.title}</h2>
      </div>

      <QuizRunner
        key={attempt}
        questions={questions}
        exitLabel="Voltar ao conteúdo"
        onExit={onExit}
        onFinish={finish}
      />
    </>
  );
};

/* -------------------------------- Flash cards ------------------------------- */

/** Seletor de módulo — substitui o <select> nativo, que não acompanha o tema escuro. */
const ModulePicker: React.FC<{
  value: string;
  modules: Module[];
  flashcards: Flashcard[];
  moduleLabel: string;
  onChange: (value: string) => void;
}> = ({ value, modules, flashcards, moduleLabel, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const countFor = (moduleId: string) => flashcards.filter((card) => card.moduleId === moduleId).length;

  const options = [
    { id: 'todos', number: null as number | null, title: 'Todos os módulos', count: flashcards.length },
    ...modules
      .filter((module) => countFor(module.id) > 0)
      .map((module) => ({
        id: module.id,
        number: module.number,
        title: module.title,
        count: countFor(module.id)
      }))
  ];

  const selected = options.find((option) => option.id === value) ?? options[0];

  return (
    <div className="t360-picker" ref={ref}>
      <button
        type="button"
        className={`t360-picker-trigger ${open ? 'open' : ''}`}
        onClick={() => setOpen((state) => !state)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="t360-picker-value">
          {selected.number !== null && (
            <em>
              {moduleLabel} {selected.number}
            </em>
          )}
          {selected.title}
        </span>
        <span className="t360-picker-count">{selected.count}</span>
        <ChevronDown size={15} className={open ? 'rotated' : ''} />
      </button>

      {open && (
        <div className="t360-picker-panel" role="listbox">
          {options.map((option) => (
            <button
              key={option.id}
              type="button"
              role="option"
              aria-selected={option.id === value}
              className={`t360-picker-option ${option.id === value ? 'active' : ''}`}
              onClick={() => {
                onChange(option.id);
                setOpen(false);
              }}
            >
              <span className="t360-picker-number">
                {option.number !== null ? String(option.number).padStart(2, '0') : '★'}
              </span>
              <span className="t360-picker-title">{option.title}</span>
              <span className="t360-picker-count">{option.count}</span>
              {option.id === value && <Check size={14} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const FlashcardsTab: React.FC<{
  modules: Module[];
  flashcards: Flashcard[];
  lockedCount: number;
  moduleLabel: string;
}> = ({ modules, flashcards, lockedCount, moduleLabel }) => {
  const [moduleFilter, setModuleFilter] = useState('todos');
  const [position, setPosition] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const deck = useMemo(
    () => (moduleFilter === 'todos' ? flashcards : flashcards.filter((c) => c.moduleId === moduleFilter)),
    [moduleFilter, flashcards]
  );

  const card = deck[Math.min(position, deck.length - 1)];

  const move = (delta: number) => {
    setFlipped(false);
    setPosition((value) => (value + delta + deck.length) % deck.length);
  };

  const changeFilter = (value: string) => {
    setModuleFilter(value);
    setPosition(0);
    setFlipped(false);
  };

  if (!card) return <EmptyState icon={Sparkles} title="Nenhum flash card publicado ainda." />;

  return (
    <div className="t360-flash">
      <div className="t360-flash-head">
        <ModulePicker
          value={moduleFilter}
          modules={modules}
          flashcards={flashcards}
          moduleLabel={moduleLabel}
          onChange={changeFilter}
        />

        <div className="t360-flash-progress">
          <span className="t360-flash-counter">
            {position + 1} <em>/ {deck.length}</em>
          </span>
          <div className="t360-flash-bar">
            <div style={{ width: `${((position + 1) / deck.length) * 100}%` }} />
          </div>
        </div>
      </div>

      <button
        type="button"
        className={`t360-card ${flipped ? 'flipped' : ''}`}
        onClick={() => setFlipped((value) => !value)}
      >
        <span className="t360-card-side">{flipped ? 'Resposta' : 'Pergunta'}</span>
        <strong>{flipped ? card.back : card.front}</strong>
        <span className="t360-card-hint">Clique para {flipped ? 'ver a pergunta' : 'revelar'}</span>
      </button>

      <div className="t360-flash-actions">
        <button type="button" className="btn-plain" onClick={() => move(-1)}>
          <ArrowLeft size={14} /> Anterior
        </button>
        <button type="button" className="btn-primary" onClick={() => move(1)}>
          Próximo <ArrowRight size={14} />
        </button>
      </div>

      {lockedCount > 0 && (
        <p className="t360-flash-locked">
          <Lock size={13} /> {lockedCount}{' '}
          {lockedCount === 1 ? 'flash card bloqueado' : 'flash cards bloqueados'} — eles são
          liberados conforme você conclui os módulos.
        </p>
      )}
    </div>
  );
};

/* ----------------------------- Simulado da trilha ---------------------------- */

const SimuladoTab: React.FC<{
  questions: SimuladoQuestion[];
  passingScore: number;
  onFinish: (result: { correct: number; total: number; percentage: number; approved: boolean }) => void;
}> = ({ questions: source, passingScore, onFinish }) => {
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState<PreparedQuestion[]>([]);
  const [score, setScore] = useState<{ correct: number; percentage: number } | null>(null);
  const [attempt, setAttempt] = useState(0);

  if (source.length === 0) return <EmptyState icon={FileCheck2} title="Nenhum simulado publicado ainda." />;

  const start = () => {
    setQuestions(prepare(source));
    setScore(null);
    setStarted(true);
    setAttempt((value) => value + 1);
  };

  if (score) {
    const approved = score.percentage >= passingScore;
    return (
      <div className={`assess-result ${approved ? 'approved' : 'rejected'}`}>
        <div className="assess-result-score">
          <strong>{score.percentage}%</strong>
          <span>
            {score.correct} de {questions.length} corretas
          </span>
        </div>

        <span className={`assess-status ${approved ? 'approved' : 'rejected'}`}>
          {approved ? 'Aprovado' : 'Não aprovado'}
        </span>

        <h2>Simulado concluído</h2>
        <p>
          {approved
            ? 'Você atingiu o mínimo exigido e pode seguir para a próxima etapa.'
            : `O mínimo para aprovação é ${passingScore}%. Revise os conteúdos e tente novamente.`}
        </p>

        <div className="assess-result-actions">
          <button type="button" className="btn-primary" onClick={start}>
            <RotateCcw size={14} /> Refazer simulado
          </button>
          <button type="button" className="btn-ghost" onClick={() => setStarted(false)}>
            Voltar
          </button>
        </div>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="t360-simulado-intro">
        <FileCheck2 size={28} />
        <h2>Simulado</h2>
        <p>
          {source.length} questões cobrindo todo o conteúdo da trilha. Mínimo de{' '}
          <strong>{passingScore}%</strong> para aprovação, sem tempo limite.
        </p>
        <button type="button" className="btn-primary" onClick={start}>
          Iniciar simulado
        </button>
      </div>
    );
  }

  return (
    <QuizRunner
      key={attempt}
      questions={questions}
      exitLabel="Sair do simulado"
      onExit={() => setStarted(false)}
      onFinish={(correct) => {
        const percentage = Math.round((correct / questions.length) * 100);
        setScore({ correct, percentage });
        onFinish({
          correct,
          total: questions.length,
          percentage,
          approved: percentage >= passingScore
        });
      }}
    />
  );
};

/* ----------------------------------- Página ---------------------------------- */

export const TrackPage: React.FC<TrackPageProps> = ({
  userId,
  trackId,
  overview,
  modules,
  flashcards,
  simulado,
  passingScore,
  moduleQuizzes = {},
  moduleLabel = 'Módulo',
  onProgressChange,
  onSimuladoFinish,
  requiresJourney = false,
  journeyStarted = false,
  unlockAll = false
}) => {
  const [tab, setTab] = useState<TabKey>('modulos');
  const [selectedModule, setSelectedModule] = useState<Module | null>(modules[0] ?? null);
  const [quizModule, setQuizModule] = useState<Module | null>(null);
  const [results, setResults] = useState<ModuleResults>(() => loadModuleResults(userId, trackId));

  useBackHandler(
    quizModule !== null,
    () => {
      const previous = quizModule;
      setQuizModule(null);
      return () => setQuizModule(previous);
    },
    BACK_PRIORITY.quiz
  );
  useBackHandler(
    tab !== 'modulos',
    () => {
      const previous = tab;
      setTab('modulos');
      return () => setTab(previous);
    },
    BACK_PRIORITY.subtab
  );

  // Os flash cards seguem os módulos liberados: nada de card de conteúdo bloqueado.
  const unlockedModuleIds = modules
    .filter((module) => unlockAll || isModuleUnlocked(modules, results, module.id))
    .map((module) => module.id);
  const availableFlashcards =
    modules.length === 0
      ? flashcards
      : flashcards.filter((card) => unlockedModuleIds.includes(card.moduleId));
  const unlockedModules = modules.filter((module) => unlockedModuleIds.includes(module.id));

  // O simulado da trilha só abre depois que todos os módulos forem concluídos.
  const pendingModules = unlockAll
    ? []
    : modules.filter((module) => !results[module.id]?.approved);
  const simuladoLocked = modules.length > 0 && pendingModules.length > 0;

  // Fora da 360, o conteúdo só abre depois que a pessoa inicia a jornada.
  const journeyLocked = requiresJourney && !journeyStarted && !unlockAll;

  // O simulado final fica registrado: outras partes do sistema dependem dele.
  const handleSimuladoFinish = (score: {
    correct: number;
    total: number;
    percentage: number;
    approved: boolean;
  }) => {
    saveSimuladoResult(userId, { trackId, ...score, completedAt: new Date().toISOString() });
    onProgressChange?.();
    onSimuladoFinish?.({ percentage: score.percentage, approved: score.approved });
  };
  const isTabLocked = (key: TabKey) => {
    if (key === 'modulos') return false;
    if (journeyLocked) return true;
    return key === 'simulado' && simuladoLocked;
  };

  const openModule = (module: Module) => {
    setSelectedModule(module);
    setQuizModule(null);
    setTab('conteudos');
  };

  const saveResult = (result: ModuleResult) => {
    setResults(saveModuleResult(userId, trackId, result));
    onProgressChange?.();
  };

  return (
    <>
      <nav className="subtabs">
        {TABS.map(({ key, label, icon: Icon }) => {
          const locked = isTabLocked(key);

          return (
            <button
              key={key}
              type="button"
              className={`subtab ${tab === key ? 'active' : ''} ${locked ? 'locked' : ''}`}
              onClick={() => {
                if (locked) return;
                setTab(key);
                setQuizModule(null);
              }}
              disabled={locked}
              title={
                locked
                  ? journeyLocked
                    ? 'Inicie a jornada para liberar'
                    : 'Conclua todos os módulos para liberar o simulado'
                  : undefined
              }
            >
              {locked ? <Lock size={16} /> : <Icon size={16} />}
              {label}
            </button>
          );
        })}
      </nav>

      <section className="subpage">
        {journeyLocked && tab !== 'modulos' && (
          <div className="subpage-empty">
            <Lock size={26} />
            <strong>Conteúdo bloqueado</strong>
            <span>
              Clique em <strong>Iniciar jornada</strong>, no topo da página, para liberar os
              conteúdos, os flash cards e o simulado desta trilha.
            </span>
          </div>
        )}

        {tab === 'modulos' && (
          <ModulesTab
            overview={overview}
            modules={modules}
            results={results}
            moduleLabel={moduleLabel}
            unlockAll={unlockAll}
            onOpen={openModule}
          />
        )}

        {tab === 'conteudos' &&
          !journeyLocked &&
          (quizModule ? (
            <ModuleQuiz
              module={quizModule}
              questions={moduleQuizzes[quizModule.id] ?? []}
              moduleLabel={moduleLabel}
              isLastModule={modules[modules.length - 1]?.id === quizModule.id}
              onExit={() => setQuizModule(null)}
              onSave={saveResult}
            />
          ) : (
            <ContentsTab
              modules={modules}
              selected={selectedModule}
              results={results}
              moduleLabel={moduleLabel}
              quizLength={selectedModule ? moduleQuizzes[selectedModule.id]?.length ?? 0 : 0}
              unlockAll={unlockAll}
              onSelect={setSelectedModule}
              onComplete={setQuizModule}
            />
          ))}

        {tab === 'flashcards' && !journeyLocked && (
          <FlashcardsTab
            modules={unlockedModules}
            flashcards={availableFlashcards}
            lockedCount={flashcards.length - availableFlashcards.length}
            moduleLabel={moduleLabel}
          />
        )}

        {tab === 'simulado' &&
          !journeyLocked &&
          (simuladoLocked ? (
            <div className="subpage-empty">
              <Lock size={26} />
              <strong>Simulado bloqueado</strong>
              <span>
                Conclua todos os módulos para liberar. Faltam {pendingModules.length} de{' '}
                {modules.length}: {pendingModules.map((module) => module.title).join(', ')}.
              </span>
            </div>
          ) : (
            <SimuladoTab
              questions={simulado}
              passingScore={passingScore}
              onFinish={handleSimuladoFinish}
            />
          ))}
      </section>
    </>
  );
};
