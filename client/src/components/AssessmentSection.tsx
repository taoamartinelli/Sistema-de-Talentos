import React, { useMemo, useState } from 'react';
import { formatarNumero, formatarPercentual } from '../utils/numero';
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Code2,
  FileSearch,
  Plus,
  RotateCcw,
  Trash2,
  X
} from 'lucide-react';
import {
  ASSESSMENTS,
  Assessment,
  AssessmentKey,
  PASSING_SCORE,
  Question,
  isApproved,
  levelFor
} from '../data/assessments';
import { BACK_PRIORITY, useBackHandler } from '../services/navigation';
import { ResultMap } from '../services/assessmentStorage';
import { AREA_LABEL, otherArea } from '../services/interest';
import {
  AssessmentResult,
  formatCompletedAt,
  loadResults,
  saveResult
} from '../services/assessmentStorage';

interface AssessmentSectionProps {
  /** Áreas de interesse. Lista vazia mostra os dois testes. */
  interests?: AssessmentKey[];
  /** Acrescenta a outra área ao interesse da pessoa. */
  onAddInterest?: (area: AssessmentKey) => void;
  /** Remove uma área do interesse, quando há mais de uma. */
  onRemoveInterest?: (area: AssessmentKey) => void;
  /** Avisa o Dashboard quando um teste é concluído, para reavaliar os bloqueios. */
  onResultsChange?: (results: ResultMap) => void;
  userId: string;
}

interface PreparedOption {
  text: string;
  correct: boolean;
}

interface PreparedQuestion extends Omit<Question, 'options' | 'answer'> {
  options: PreparedOption[];
}

const ICONS: Record<AssessmentKey, typeof Code2> = {
  desenvolvimento: Code2,
  analise: FileSearch
};

// Embaralha as alternativas para a resposta certa não cair sempre na mesma posição.
function prepare(assessment: Assessment): PreparedQuestion[] {
  return assessment.questions.map((question) => {
    const options = question.options
      .map((text, index) => ({ text, correct: index === question.answer }))
      .map((option) => ({ option, order: Math.random() }))
      .sort((a, b) => a.order - b.order)
      .map(({ option }) => option);

    return { id: question.id, statement: question.statement, options };
  });
}

