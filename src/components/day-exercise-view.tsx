'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, Play, Pause, CheckCircle2, Volume2, Image as ImageIcon } from 'lucide-react';
import { UserProgress } from '@/lib/types';
import { exercisesData } from '@/lib/exercises-data';
import { markDayComplete } from '@/lib/storage';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';

interface DayExerciseViewProps {
  day: number;
  progress: UserProgress;
  onBack: () => void;
  onRefresh: () => void;
}

export default function DayExerciseView({ day, progress, onBack, onRefresh }: DayExerciseViewProps) {
  const exercise = exercisesData.find(e => e.day === day);
  const [timerActive, setTimerActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isCompleted, setIsCompleted] = useState(progress.completedDays.includes(day));
  const [note, setNote] = useState<number>(progress.dailyNotes[day] || 5);
  const [showAudio, setShowAudio] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setTimerActive(false);
            // Vibração ao completar
            if (navigator.vibrate) {
              navigator.vibrate([200, 100, 200]);
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft]);

  if (!exercise) {
    return (
      <div className="min-h-screen p-4 flex items-center justify-center">
        <p className="text-[#333333]">Exercício não encontrado</p>
      </div>
    );
  }

  const startTimer = (minutes: number) => {
    setTimeLeft(minutes * 60);
    setTimerActive(true);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleComplete = () => {
    markDayComplete(day, note);
    setIsCompleted(true);
    onRefresh();
    
    // Vibração de sucesso
    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100, 50, 200]);
    }
  };

  return (
    <div className="min-h-screen bg-[#E3F2FD] pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#007BFF] to-[#0056B3] p-6 shadow-lg sticky top-0 z-10">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-white mb-4 hover:opacity-80 transition-opacity"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Voltar</span>
        </button>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Dia {day} - {exercise.title}
        </h1>
        <p className="text-white/90">Fase {exercise.phase} • Duração: {exercise.duration} min</p>
      </div>

      <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
        {/* Timer Card */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-[#333333] mb-4 flex items-center gap-2">
            <Play className="w-5 h-5 text-[#007BFF]" />
            Timer de Exercício
          </h2>
          
          <div className="bg-gradient-to-br from-[#007BFF] to-[#0056B3] rounded-xl p-8 mb-4">
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-4">
                {formatTime(timeLeft)}
              </div>
              <div className="flex gap-3 justify-center">
                <Button
                  onClick={() => startTimer(5)}
                  disabled={timerActive}
                  className="bg-white text-[#007BFF] hover:bg-white/90"
                >
                  5 min
                </Button>
                <Button
                  onClick={() => startTimer(10)}
                  disabled={timerActive}
                  className="bg-white text-[#007BFF] hover:bg-white/90"
                >
                  10 min
                </Button>
                <Button
                  onClick={() => startTimer(exercise.duration)}
                  disabled={timerActive}
                  className="bg-white text-[#007BFF] hover:bg-white/90"
                >
                  {exercise.duration} min
                </Button>
              </div>
            </div>
          </div>

          {timerActive && (
            <Button
              onClick={() => setTimerActive(false)}
              variant="outline"
              className="w-full border-2 border-red-500 text-red-500 hover:bg-red-50"
            >
              <Pause className="w-4 h-4 mr-2" />
              Pausar Timer
            </Button>
          )}
        </div>

        {/* Imagem/GIF Ilustrativo */}
        {exercise.imageUrl && (
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-[#333333] mb-4 flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-[#007BFF]" />
              Guia Visual
            </h2>
            <div className="relative w-full aspect-video bg-[#E3F2FD] rounded-xl overflow-hidden">
              <img 
                src={exercise.imageUrl} 
                alt={exercise.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Exercícios de Kegel */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-[#333333] mb-3">💪 Exercícios de Kegel</h2>
          <p className="text-[#333333] leading-relaxed">{exercise.kegels}</p>
        </div>

        {/* Respiração */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-[#333333] mb-3">🌬️ Técnica de Respiração</h2>
          <p className="text-[#333333] leading-relaxed">{exercise.breathing}</p>
        </div>

        {/* Mindfulness */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-[#333333] mb-3">🧘 Mindfulness</h2>
          <p className="text-[#333333] leading-relaxed">{exercise.mindfulness}</p>
        </div>

        {/* Prática Opcional */}
        {exercise.optional && (
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 shadow-lg border-2 border-purple-200">
            <h2 className="text-xl font-bold text-[#333333] mb-3">✨ Prática Opcional</h2>
            <p className="text-[#333333] leading-relaxed">{exercise.optional}</p>
          </div>
        )}

        {/* Áudio Guiado */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-[#333333] mb-4 flex items-center gap-2">
            <Volume2 className="w-5 h-5 text-[#007BFF]" />
            Áudio Guiado
          </h2>
          <p className="text-[#333333]/70 text-sm mb-4">
            Ouça a narração guiada do exercício para melhor compreensão
          </p>
          <Button
            onClick={() => setShowAudio(!showAudio)}
            className="w-full bg-[#007BFF] hover:bg-[#0056B3] text-white"
          >
            {showAudio ? 'Ocultar' : 'Ouvir'} Guia de Áudio
          </Button>
          {showAudio && (
            <div className="mt-4 p-4 bg-[#E3F2FD] rounded-xl">
              <p className="text-sm text-[#333333] text-center">
                🎧 Recurso de áudio será implementado em breve
              </p>
            </div>
          )}
        </div>

        {/* Marcar como Completo */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 shadow-lg border-2 border-green-200">
          <h2 className="text-xl font-bold text-[#333333] mb-4">Avaliação do Dia</h2>
          
          <div className="mb-6">
            <label className="block text-[#333333] font-medium mb-3">
              Como você avalia seu desempenho hoje? (1-10)
            </label>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-[#007BFF]">{note}</span>
              <Slider
                value={[note]}
                onValueChange={(value) => setNote(value[0])}
                min={1}
                max={10}
                step={1}
                className="flex-1"
              />
            </div>
            <div className="flex justify-between text-xs text-[#333333]/60 mt-2">
              <span>Fraco</span>
              <span>Excelente</span>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <Checkbox 
              id="complete"
              checked={isCompleted}
              onCheckedChange={(checked) => {
                if (checked) {
                  handleComplete();
                }
              }}
            />
            <label 
              htmlFor="complete"
              className="text-[#333333] font-medium cursor-pointer"
            >
              Marcar dia como completo
            </label>
          </div>

          {isCompleted && (
            <div className="bg-green-500 text-white rounded-xl p-4 flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6" />
              <div>
                <p className="font-bold">Dia Completo! 🎉</p>
                <p className="text-sm">Continue assim para alcançar o 1%</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
