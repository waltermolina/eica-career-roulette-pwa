import { useEffect } from 'react';
import { Layout } from '../../shared/components/Layout';
import { useTimer } from '../../shared/hooks/useTimer';
import { useQuestion } from './useQuestion';
import './question.scss';

const QUESTION_DURATION_MS = 30000;

export type QuestionOutcome = 'correct' | 'incorrect' | 'timeout' | 'sinDatos';

interface QuestionProps {
  careerId: string;
  onFinished: (outcome: QuestionOutcome) => void;
}

export function Question({ careerId, onFinished }: QuestionProps) {
  const { question, isLoading, selectedIndex, selectOption } = useQuestion(careerId);
  const { progress, reset } = useTimer(QUESTION_DURATION_MS, () => {
    if (selectedIndex === null) {
      onFinished('timeout');
    }
  });

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (!question) {
      onFinished('sinDatos');
      return;
    }

    reset();
  }, [isLoading, question, onFinished, reset]);

  const handleSelect = (index: number) => {
    const isCorrect = selectOption(index);
    window.setTimeout(() => onFinished(isCorrect ? 'correct' : 'incorrect'), 600);
  };

  if (isLoading || !question) {
    return (
      <Layout>
        <p className="question__status">Cargando pregunta...</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="question">
        <span className="question__round">Desafío EICA</span>
        <div className="question__progress-track">
          <div
            className="question__progress-fill"
            style={{ transform: `scaleX(${Math.min(Math.max(progress, 0), 1)})` }}
          />
        </div>
        <h2 className="question__text">{question.text}</h2>
        <div className="question__options">
          {question.options.map((option, index) => {
            const isSelected = selectedIndex === index;
            const isCorrectOption = selectedIndex !== null && index === question.correctIndex;
            const optionClass = [
              'question__option',
              isSelected && !isCorrectOption ? 'question__option--incorrect' : '',
              isCorrectOption ? 'question__option--correct' : '',
            ]
              .filter(Boolean)
              .join(' ');

            return (
              <button
                key={option}
                type="button"
                className={optionClass}
                disabled={selectedIndex !== null}
                onClick={() => handleSelect(index)}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
