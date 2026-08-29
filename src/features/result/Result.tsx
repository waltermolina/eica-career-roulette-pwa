import { motion } from 'framer-motion';
import { Button } from '../../shared/components/Button';
import { Layout } from '../../shared/components/Layout';
import type { QuestionOutcome } from '../question/Question';
import './result.scss';

interface ResultProps {
  outcome: QuestionOutcome;
  onRestart: () => void;
}

const MESSAGES: Record<QuestionOutcome, { title: string; description: string }> = {
  correct: {
    title: '¡Felicitaciones!',
    description: 'La respuesta es correcta.',
  },
  incorrect: {
    title: 'Respuesta incorrecta',
    description: 'La respuesta elegida no es correcta.',
  },
  timeout: {
    title: 'Tiempo agotado',
    description: 'El tiempo para responder terminó.',
  },
  sinDatos: {
    title: 'Sin pregunta disponible',
    description: 'No hay una pregunta cargada para la carrera seleccionada.',
  },
};

export function Result({ outcome, onRestart }: ResultProps) {
  const { title, description } = MESSAGES[outcome];

  return (
    <Layout>
      <motion.div
        className={`result result--${outcome}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="result__title">{title}</h1>
        <p className="result__description">{description}</p>
        <Button onClick={onRestart}>Volver al inicio</Button>
      </motion.div>
    </Layout>
  );
}
