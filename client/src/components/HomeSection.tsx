import React from 'react';
import {
  Award,
  CheckCircle2,
  BookOpen,
  ClipboardCheck,
  Code2,
  FileSearch,
  Layers,
  Sparkles,
  Target,
  Users
} from 'lucide-react';

interface HomeSectionProps {
  userName: string;
  acknowledged: boolean;
  onAcknowledge: () => void;
  onGoToAssessment: () => void;
}

const STEPS = [
  {
    icon: ClipboardCheck,
    title: 'Avaliação inicial',
    text: 'Um teste técnico mapeia seu nível atual em desenvolvimento e em análise. É ele que define seu ponto de partida na trilha.'
  },
  {
    icon: Layers,
    title: 'Trilhas por fases',
    text: 'Os conteúdos são organizados em fases. Cada fase concluída libera a seguinte, garantindo que a base esteja firme antes de avançar.'
  },
  {
    icon: Award,
    title: 'Certificação',
    text: 'Ao concluir as fases de uma trilha, você valida o conhecimento em simulado e recebe a certificação correspondente.'
  },
  {
    icon: Users,
    title: 'Alocação em equipe',
    text: 'Com a formação concluída e o nível comprovado, você entra no quadro de talentos disponível para alocação em uma equipe.'
  }
];

const RESOURCES = [
  {
    icon: BookOpen,
    title: 'Conteúdos',
    text: 'Material estruturado por fase, do fundamento à aplicação prática.'
  },
  {
    icon: Sparkles,
    title: 'Flash cards',
    text: 'Revisão rápida dos conceitos-chave para fixar o que foi estudado.'
  },
  {
    icon: Target,
    title: 'Simulados',
    text: 'Provas no formato da certificação para medir o preparo antes da prova real.'
  }
];

const TRACKS = [
  {
    icon: Code2,
    title: 'Desenvolvimento',
    text: 'Lógica, linguagem, versionamento, boas práticas de código e construção de soluções.'
  },
  {
    icon: FileSearch,
    title: 'Análise',
    text: 'Levantamento de requisitos, modelagem, documentação e leitura de processos de negócio.'
  }
];

export const HomeSection: React.FC<HomeSectionProps> = ({
  userName,
  acknowledged,
  onAcknowledge,
  onGoToAssessment
}) => {
  const firstName = userName.split(' ')[0];

  return (
    <div className="home">
      {/* Abertura */}
      <section className="home-hero">
        <span className="home-badge">Programa de formação</span>
        <h1>
          Bem-vindo, <span className="home-hero-name">{firstName}</span>. Sua formação<br />começa
          por saber onde você está.
        </h1>
        <p>
          A Formação de Talentos é o caminho estruturado da Zello para transformar conhecimento em
          certificação e certificação em oportunidade. Você estuda por trilhas divididas em fases,
          comprova o aprendizado a cada etapa e, ao concluir, passa a integrar o quadro de talentos
          disponível para alocação em uma equipe.
        </p>
      </section>

      {/* Como funciona */}
      <section className="home-section">
        <div className="home-section-head">
          <h2>Como funciona</h2>
          <p>Quatro etapas, do diagnóstico à alocação.</p>
        </div>

        <div className="home-steps">
          {STEPS.map(({ icon: Icon, title, text }, index) => (
            <article key={title} className="home-step">
              <span className="home-step-number">{String(index).padStart(2, '0')}</span>
              <Icon size={20} className="home-step-icon" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Eixos de formação */}
      <section className="home-section">
        <div className="home-section-head">
          <h2>Eixos de formação</h2>
          <p>A trilha acompanha dois caminhos técnicos, medidos de forma independente.</p>
        </div>

        <div className="home-tracks-grid">
          {TRACKS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="home-track">
              <Icon size={18} />
              <div>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fases */}
      <section className="home-section">
        <div className="home-section-head">
          <h2>Avanço por fases</h2>
          <p>Cada fase só abre quando a anterior é concluída.</p>
        </div>

        <div className="home-phases">
          <div className="home-phase">
            <span className="home-phase-label">Primeira fase</span>
            <strong>Fundamentos</strong>
            <p>Liberada após a avaliação inicial, no nível indicado pelo seu resultado.</p>
          </div>

          <div className="home-phase">
            <span className="home-phase-label">Segunda fase</span>
            <strong>Aprofundamento</strong>
            <p>Abre ao concluir os conteúdos e o simulado da fase anterior.</p>
          </div>

          <div className="home-phase">
            <span className="home-phase-label">Terceira fase</span>
            <strong>Prática aplicada</strong>
            <p>Exercícios e casos que aproximam o estudo da rotina de projeto.</p>
          </div>

          <div className="home-phase">
            <span className="home-phase-label">Quarta fase</span>
            <strong>Certificação</strong>
            <p>Avaliação final que valida a formação e habilita a alocação.</p>
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section className="home-section">
        <div className="home-section-head">
          <h2>O que você encontra em cada fase</h2>
          <p>Estudo, revisão e verificação — no mesmo lugar.</p>
        </div>

        <div className="home-resources">
          {RESOURCES.map(({ icon: Icon, title, text }) => (
            <article key={title} className="home-resource">
              <Icon size={18} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Ciência das regras — libera a avaliação */}
      <section className="home-consent">
        {acknowledged ? (
          <>
            <div>
              <span className="home-consent-tag">
                <CheckCircle2 size={14} /> Avaliação liberada
              </span>
              <h2>Você já confirmou que está ciente</h2>
              <p>A aba Avaliação está aberta e você pode iniciar os testes quando quiser.</p>
            </div>
            <button type="button" className="btn-primary" onClick={onGoToAssessment}>
              Ir para a avaliação
            </button>
          </>
        ) : (
          <>
            <div>
              <h2>Antes de começar</h2>
              <p>
                Ao confirmar, você declara que leu e entendeu como funciona o programa: o avanço é
                por fases, cada fase só abre depois da anterior e a avaliação inicial define seu
                ponto de partida. A confirmação libera a aba <strong>Avaliação</strong>.
              </p>
            </div>
            <button type="button" className="btn-primary" onClick={onAcknowledge}>
              Estou Ciente
            </button>
          </>
        )}
      </section>
    </div>
  );
};
