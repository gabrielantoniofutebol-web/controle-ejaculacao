'use client';

import { Trophy } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(prev => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#007BFF] via-[#0056B3] to-[#003d82] flex flex-col items-center justify-center">
      {/* Logo/Ícone */}
      <div className="mb-8 relative">
        <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-full border-4 border-white/30">
          <Trophy className="w-24 h-24 text-white" strokeWidth={2} />
        </div>
      </div>

      {/* Logo 1% Estilizado */}
      <div className="mb-6 text-white font-bold text-6xl tracking-wider">
        <span className="text-7xl">1</span>
        <span className="text-5xl">%</span>
      </div>

      {/* Mensagem Principal com efeito piscante */}
      <h1 
        className={`text-white font-bold text-3xl md:text-4xl text-center px-6 transition-opacity duration-500 ${
          fade ? 'opacity-100' : 'opacity-40'
        }`}
      >
        Bem-vindo ao 1%
      </h1>

      {/* Subtítulo */}
      <p className="text-white/80 text-lg mt-4 text-center px-6">
        Controle Absoluto: Domine Sua Ejaculação
      </p>

      {/* Loading indicator */}
      <div className="mt-12 flex gap-2">
        <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
  );
}
