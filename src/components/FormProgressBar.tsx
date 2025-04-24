import React from 'react';

interface FormProgressBarProps {
  progress: number;
}

const FormProgressBar: React.FC<FormProgressBarProps> = ({ progress }) => {
  const getProgressColor = () => {
    if (progress < 30) return 'bg-red-500';
    if (progress < 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700">
          Application Progress
        </span>
        <span className="text-sm font-medium text-gray-700">
          {progress}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full transition-all duration-500 ${getProgressColor()}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>Get Started</span>
        <span>Halfway There</span>
        <span>Complete</span>
      </div>
    </div>
  );
};

export default FormProgressBar;