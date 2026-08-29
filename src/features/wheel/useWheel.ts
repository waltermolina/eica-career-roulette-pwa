import { useCallback, useEffect, useRef, useState } from 'react';
import { fetchCareers } from '../../core/repository';
import type { Career } from '../../core/types';

export interface UseWheelResult {
  careers: Career[];
  isLoading: boolean;
  isSpinning: boolean;
  rotationDeg: number;
  selectedCareer: Career | null;
  spin: () => void;
}

function pickWeightedCareer(careers: Career[]): Career {
  const totalWeight = careers.reduce((sum, career) => sum + career.weight, 0);
  let threshold = Math.random() * totalWeight;

  for (const career of careers) {
    threshold -= career.weight;
    if (threshold <= 0) {
      return career;
    }
  }

  return careers[careers.length - 1];
}

export function useWheel(): UseWheelResult {
  const [careers, setCareers] = useState<Career[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotationDeg, setRotationDeg] = useState(0);
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);
  const accumulatedRotationRef = useRef(0);

  useEffect(() => {
    let isMounted = true;

    fetchCareers().then((result) => {
      if (isMounted) {
        setCareers(result);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const spin = useCallback(() => {
    if (isSpinning || careers.length === 0) {
      return;
    }

    const chosen = pickWeightedCareer(careers);
    const chosenIndex = careers.findIndex((career) => career.id === chosen.id);
    const segmentSize = 360 / careers.length;
    const segmentCenter = chosenIndex * segmentSize + segmentSize / 2;
    const fullTurns = 360 * 6;
    const currentNormalized = accumulatedRotationRef.current % 360;
    const targetNormalized = (360 - segmentCenter) % 360;
    const delta = fullTurns + ((targetNormalized - currentNormalized + 360) % 360);
    const nextRotation = accumulatedRotationRef.current + delta;

    accumulatedRotationRef.current = nextRotation;
    setSelectedCareer(null);
    setIsSpinning(true);
    setRotationDeg(nextRotation);

    window.setTimeout(() => {
      setIsSpinning(false);
      setSelectedCareer(chosen);
    }, 4000);
  }, [careers, isSpinning]);

  return { careers, isLoading, isSpinning, rotationDeg, selectedCareer, spin };
}
