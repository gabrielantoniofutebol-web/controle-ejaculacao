// Types para o app Controle Absoluto

export interface QuizAnswers {
  frequency: 'always' | 'sometimes' | 'rarely';
  anxiety: 'high' | 'medium' | 'low';
  triedBefore: boolean;
  focus: 'technical' | 'mental';
  inRelationship: boolean;
  timeExpectation: 'days' | 'weeks' | 'months';
}

export interface UserProgress {
  currentPhase: 1 | 2 | 3;
  currentDay: number;
  completedDays: number[];
  dailyNotes: Record<number, number>; // dia -> nota 1-10
  badges: string[];
  quizResults: QuizAnswers | null;
  planType: 'intensive' | 'standard';
}

export interface DayExercise {
  day: number;
  phase: number;
  title: string;
  kegels: string;
  breathing: string;
  mindfulness: string;
  optional?: string;
  duration: number; // minutos
  imageUrl?: string;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
}
