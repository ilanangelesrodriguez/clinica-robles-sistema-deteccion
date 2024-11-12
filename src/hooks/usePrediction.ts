import { useState } from 'react';
import { getPrediction } from '../services/predictionService';
import { PredictionData } from '@/models/predictionModel';

export function usePrediction() {
  const [prediction, setPrediction] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const predict = async (data: PredictionData['data']) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await getPrediction(data);
      setPrediction(result);
    } catch (err) {
      setError('Failed to get prediction');
    } finally {
      setIsLoading(false);
    }
  };

  return { prediction, isLoading, error, predict };
}