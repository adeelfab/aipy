// components/ExerciseSection.js
import React from 'react';
import { Check, X } from 'lucide-react';

const ExerciseSection = ({ 
  exercises, 
  currentExercise, 
  exerciseAnswer, 
  onStartExercise, 
  onAnswerChange, 
  onCheckAnswer, 
  onCancelExercise 
}) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Practice Exercises</h3>
      {currentExercise ? (
        <div className="bg-blue-50 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-4">{currentExercise.question}</h4>
          
          {currentExercise.type === 'multiple_choice' ? (
            <div className="space-y-2">
              {currentExercise.options.map((option, idx) => (
                <label key={idx} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="answer"
                    value={idx}
                    onChange={(e) => onAnswerChange(e.target.value)}
                    className="text-blue-500"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          ) : (
            <input
              type="text"
              value={exerciseAnswer}
              onChange={(e) => onAnswerChange(e.target.value)}
              placeholder="Type your answer..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
          
          <div className="flex space-x-2 mt-4">
            <button
              onClick={onCheckAnswer}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 flex items-center space-x-2"
            >
              <Check className="w-4 h-4" />
              <span>Check Answer</span>
            </button>
            <button
              onClick={onCancelExercise}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 flex items-center space-x-2"
            >
              <X className="w-4 h-4" />
              <span>Cancel</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {exercises.map((exercise, idx) => (
            <button
              key={idx}
              onClick={() => onStartExercise(exercise)}
              className="w-full text-left bg-gray-50 hover:bg-gray-100 rounded-lg p-4 transition duration-200"
            >
              <div className="font-semibold text-gray-800">
                Exercise {idx + 1}: {exercise.type === 'multiple_choice' ? 'Multiple Choice' : 'Fill in the Blank'}
              </div>
              <div className="text-gray-600 text-sm mt-1">{exercise.question}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExerciseSection;