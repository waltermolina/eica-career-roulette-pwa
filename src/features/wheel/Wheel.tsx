import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Button } from '../../shared/components/Button';
import { Layout } from '../../shared/components/Layout';
import type { Career } from '../../core/types';
import { useWheel } from './useWheel';
import './wheel.scss';

const FALLBACK_COLORS = ['#6023a3', '#7b2fc9', '#9c5ee0', '#4b1683', '#c49bf0', '#3c0d63'];

function buildConicGradient(careers: Career[]): string {
  const segmentSize = 360 / careers.length;

  const stops = careers.map((career, index) => {
    const color = career.color ?? FALLBACK_COLORS[index % FALLBACK_COLORS.length];
    const start = index * segmentSize;
    const end = start + segmentSize;
    return `${color} ${start}deg ${end}deg`;
  });

  return `conic-gradient(${stops.join(', ')})`;
}

interface WheelProps {
  onCareerSelected: (career: Career) => void;
}

export function Wheel({ onCareerSelected }: WheelProps) {
  const { careers, isLoading, isSpinning, rotationDeg, selectedCareer, spin } = useWheel();

  useEffect(() => {
    if (!selectedCareer) {
      return;
    }

    const timeoutId = window.setTimeout(() => onCareerSelected(selectedCareer), 5000);
    return () => window.clearTimeout(timeoutId);
  }, [selectedCareer, onCareerSelected]);

  if (isLoading) {
    return (
      <Layout>
        <p className="wheel__status">Cargando la ruleta...</p>
      </Layout>
    );
  }

  const segmentSize = 360 / careers.length;

  return (
    <Layout>
      <div className="wheel">
        <div className="wheel__heading">
          <span className="wheel__kicker">Tu futuro empieza acá</span>
          <h1 className="wheel__title">Girando destinos</h1>
        </div>
        <div className="wheel__stage">
          <div className="wheel__pointer" />
          <motion.div
            className="wheel__disc"
            style={{ background: buildConicGradient(careers) }}
            animate={{ rotate: rotationDeg }}
            transition={{ duration: 4, ease: [0.15, 0.85, 0.3, 1] }}
          >
            {careers.map((career, index) => {
              const rotation = index * segmentSize + segmentSize / 2;
              return (
                <span
                  key={career.id}
                  className="wheel__label"
                  style={{ transform: `rotate(${rotation}deg)` }}
                >
                  <span className="wheel__label-text">{career.acronym}</span>
                </span>
              );
            })}
          </motion.div>
        </div>
        {selectedCareer ? (
          <div className="wheel__result" role="status">
            <span className="wheel__career-name">{selectedCareer.name}</span>
            <span className="wheel__result-message">¡Preparate para responder!</span>
          </div>
        ) : (
          <Button onClick={spin} disabled={isSpinning}>
            {isSpinning ? 'Girando...' : 'Girar ruleta'}
          </Button>
        )}
      </div>
    </Layout>
  );
}
