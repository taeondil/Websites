import React, { useState } from 'react';
import { MultipleChoice } from './MultipleChoice';
import { TrueFalse } from './TrueFalse';
import { FillInBlanks } from './FillInBlanks';
import { ExerciseResults } from './ExerciseResults';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Exercise {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'fill-blanks';
  question: string;
  options?: string[];
  answer: string | boolean;
}

interface ExerciseSectionProps {
  exercises: Exercise[];
}

export function ExerciseSection({ exercises }: ExerciseSectionProps) {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswer = (exerciseId: string, isCorrect: boolean) => {
    setAnswers(prev => ({ ...prev, [exerciseId]: isCorrect }));
    
    // Tüm sorular yanıtlandıysa sonuç ekranını göster
    const totalAnswered = Object.keys(answers).length + 1;
    if (totalAnswered === exercises.length) {
      setIsCompleted(true);
    }
  };

  const score = Object.values(answers).filter(Boolean).length;

  const handleRetry = () => {
    setAnswers({});
    setIsCompleted(false);
  };

  const handleBack = () => {
    window.history.back();
  };

  if (isCompleted) {
    return (
      <ExerciseResults
        score={score}
        totalQuestions={exercises.length}
        onRetry={handleRetry}
        onBack={handleBack}
      />
    );
  }

  return (
    <div className="space-y-12">
      {exercises.map((exercise, index) => (
        <div 
          key={exercise.id}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 animate-fade-in"
        >
          <div className="mb-4 text-white/60">
            Soru {index + 1}/{exercises.length}
          </div>

          {exercise.type === 'multiple-choice' && (
            <MultipleChoice 
              exercise={exercise}
              onCorrect={() => handleAnswer(exercise.id, true)}
              onWrong={() => handleAnswer(exercise.id, false)}
              isAnswered={exercise.id in answers}
            />
          )}
          {exercise.type === 'true-false' && (
            <TrueFalse 
              exercise={exercise}
              onCorrect={() => handleAnswer(exercise.id, true)}
              onWrong={() => handleAnswer(exercise.id, false)}
              isAnswered={exercise.id in answers}
            />
          )}
          {exercise.type === 'fill-blanks' && (
            <FillInBlanks 
              exercise={exercise}
              onCorrect={() => handleAnswer(exercise.id, true)}
              onWrong={() => handleAnswer(exercise.id, false)}
              isAnswered={exercise.id in answers}
            />
          )}
        </div>
      ))}

      <div className="flex justify-center mt-8">
        <div className="flex space-x-2">
          {exercises.map((exercise, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                exercise.id in answers
                  ? answers[exercise.id]
                    ? 'bg-emerald-500'
                    : 'bg-red-500'
                  : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}