
import React from 'react';
import { Check } from 'lucide-react';

type Step = {
  title: string;
  description: string;
};

type ProgressIndicatorProps = {
  steps: Step[];
  currentStep: number;
};

// Custom component to display multi-step progress
// Created by Akhil Jyot for the Kalpathon 2025
// Inspired by design patterns from Stripe and Linear
const ProgressIndicator = ({ steps, currentStep }: ProgressIndicatorProps) => {
  // Helper to determine if we should show the connector line
  const shouldShowConnector = (index: number) => index < steps.length - 1;
  
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div className="flex flex-col md:flex-row justify-between relative">
        {steps.map((step, index) => {
          const isCompleted = currentStep > index;
          const isActive = currentStep === index;
          
          return (
            <div key={index} className="flex flex-1 flex-col items-center relative">
              {/* Progress Line - only show between steps, not after the last step */}
              {shouldShowConnector(index) && (
                <div className="hidden md:block absolute top-5 left-1/2 w-full h-0.5 z-0">
                  <div 
                    className={`h-full ${
                      isCompleted ? 'bg-black' : 'bg-gray-200'
                    }`} 
                  />
                </div>
              )}
              
              {/* Step Circle - I like this style better than numbered indicators */}
              <div 
                className={`z-10 flex items-center justify-center w-10 h-10 rounded-full mb-2 transition-all duration-300 ${
                  isCompleted 
                    ? 'bg-black text-white' 
                    : isActive 
                      ? 'bg-gray-100 text-black border-2 border-black' 
                      : 'bg-gray-100 text-gray-400 border-2 border-gray-200'
                }`}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span className="text-sm font-semibold">{index + 1}</span>
                )}
              </div>
              
              {/* Step Label */}
              <div className="text-center space-y-1">
                <p className={`font-medium ${isActive || isCompleted ? 'text-black' : 'text-gray-500'}`}>
                  {step.title}
                </p>
                <p className="text-xs text-gray-500 hidden md:block">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressIndicator;
