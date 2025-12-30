'use client';

import { TrendingUp, Download, Award } from 'lucide-react';
import { UserProgress } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface TrackerSectionProps {
  progress: UserProgress;
}

export default function TrackerSection({ progress }: TrackerSectionProps) {
  // Preparar dados para o gráfico
  const chartData = progress.completedDays.map(day => ({
    day: `Dia ${day}`,
    nota: progress.dailyNotes[day] || 0,
  }));

  const averageNote = progress.completedDays.length > 0
    ? progress.completedDays.reduce((sum, day) => sum + (progress.dailyNotes[day] || 0), 0) / progress.completedDays.length
    : 0;

  const getPhaseProgress = (phase: number) => {
    const phaseDays = phase === 1 ? [1, 7] : phase === 2 ? [8, 21] : [22, 35];
    const completed = progress.completedDays.filter(
      day => day >= phaseDays[0] && day <= phaseDays[1]
    ).length;
    const total = phaseDays[1] - phaseDays[0] + 1;
    return { completed, total, percentage: (completed / total) * 100 };
  };

  const phase1Progress = getPhaseProgress(1);
  const phase2Progress = getPhaseProgress(2);
  const phase3Progress = getPhaseProgress(3);

  const exportReport = () => {
    const reportText = `
RELATÓRIO DE PROGRESSO - CONTROLE ABSOLUTO
==========================================

Dias Completados: ${progress.completedDays.length}/35
Nota Média: ${averageNote.toFixed(1)}/10
Fase Atual: ${progress.currentPhase}

PROGRESSO POR FASE:
- Fase 1 (Fundamentos): ${phase1Progress.completed}/${phase1Progress.total} dias (${phase1Progress.percentage.toFixed(0)}%)
- Fase 2 (Controle Ativo): ${phase2Progress.completed}/${phase2Progress.total} dias (${phase2Progress.percentage.toFixed(0)}%)
- Fase 3 (Domínio Total): ${phase3Progress.completed}/${phase3Progress.total} dias (${phase3Progress.percentage.toFixed(0)}%)

NOTAS DIÁRIAS:
${progress.completedDays.map(day => `Dia ${day}: ${progress.dailyNotes[day]}/10`).join('\n')}

CONQUISTAS DESBLOQUEADAS:
${progress.badges.map(badge => `✓ ${badge}`).join('\n')}

Gerado em: ${new Date().toLocaleDateString('pt-BR')}
    `.trim();

    const blob = new Blob([reportText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `relatorio-controle-absoluto-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen p-4 md:p-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#007BFF] to-[#0056B3] rounded-3xl p-6 mb-6 shadow-2xl">
        <div className="flex items-center gap-3 mb-2">
          <TrendingUp className="w-8 h-8 text-white" />
          <h1 className="text-3xl font-bold text-white">Seu Progresso</h1>
        </div>
        <p className="text-white/90">Acompanhe sua evolução ao longo do programa</p>
      </div>

      {/* Estatísticas Gerais */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-2xl p-4 shadow-lg">
          <p className="text-[#333333]/60 text-sm mb-1">Dias Completos</p>
          <p className="text-3xl font-bold text-[#007BFF]">{progress.completedDays.length}</p>
          <p className="text-xs text-[#333333]/60">de 35 dias</p>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-lg">
          <p className="text-[#333333]/60 text-sm mb-1">Nota Média</p>
          <p className="text-3xl font-bold text-green-600">{averageNote.toFixed(1)}</p>
          <p className="text-xs text-[#333333]/60">de 10</p>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-lg">
          <p className="text-[#333333]/60 text-sm mb-1">Fase Atual</p>
          <p className="text-3xl font-bold text-purple-600">{progress.currentPhase}</p>
          <p className="text-xs text-[#333333]/60">de 3 fases</p>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-lg">
          <p className="text-[#333333]/60 text-sm mb-1">Conquistas</p>
          <p className="text-3xl font-bold text-orange-600">{progress.badges.length}</p>
          <p className="text-xs text-[#333333]/60">badges</p>
        </div>
      </div>

      {/* Gráfico de Progresso */}
      <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
        <h2 className="text-xl font-bold text-[#333333] mb-4">Evolução das Notas</h2>
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E3F2FD" />
              <XAxis 
                dataKey="day" 
                stroke="#333333"
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                domain={[0, 10]}
                stroke="#333333"
                style={{ fontSize: '12px' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '2px solid #007BFF',
                  borderRadius: '12px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="nota" 
                stroke="#007BFF" 
                strokeWidth={3}
                dot={{ fill: '#007BFF', r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-64 flex items-center justify-center bg-[#E3F2FD] rounded-xl">
            <p className="text-[#333333]/60">Complete alguns dias para ver seu progresso</p>
          </div>
        )}
      </div>

      {/* Progresso por Fase */}
      <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
        <h2 className="text-xl font-bold text-[#333333] mb-4">Progresso por Fase</h2>
        
        <div className="space-y-4">
          {/* Fase 1 */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-[#333333]">Fase 1: Fundamentos</span>
              <span className="text-sm text-[#333333]/60">
                {phase1Progress.completed}/{phase1Progress.total} dias
              </span>
            </div>
            <div className="w-full bg-[#E3F2FD] rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-full transition-all duration-500"
                style={{ width: `${phase1Progress.percentage}%` }}
              ></div>
            </div>
          </div>

          {/* Fase 2 */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-[#333333]">Fase 2: Controle Ativo</span>
              <span className="text-sm text-[#333333]/60">
                {phase2Progress.completed}/{phase2Progress.total} dias
              </span>
            </div>
            <div className="w-full bg-[#E3F2FD] rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-purple-500 to-purple-600 h-full transition-all duration-500"
                style={{ width: `${phase2Progress.percentage}%` }}
              ></div>
            </div>
          </div>

          {/* Fase 3 */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-[#333333]">Fase 3: Domínio Total</span>
              <span className="text-sm text-[#333333]/60">
                {phase3Progress.completed}/{phase3Progress.total} dias
              </span>
            </div>
            <div className="w-full bg-[#E3F2FD] rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-green-500 to-green-600 h-full transition-all duration-500"
                style={{ width: `${phase3Progress.percentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Relatório de Fase */}
      <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 shadow-lg border-2 border-orange-200 mb-6">
        <h2 className="text-xl font-bold text-[#333333] mb-3 flex items-center gap-2">
          <Award className="w-6 h-6 text-orange-600" />
          Mini-Relatório
        </h2>
        <p className="text-[#333333] mb-4">
          Preencha ao final de cada fase para acompanhar sua evolução
        </p>
        
        <div className="space-y-3">
          <div className="bg-white rounded-xl p-4">
            <label className="block text-sm font-medium text-[#333333] mb-2">
              Nota de força do músculo PC (1-10):
            </label>
            <input 
              type="number" 
              min="1" 
              max="10"
              placeholder="Ex: 7"
              className="w-full p-3 border-2 border-[#E3F2FD] rounded-lg focus:border-[#007BFF] focus:outline-none"
            />
          </div>

          <div className="bg-white rounded-xl p-4">
            <label className="block text-sm font-medium text-[#333333] mb-2">
              Principais dificuldades:
            </label>
            <textarea 
              placeholder="Descreva os desafios que enfrentou..."
              rows={3}
              className="w-full p-3 border-2 border-[#E3F2FD] rounded-lg focus:border-[#007BFF] focus:outline-none resize-none"
            />
          </div>

          <div className="bg-white rounded-xl p-4">
            <label className="block text-sm font-medium text-[#333333] mb-2">
              Observações e vitórias:
            </label>
            <textarea 
              placeholder="O que funcionou bem? Quais foram suas conquistas?"
              rows={3}
              className="w-full p-3 border-2 border-[#E3F2FD] rounded-lg focus:border-[#007BFF] focus:outline-none resize-none"
            />
          </div>
        </div>
      </div>

      {/* Exportar Relatório */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-[#333333] mb-3">Exportar Progresso</h2>
        <p className="text-[#333333]/70 text-sm mb-4">
          Baixe um relatório completo do seu progresso para acompanhamento pessoal
        </p>
        <Button
          onClick={exportReport}
          className="w-full bg-[#007BFF] hover:bg-[#0056B3] text-white"
        >
          <Download className="w-4 h-4 mr-2" />
          Baixar Relatório em TXT
        </Button>
      </div>
    </div>
  );
}
