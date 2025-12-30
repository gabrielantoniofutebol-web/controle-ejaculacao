'use client';

import { useState } from 'react';
import { Lock, CheckCircle2, Circle, ChevronRight } from 'lucide-react';
import { UserProgress } from '@/lib/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DayExerciseView from './day-exercise-view';

interface PhasesSectionProps {
  progress: UserProgress;
  onRefresh: () => void;
}

export default function PhasesSection({ progress, onRefresh }: PhasesSectionProps) {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const phases = [
    { id: 1, name: 'Fase 1: Fundamentos', days: 7, startDay: 1, color: 'from-blue-500 to-blue-600' },
    { id: 2, name: 'Fase 2: Controle Ativo', days: 14, startDay: 8, color: 'from-purple-500 to-purple-600' },
    { id: 3, name: 'Fase 3: Domínio Total', days: 14, startDay: 22, color: 'from-green-500 to-green-600' },
  ];

  const isPhaseUnlocked = (phaseId: number) => {
    if (phaseId === 1) return true;
    if (phaseId === 2) return progress.completedDays.length >= 7;
    if (phaseId === 3) return progress.completedDays.length >= 21;
    return false;
  };

  const isDayUnlocked = (day: number) => {
    // Dia 1 sempre desbloqueado
    if (day === 1) return true;
    // Outros dias desbloqueiam após completar o anterior
    return progress.completedDays.includes(day - 1);
  };

  if (selectedDay) {
    return (
      <DayExerciseView 
        day={selectedDay} 
        progress={progress}
        onBack={() => setSelectedDay(null)}
        onRefresh={onRefresh}
      />
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#007BFF] to-[#0056B3] rounded-3xl p-6 mb-6 shadow-2xl">
        <h1 className="text-3xl font-bold text-white mb-2">Programa de 35 Dias</h1>
        <p className="text-white/90">Selecione uma fase para ver os exercícios</p>
      </div>

      {/* Tabs de Fases */}
      <Tabs defaultValue="1" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6 bg-white p-1 rounded-xl shadow-lg">
          {phases.map(phase => (
            <TabsTrigger 
              key={phase.id}
              value={phase.id.toString()}
              disabled={!isPhaseUnlocked(phase.id)}
              className="data-[state=active]:bg-[#007BFF] data-[state=active]:text-white rounded-lg transition-all duration-300"
            >
              {isPhaseUnlocked(phase.id) ? (
                <span className="text-sm font-medium">Fase {phase.id}</span>
              ) : (
                <div className="flex items-center gap-1">
                  <Lock className="w-4 h-4" />
                  <span className="text-sm">Fase {phase.id}</span>
                </div>
              )}
            </TabsTrigger>
          ))}
        </TabsList>

        {phases.map(phase => (
          <TabsContent key={phase.id} value={phase.id.toString()} className="space-y-3">
            {/* Header da fase */}
            <div className={`bg-gradient-to-br ${phase.color} rounded-2xl p-6 mb-4 shadow-lg`}>
              <h2 className="text-2xl font-bold text-white mb-2">{phase.name}</h2>
              <p className="text-white/90">{phase.days} dias de treinamento</p>
              
              {!isPhaseUnlocked(phase.id) && (
                <div className="mt-4 bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-2 text-white">
                    <Lock className="w-5 h-5" />
                    <span className="font-medium">
                      Complete a fase anterior para desbloquear
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Lista de dias */}
            {isPhaseUnlocked(phase.id) && (
              <div className="space-y-3">
                {Array.from({ length: phase.days }, (_, i) => {
                  const dayNumber = phase.startDay + i;
                  const isCompleted = progress.completedDays.includes(dayNumber);
                  const isUnlocked = isDayUnlocked(dayNumber);
                  const isCurrent = progress.currentDay === dayNumber;

                  return (
                    <button
                      key={dayNumber}
                      onClick={() => isUnlocked && setSelectedDay(dayNumber)}
                      disabled={!isUnlocked}
                      className={`w-full p-4 rounded-xl transition-all duration-300 ${
                        isCompleted
                          ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg'
                          : isCurrent
                          ? 'bg-gradient-to-r from-[#007BFF] to-[#0056B3] text-white shadow-lg animate-pulse'
                          : isUnlocked
                          ? 'bg-white text-[#333333] hover:shadow-lg hover:scale-105'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {isCompleted ? (
                            <CheckCircle2 className="w-6 h-6" />
                          ) : isUnlocked ? (
                            <Circle className="w-6 h-6" />
                          ) : (
                            <Lock className="w-6 h-6" />
                          )}
                          <div className="text-left">
                            <p className="font-bold">Dia {dayNumber}</p>
                            {isCompleted && progress.dailyNotes[dayNumber] && (
                              <p className="text-sm opacity-90">
                                Nota: {progress.dailyNotes[dayNumber]}/10
                              </p>
                            )}
                            {isCurrent && !isCompleted && (
                              <p className="text-sm opacity-90">Dia atual - Comece agora!</p>
                            )}
                          </div>
                        </div>
                        {isUnlocked && <ChevronRight className="w-5 h-5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