export const AssessmentSection: React.FC<AssessmentSectionProps> = ({
  userId,
  interests = [],
  onAddInterest,
  onRemoveInterest,
  onResultsChange
}) => {
  // Só os testes das áreas de interesse ficam visíveis.
  const visibleAssessments = interests.length
    ? ASSESSMENTS.filter((item) => interests.includes(item.key))
    : ASSESSMENTS;

  // Com uma única área escolhida, oferecemos a outra.
  const missingArea =
    interests.length === 1 && onAddInterest ? otherArea(interests[0]) : null;

  // Com as duas, cada uma pode ser removida — nunca a última.
  const canRemove = interests.length > 1 && Boolean(onRemoveInterest);

  const [results, setResults] = useState(() => loadResults(userId));
  const [running, setRunning] = useState<Assessment | null>(null);
  const [questions, setQuestions] = useState<PreparedQuestion[]>([]);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState<AssessmentResult | null>(null);

  const current = questions[index];
  const answered = answers.filter((value) => value !== null).length;
  const progress = questions.length ? Math.round((answered / questions.length) * 100) : 0;

  useBackHandler(running !== null, () => backToList(), BACK_PRIORITY.assessment);

  const overall = useMemo(() => {
    const approved = visibleAssessments.filter((item) => results[item.key]?.approved).length;
    return { approved, total: visibleAssessments.length };
  }, [results, visibleAssessments]);

  const start = (assessment: Assessment) => {
    const prepared = prepare(assessment);
    setRunning(assessment);
    setQuestions(prepared);
    setAnswers(new Array(prepared.length).fill(null));
    setIndex(0);
    setFinished(null);
  };

  const choose = (optionIndex: number) => {
    setAnswers((previous) => {
      const next = [...previous];
      next[index] = optionIndex;
      return next;
    });
  };

  const finish = () => {
    if (!running) return;

    const correct = questions.reduce((total, question, position) => {
      const chosen = answers[position];
      return chosen !== null && question.options[chosen]?.correct ? total + 1 : total;
    }, 0);

    const percentage = Math.round((correct / questions.length) * 100);
    const result: AssessmentResult = {
      key: running.key,
      correct,
      total: questions.length,
      percentage,
      level: levelFor(percentage),
      approved: isApproved(percentage),
      completedAt: new Date().toISOString()
    };

    const updated = saveResult(userId, result);
    setResults(updated);
    setFinished(result);
    onResultsChange?.(updated);
  };

  const backToList = () => {
    setRunning(null);
    setQuestions([]);
    setAnswers([]);
    setIndex(0);
    setFinished(null);
  };

  /* ---------- Resultado ---------- */
  if (running && finished) {
    return (
      <div className="assess">
        <div className={`assess-result ${finished.approved ? 'approved' : 'rejected'}`}>
          <div className="assess-result-score">
            <strong>{formatarPercentual(finished.percentage)}</strong>
            <span>
              {finished.correct} de {finished.total} corretas
            </span>
          </div>

          <span className={`assess-status ${finished.approved ? 'approved' : 'rejected'}`}>
            {finished.approved ? 'Aprovado' : 'Não aprovado'}
          </span>

          <h2>{running.title} concluído</h2>

          {finished.approved ? (
            <p>
              Seu nível neste eixo é <span className="assess-level">{finished.level}</span>. O
              resultado define em qual fase da trilha você começa.
            </p>
          ) : (
            <p>
              O mínimo para aprovação é <strong>{formatarPercentual(PASSING_SCORE)}</strong> de acerto em cada teste.
              Refaça quando quiser — revise os pontos marcados em vermelho abaixo.
            </p>
          )}

          <div className="assess-review">
            {questions.map((question, position) => {
              const chosen = answers[position];
              const isCorrect = chosen !== null && question.options[chosen]?.correct;
              return (
                <div key={question.id} className={`assess-review-item ${isCorrect ? 'ok' : 'fail'}`}>
                  {isCorrect ? <Check size={14} /> : <X size={14} />}
                  <span>{question.statement}</span>
                </div>
              );
            })}
          </div>

          <div className="assess-result-actions">
            <button type="button" className="btn-primary" onClick={backToList}>
              Voltar aos testes
            </button>
            <button type="button" className="btn-ghost" onClick={() => start(running)}>
              <RotateCcw size={14} /> Refazer
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ---------- Teste em andamento ---------- */
  if (running && current) {
    const isLast = index === questions.length - 1;
    const allAnswered = answers.every((value) => value !== null);

    return (
      <div className="assess">
        <div className="assess-runner">
          <header className="assess-runner-head">
            <button type="button" className="btn-plain" onClick={backToList}>
              <ArrowLeft size={14} /> Sair do teste
            </button>
            <span className="assess-counter">
              Questão {formatarNumero(index + 1)} de {formatarNumero(questions.length)}
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
                onClick={() => choose(optionIndex)}
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
              <button type="button" className="btn-primary" onClick={finish} disabled={!allAnswered}>
                Concluir teste
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
      </div>
    );
  }

  /* ---------- Lista de testes ---------- */
  return (
    <div className="assess">
      <header className="assess-head">
        <span className="home-badge">Avaliação inicial</span>
        <h1>Vamos descobrir seu ponto de partida</h1>
        <p>
          {visibleAssessments.length === 1 ? (
            <>
              O teste da área que você escolheu tem{' '}
              {formatarNumero(visibleAssessments[0].questions.length)} questões de múltipla escolha, sem tempo
              cronometrado. Para ser aprovado é preciso acertar no mínimo{' '}
              <strong>{formatarPercentual(PASSING_SCORE)}</strong> — é o resultado dele que define o seu ponto de
              partida na trilha.
            </>
          ) : (
            <>
              São dois testes independentes: um de desenvolvimento e um de análise. Cada um tem 16
              questões de múltipla escolha, sem tempo cronometrado. É preciso acertar no mínimo{' '}
              <strong>{formatarPercentual(PASSING_SCORE)}</strong> para ser aprovado — a aprovação em um dos testes já
              libera as trilhas.
            </>
          )}
        </p>
        <span className="assess-progress-label">
          {overall.approved} de {overall.total} {overall.total === 1 ? 'teste aprovado' : 'testes aprovados'}
        </span>
      </header>

      <div className="assess-cards">
        {visibleAssessments.map((assessment) => {
          const Icon = ICONS[assessment.key];
          const result = results[assessment.key];

          return (
            <article key={assessment.key} className="assess-card">
              <div className="assess-card-head">
                <Icon size={20} />
                {result && (
                  <span className={`assess-tag ${result.approved ? '' : 'rejected'}`}>
                    {result.approved ? <CheckCircle2 size={13} /> : <AlertCircle size={13} />}
                    {result.approved ? 'Aprovado' : 'Não aprovado'}
                  </span>
                )}
              </div>

              <h3>{assessment.title}</h3>
              <span className="assess-card-subtitle">{assessment.subtitle}</span>
              <p>{assessment.description}</p>

              <ul className="assess-meta">
                <li>{formatarNumero(assessment.questions.length)} questões</li>
                <li>Mínimo de {formatarPercentual(PASSING_SCORE)}</li>
                <li>Sem tempo limite</li>
              </ul>

              {result && (
                <div className="assess-card-result">
                  <div>
                    <strong>{result.level}</strong>
                    <span>
                      {formatarNumero(result.correct)}/{formatarNumero(result.total)} acertos · {formatCompletedAt(result.completedAt)}
                    </span>
                  </div>
                  <span className="assess-card-score">{formatarPercentual(result.percentage)}</span>
                </div>
              )}

              <div className="assess-card-actions">
                <button
                  type="button"
                  className={result ? 'btn-ghost' : 'btn-primary'}
                  onClick={() => start(assessment)}
                >
                  {result ? (
                    <>
                      <RotateCcw size={14} /> Refazer teste
                    </>
                  ) : (
                    'Iniciar teste'
                  )}
                </button>

                {canRemove && (
                  <button
                    type="button"
                    className="assess-remove"
                    onClick={() => onRemoveInterest?.(assessment.key)}
                    title="Deixar de ter interesse nesta área"
                  >
                    <Trash2 size={13} /> Remover área
                  </button>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {missingArea && (
        <div className="assess-extra">
          <div className="assess-extra-text">
            <strong>Também tenho interesse em {AREA_LABEL[missingArea]}</strong>
            <span>
              Ao confirmar, o teste de {AREA_LABEL[missingArea].toLowerCase()} passa a aparecer aqui
              e as trilhas dessa área ficam disponíveis para você.
            </span>
          </div>
          <button
            type="button"
            className="btn-primary"
            onClick={() => onAddInterest?.(missingArea)}
          >
            <Plus size={14} /> Adicionar {AREA_LABEL[missingArea]}
          </button>
        </div>
      )}
    </div>
  );
};
