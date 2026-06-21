import { useState, useEffect, useCallback } from 'react';

export interface AlignmentState {
  x: number; 
  y: number; 
  alignmentScore: number; 
}

export const useMouseAlignment = (): AlignmentState => {
  const [state, setState] = useState<AlignmentState>({ x: 0, y: 0, alignmentScore: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    
    const x = (e.clientX / innerWidth) * 2 - 1;
    const y = e.clientY / innerHeight;

    const deviationFromCenter = Math.abs(y - 0.5);
    const alignmentScore = Math.max(0, 1 - deviationFromCenter * 2.5);

    setState({ x, y, alignmentScore });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return state;
};