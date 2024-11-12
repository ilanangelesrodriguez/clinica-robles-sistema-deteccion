import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Input, Button, Spinner } from '@nextui-org/react';
import { usePrediction } from '@/hooks/usePrediction';

const inputFields = [
  "radius_mean", "texture_mean", "perimeter_mean", "area_mean", "smoothness_mean",
  "compactness_mean", "concavity_mean", "concave points_mean", "symmetry_mean", "fractal_dimension_mean",
  "radius_se", "texture_se", "perimeter_se", "area_se", "smoothness_se", "compactness_se",
  "concavity_se", "concave points_se", "symmetry_se", "fractal_dimension_se", "radius_worst",
  "texture_worst", "perimeter_worst", "area_worst", "smoothness_worst", "compactness_worst",
  "concavity_worst", "concave points_worst", "symmetry_worst", "fractal_dimension_worst"
];

export default function PredictionForm() {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const { prediction, isLoading, error, predict } = usePrediction();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = inputFields.map(field => parseFloat(formData[field] || '0'));
    predict(data);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto p-6"
    >
      <Card className="p-8 bg-gradient-to-r from-blue-300 to-cyan-200 shadow-xl">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {inputFields.map((field) => (
            <Input
              key={field}
              label={field.replace(/_/g, ' ')}
              type="number"
              value={formData[field] || ''}
              onValueChange={(value) => handleInputChange(field, value)}
              className="bg-white bg-opacity-30 text-blue-900 placeholder:text-blue-700"
              fullWidth
              classNames={{
                label: "text-blue-900 font-medium",
                input: "placeholder:text-blue-700",
              }}
            />
          ))}
          <div className="col-span-full mt-6">
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors text-lg font-semibold"
              size="lg"
            >
              {isLoading ? <Spinner size="sm" color="white" /> : 'Predict'}
            </Button>
          </div>
        </form>
        <div className="h-8" /> {/* Spacer */}
        {(prediction || error) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-6"
          >
            <Card className="bg-white bg-opacity-90 p-6 shadow-md">
              {prediction && (
                <div className="text-center">
                  <h3 className="text-blue-600 mb-2 text-xl font-semibold">Prediction Result</h3>
                  <p className="text-xl font-semibold text-gray-800">{prediction}</p>
                </div>
              )}
              {error && (
                <div className="text-center">
                  <h3 className="text-red-500 mb-2 text-xl font-semibold">Error</h3>
                  <p className="text-lg text-gray-700">{error}</p>
                </div>
              )}
            </Card>
          </motion.div>
        )}
      </Card>
    </motion.div>
  );
}