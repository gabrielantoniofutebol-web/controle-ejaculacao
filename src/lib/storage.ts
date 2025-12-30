// Local storage utilities para persistência de dados

import { UserProgress, QuizAnswers } from './types';

const STORAGE_KEYS = {
  PROGRESS: 'controle-absoluto-progress',
  QUIZ: 'controle-absoluto-quiz',
  ONBOARDING_COMPLETE: 'controle-absoluto-onboarding',
};

export const saveProgress = (progress: UserProgress): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
  }
};

export const loadProgress = (): UserProgress | null => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    return data ? JSON.parse(data) : null;
  }
  return null;
};

export const saveQuizResults = (answers: QuizAnswers): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.QUIZ, JSON.stringify(answers));
  }
};

export const loadQuizResults = (): QuizAnswers | null => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(STORAGE_KEYS.QUIZ);
    return data ? JSON.parse(data) : null;
  }
  return null;
};

export const setOnboardingComplete = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.ONBOARDING_COMPLETE, 'true');
  }
};

export const isOnboardingComplete = (): boolean => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(STORAGE_KEYS.ONBOARDING_COMPLETE) === 'true';
  }
  return false;
};

export const initializeProgress = (planType: 'intensive' | 'standard', quizResults: QuizAnswers): UserProgress => {
  const progress: UserProgress = {
    currentPhase: 1,
    currentDay: 1,
    completedDays: [],
    dailyNotes: {},
    badges: [],
    quizResults,
    planType,
  };
  saveProgress(progress);
  return progress;
};

export const markDayComplete = (day: number, note: number): void => {
  const progress = loadProgress();
  if (progress) {
    if (!progress.completedDays.includes(day)) {
      progress.completedDays.push(day);
    }
    progress.dailyNotes[day] = note;
    
    // Atualizar fase atual baseado no dia
    if (day <= 7) progress.currentPhase = 1;
    else if (day <= 21) progress.currentPhase = 2;
    else progress.currentPhase = 3;
    
    // Atualizar dia atual
    progress.currentDay = Math.min(day + 1, 35);
    
    // Desbloquear badges
    const badges = checkBadges(progress.completedDays.length);
    progress.badges = badges;
    
    saveProgress(progress);
  }
};

const checkBadges = (completedDays: number): string[] => {
  const badges: string[] = [];
  if (completedDays >= 1) badges.push('first-day');
  if (completedDays >= 7) badges.push('week-warrior', 'phase-1-master');
  if (completedDays >= 18) badges.push('halfway-hero');
  if (completedDays >= 21) badges.push('phase-2-master');
  if (completedDays >= 28) badges.push('final-stretch');
  if (completedDays >= 35) badges.push('phase-3-master', 'the-one-percent');
  return badges;
};
