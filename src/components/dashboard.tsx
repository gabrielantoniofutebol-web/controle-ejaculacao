'use client';

import { Trophy, Target, TrendingUp, Bell, Zap, Lock, Award } from 'lucide-react';
import { UserProgress } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { getBadges } from '@/lib/exercises-data';
import Link from 'next/link';

interface DashboardProps {
  progress: UserProgress;
  onRefresh: () => void;
}

export default function Dashboard({ progress, onRefresh }: DashboardProps) {
  const totalDays = 35;
  const completedPercentage = (progress.completedDays.length / totalDays) * 100;
  
  const allBadges = getBadges();
  const unlockedBadges = allBadges.filter(badge => 
    progress.badges.includes(badge.id)
  );

  const getPhaseInfo = () => {
    if (progress.currentPhase === 1) return { name: 'Fase 1: Fundamentos', color: 'from-blue-500 to-blue-600' };
    if (progress.currentPhase === 2) return { name: 'Fase 2: Controle Ativo', color: 'from-purple-500 to-purple-600' };
    return { name: 'Fase 3: Domínio Total', color: 'from-green-500 to-green-600' };
  };

  const phaseInfo = getPhaseInfo();

  return (
    <div className="min-h-screen p-4 md:p-6">
      {/* Header com progresso geral */}
      <div className="bg-gradient-to-br from-[#007BFF] to-[#0056B3] rounded-3xl p-6 md:p-8 mb-6 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-3 rounded-full">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">Bem-vindo ao 1%</h1>
              <p className="text-white/80 text-sm">Dia {progress.currentDay} de 35</p>
            </div>
          </div>
        </div>

        {/* Barra de progresso */}
        <div className="mb-3">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white/90 text-sm font-medium">Progresso Geral</span>
            <span className="text-white font-bold text-lg">{Math.round(completedPercentage)}%</span>
          </div>
          <Progress value={completedPercentage} className="h-3 bg-white/20" />
        </div>

        <p className="text-white/90 text-sm">
          {phaseInfo.name} em andamento
        </p>
      </div>

      {/* Cards principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Card Fase Atual */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className={`bg-gradient-to-br ${phaseInfo.color} p-3 rounded-xl`}>
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-[#333333]">Fase Atual</h3>
              <p className="text-sm text-[#333333]/60">Dia {progress.currentDay}</p>
            </div>
          </div>
          <p className="text-[#333333] mb-4">{phaseInfo.name}</p>
          <Button 
            className="w-full bg-[#007BFF] hover:bg-[#0056B3] text-white"
            onClick={() => {
              // Navegar para seção de fases será implementado
              const event = new CustomEvent('navigate-to-phases');
              window.dispatchEvent(event);
            }}
          >
            Ver Exercícios do Dia
          </Button>
        </div>

        {/* Card Tracker */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-[#333333]">Seu Progresso</h3>
              <p className="text-sm text-[#333333]/60">{progress.completedDays.length} dias completos</p>
            </div>
          </div>
          
          {/* Mini gráfico de notas */}
          <div className="mb-4">
            <p className="text-sm text-[#333333]/60 mb-2">Últimas notas:</p>
            <div className="flex gap-1">
              {progress.completedDays.slice(-7).map(day => {
                const note = progress.dailyNotes[day] || 0;
                return (
                  <div 
                    key={day}
                    className="flex-1 bg-[#E3F2FD] rounded-lg overflow-hidden"
                  >
                    <div 
                      className="bg-gradient-to-t from-[#007BFF] to-[#0056B3]"
                      style={{ height: `${(note / 10) * 100}%`, minHeight: '4px' }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>

          <Button 
            variant="outline" 
            className="w-full border-2 border-[#007BFF] text-[#007BFF] hover:bg-[#E3F2FD]"
            onClick={() => {
              const event = new CustomEvent('navigate-to-tracker');
              window.dispatchEvent(event);
            }}
          >
            Ver Relatório Completo
          </Button>
        </div>
      </div>

      {/* Badges/Gamificação */}
      <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Award className="w-6 h-6 text-[#007BFF]" />
          <h3 className="font-bold text-[#333333]">Suas Conquistas</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {allBadges.slice(0, 8).map(badge => {
            const isUnlocked = progress.badges.includes(badge.id);
            return (
              <div 
                key={badge.id}
                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  isUnlocked 
                    ? 'bg-gradient-to-br from-[#007BFF]/10 to-[#0056B3]/10 border-[#007BFF]' 
                    : 'bg-gray-50 border-gray-200 opacity-50'
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  {isUnlocked ? (
                    <Trophy className="w-8 h-8 text-[#007BFF] mb-2" />
                  ) : (
                    <Lock className="w-8 h-8 text-gray-400 mb-2" />
                  )}
                  <p className="text-xs font-bold text-[#333333] mb-1">{badge.title}</p>
                  <p className="text-xs text-[#333333]/60">{badge.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Notificações */}
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 shadow-lg mb-6">
        <div className="flex items-center gap-3 mb-3">
          <Bell className="w-6 h-6 text-white" />
          <h3 className="font-bold text-white">Notificações Diárias</h3>
        </div>
        <p className="text-white/90 text-sm mb-4">
          Receba lembretes para não perder nenhum dia de treino
        </p>
        <Button 
          className="w-full bg-white text-orange-600 hover:bg-white/90"
          onClick={() => {
            // Implementar lógica de notificações
            alert('Notificações ativadas! Você receberá lembretes diários.');
          }}
        >
          Ativar Notificações
        </Button>
      </div>

      {/* Upsell - Dicas Extras */}
      <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-3">
          <Zap className="w-6 h-6 text-white" />
          <h3 className="font-bold text-white">Acelere Seus Resultados</h3>
        </div>
        <p className="text-white/90 text-sm mb-4">
          Acesse fases avançadas, técnicas exclusivas e suporte personalizado
        </p>
        <Button 
          className="w-full bg-white text-purple-600 hover:bg-white/90 font-bold"
          onClick={() => {
            window.open('https://pay.kiwify.com.br/seu-link-aqui', '_blank');
          }}
        >
          Desbloquear por R$ 47
        </Button>
      </div>
    </div>
  );
}
