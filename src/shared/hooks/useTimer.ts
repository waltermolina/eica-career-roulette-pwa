import { useCallback, useEffect, useRef, useState } from 'react';

export interface UseTimerResult {
  remainingMs: number;
  progress: number;
  isFinished: boolean;
  reset: () => void;
}

export function useTimer(durationMs: number, onFinish: () => void): UseTimerResult {
  const [remainingMs, setRemainingMs] = useState(durationMs);
  const [resetToken, setResetToken] = useState(0);
  const onFinishRef = useRef(onFinish);

  useEffect(() => {
    onFinishRef.current = onFinish;
  }, [onFinish]);

  const reset = useCallback(() => {
    setResetToken((token) => token + 1);
    setRemainingMs(durationMs);
  }, [durationMs]);

  useEffect(() => {
    const startedAt = Date.now();
    let finished = false;
    let frameId = 0;

    function tick(): void {
      const elapsed = Date.now() - startedAt;
      const remaining = Math.max(durationMs - elapsed, 0);
      setRemainingMs(remaining);

      if (remaining <= 0) {
        if (!finished) {
          finished = true;
          onFinishRef.current();
        }
        return;
      }

      frameId = requestAnimationFrame(tick);
    }

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [durationMs, resetToken]);

  return {
    remainingMs,
    progress: 1 - remainingMs / durationMs,
    isFinished: remainingMs <= 0,
    reset,
  };
}
