'use client';

import { useState, useEffect } from 'react';
import { Home, Layers, TrendingUp, Gift } from 'lucide-react';
import { loadProgress } from '@/lib/storage';
import { UserProgress } from '@/lib/types';
import Dashboard from './dashboard';
import PhasesSection from './phases-section';
import TrackerSection from './tracker-section';
import BonusSection from './bonus-section';

export default function MainApp() {
  const [activeTab, setActiveTab] = useState<'home' | 'phases' | 'tracker' | 'bonus'>('home');
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    const loadedProgress = loadProgress();
    setProgress(loadedProgress);

    // Event listeners para navegação entre seções
    const handleNavigateToPhases = () => setActiveTab('phases');
    const handleNavigateToTracker = () => setActiveTab('tracker');
    
    window.addEventListener('navigate-to-phases', handleNavigateToPhases);
    window.addEventListener('navigate-to-tracker', handleNavigateToTracker);

    return () => {
      window.removeEventListener('navigate-to-phases', handleNavigateToPhases);
      window.removeEventListener('navigate-to-tracker', handleNavigateToTracker);
    };
  }, []);

  const refreshProgress = () => {
    const loadedProgress = loadProgress();
    setProgress(loadedProgress);
  };

  if (!progress) {
    return (
      <div className="min-h-screen bg-[#E3F2FD] flex items-center justify-center">
        <div className="text-[#333333] text-xl">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#E3F2FD] pb-20">
      {/* Conteúdo principal */}
      <div className="max-w-7xl mx-auto">
        {activeTab === 'home' && <Dashboard progress={progress} onRefresh={refreshProgress} />}
        {activeTab === 'phases' && <PhasesSection progress={progress} onRefresh={refreshProgress} />}
        {activeTab === 'tracker' && <TrackerSection progress={progress} />}
        {activeTab === 'bonus' && <BonusSection />}
      </div>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-[#007BFF]/20 shadow-2xl z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-around items-center h-16">
            <button
              onClick={() => setActiveTab('home')}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-all duration-300 ${
                activeTab === 'home' 
                  ? 'text-[#007BFF]' 
                  : 'text-[#333333]/40 hover:text-[#333333]/70'
              }`}
            >
              <Home className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">Home</span>
            </button>

            <button
              onClick={() => setActiveTab('phases')}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-all duration-300 ${
                activeTab === 'phases' 
                  ? 'text-[#007BFF]' 
                  : 'text-[#333333]/40 hover:text-[#333333]/70'
              }`}
            >
              <Layers className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">Fases</span>
            </button>

            <button
              onClick={() => setActiveTab('tracker')}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-all duration-300 ${
                activeTab === 'tracker' 
                  ? 'text-[#007BFF]' 
                  : 'text-[#333333]/40 hover:text-[#333333]/70'
              }`}
            >
              <TrendingUp className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">Progresso</span>
            </button>

            <button
              onClick={() => setActiveTab('bonus')}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-all duration-300 ${
                activeTab === 'bonus' 
                  ? 'text-[#007BFF]' 
                  : 'text-[#333333]/40 hover:text-[#333333]/70'
              }`}
            >
              <Gift className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">Bônus</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
