import { useCallback, useEffect, useState } from 'react';
import { fetchQuestions } from '../../core/repository';
import type { Question } from '../../core/types';

export interface UseQuestionResult {
  question: Question | null;
  isLoading: boolean;
  selectedIndex: number | null;
  selectOption: (index: number) => boolean;
}

export function useQuestion(careerId: string): UseQuestionResult {
  const [question, setQuestion] = useState<Question | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;

    fetchQuestions().then((questions) => {
      if (!isMounted) {
        return;
      }

      const matches = questions.filter((item) => item.careerId === careerId);
      const chosen = matches[Math.floor(Math.random() * matches.length)] ?? null;
      setQuestion(chosen);
      setIsLoading(false);
    });

    return () => {
      isMounted = false;
    };
  }, [careerId]);

  const selectOption = useCallback(
    (index: number) => {
      if (!question || selectedIndex !== null) {
        return false;
      }

      setSelectedIndex(index);
      return index === question.correctIndex;
    },
    [question, selectedIndex],
  );

  return { question, isLoading, selectedIndex, selectOption };
}
