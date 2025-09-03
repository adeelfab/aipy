// components/LessonScreen.js
import React, { useState } from 'react';
import { Star, Check, X } from 'lucide-react';
import VocabularySection from './VocabularySection';
import ExerciseSection from './ExerciseSection';

const LessonScreen = ({ lesson, userProgress, onAddXP, onNavigateBack }) => {
  const [currentExercise, setCurrentExercise] = useState(null);
  const [exerciseAnswer, setExerciseAnswer] = useState('');

  const startExercise = (exercise) => {
    setCurrentExercise(exercise);
    setExerciseAnswer('');
  };

  const checkAnswer = () => {
    if (!currentExercise) return;
    
    let isCorrect = false;
    if (currentExercise.type === 'multiple_choice') {
      isCorrect = parseInt(exerciseAnswer) === currentExercise.correct;
    } else if (currentExercise.type === 'fill_blank') {
      isCorrect = exerciseAnswer.toLowerCase().trim() === currentExercise.answer.toLowerCase();
    }

    if (isCorrect) {
      onAddXP(10);
      alert('Correct! +10 XP');
    } else {
      alert('Try again!');
    }
    
    setCurrentExercise(null);
    setExerciseAnswer('');
  };

  const cancelExercise = () => {
    setCurrentExercise(null);
    setExerciseAnswer('');
  };

  if (!lesson) {
    return <div>Loading lesson...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onNavigateBack}
              className="text-blue-500 hover:text-blue-700"
            >
              ← Back to Dashboard
            </button>
            <h1 className="text-2xl font-bold text-gray-800">{lesson.title}</h1>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold">{userProgress.xp} XP</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm border p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{lesson.title}</h2>
          <p className="text-lg text-gray-600 mb-8">{lesson.content}</p>

          {/* Vocabulary Section */}
          <VocabularySection vocabulary={lesson.vocabulary} />

          {/* Exercises Section */}
          <ExerciseSection 
            exercises={lesson.exercises}
            currentExercise={currentExercise}
            exerciseAnswer={exerciseAnswer}
            onStartExercise={startExercise}
            onAnswerChange={setExerciseAnswer}
            onCheckAnswer={checkAnswer}
            onCancelExercise={cancelExercise}
          />
        </div>
      </div>
    </div>
  );
};

export default LessonScreen;