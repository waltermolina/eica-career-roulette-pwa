import { useCallback, useState } from 'react';
import { Button } from './shared/components/Button';
import { Layout } from './shared/components/Layout';
import { Wheel } from './features/wheel/Wheel';
import { Question, type QuestionOutcome } from './features/question/Question';
import { Result } from './features/result/Result';
import type { Career } from './core/types';
import './App.scss';

type Screen = 'inicio' | 'ruleta' | 'pregunta' | 'resultado';

export function App() {
  const [screen, setScreen] = useState<Screen>('inicio');
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);
  const [outcome, setOutcome] = useState<QuestionOutcome | null>(null);

  const goToWheel = useCallback(() => setScreen('ruleta'), []);

  const handleCareerSelected = useCallback((career: Career) => {
    setSelectedCareer(career);
    setScreen('pregunta');
  }, []);

  const handleQuestionFinished = useCallback((result: QuestionOutcome) => {
    setOutcome(result);
    setScreen('resultado');
  }, []);

  const handleRestart = useCallback(() => {
    setSelectedCareer(null);
    setOutcome(null);
    setScreen('inicio');
  }, []);

  if (screen === 'ruleta') {
    return <Wheel onCareerSelected={handleCareerSelected} />;
  }

  if (screen === 'pregunta' && selectedCareer) {
    return <Question careerId={selectedCareer.id} onFinished={handleQuestionFinished} />;
  }

  if (screen === 'resultado' && outcome) {
    return <Result outcome={outcome} onRestart={handleRestart} />;
  }

  return (
    <Layout>
      <div className="home">
        <img src="/icons/logo-eica.svg" alt="Logo EICA" className="home__logo" />
        <h1 className="home__title">Ruleta de carreras EICA</h1>
        <Button onClick={goToWheel}>Girar ruleta</Button>
      </div>
    </Layout>
  );
}
