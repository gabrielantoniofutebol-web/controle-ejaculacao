'use client';

import { Gift, Volume2, Calendar, MessageCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function BonusSection() {
  const [selectedAudio, setSelectedAudio] = useState<string | null>(null);

  const audios = [
    {
      id: 'pre-sex',
      title: 'Respiração Pré-Intimidade',
      duration: '3 min',
      description: 'Técnica de respiração para fazer antes do sexo, aumentando controle e presença',
    },
    {
      id: 'deep-relax',
      title: 'Relaxamento Profundo',
      duration: '5 min',
      description: 'Meditação guiada para relaxamento total do corpo e mente',
    },
    {
      id: 'confidence',
      title: 'Afirmações de Confiança',
      duration: '4 min',
      description: 'Afirmações positivas para fortalecer confiança e autoestima sexual',
    },
  ];

  const testimonials = [
    {
      text: 'Em 14 dias, já conseguia durar o dobro do tempo. Minha confiança voltou!',
      author: 'João, 28 anos',
      rating: 5,
    },
    {
      text: 'As técnicas de respiração mudaram completamente minha performance. Recomendo!',
      author: 'Carlos, 35 anos',
      rating: 5,
    },
    {
      text: 'Finalmente encontrei algo que funciona de verdade. Valeu cada dia de treino.',
      author: 'Pedro, 31 anos',
      rating: 5,
    },
    {
      text: 'Meu relacionamento melhorou muito. Estou mais presente e confiante.',
      author: 'Lucas, 26 anos',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen p-4 md:p-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-6 mb-6 shadow-2xl">
        <div className="flex items-center gap-3 mb-2">
          <Gift className="w-8 h-8 text-white" />
          <h1 className="text-3xl font-bold text-white">Conteúdo Bônus</h1>
        </div>
        <p className="text-white/90">Recursos extras para potencializar seus resultados</p>
      </div>

      {/* Áudios Extras */}
      <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
        <h2 className="text-xl font-bold text-[#333333] mb-4 flex items-center gap-2">
          <Volume2 className="w-6 h-6 text-[#007BFF]" />
          Áudios Guiados Extras
        </h2>
        
        <div className="space-y-3">
          {audios.map(audio => (
            <div 
              key={audio.id}
              className="border-2 border-[#E3F2FD] rounded-xl p-4 hover:border-[#007BFF] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="font-bold text-[#333333] mb-1">{audio.title}</h3>
                  <p className="text-sm text-[#333333]/70 mb-2">{audio.description}</p>
                  <span className="text-xs text-[#007BFF] font-medium">{audio.duration}</span>
                </div>
              </div>
              <Button
                onClick={() => setSelectedAudio(audio.id === selectedAudio ? null : audio.id)}
                className="w-full bg-[#007BFF] hover:bg-[#0056B3] text-white mt-2"
              >
                {selectedAudio === audio.id ? 'Pausar' : 'Reproduzir'} Áudio
              </Button>
              {selectedAudio === audio.id && (
                <div className="mt-3 p-3 bg-[#E3F2FD] rounded-lg">
                  <p className="text-sm text-[#333333] text-center">
                    🎧 Player de áudio será implementado em breve
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Guia de Manutenção */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 shadow-lg border-2 border-green-200 mb-6">
        <h2 className="text-xl font-bold text-[#333333] mb-4 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-green-600" />
          Guia de Manutenção Pós-35 Dias
        </h2>
        
        <div className="bg-white rounded-xl p-4 mb-4">
          <h3 className="font-bold text-[#333333] mb-3">Rotina Semanal Recomendada:</h3>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <p className="font-medium text-[#333333]">Segunda, Quarta e Sexta</p>
                <p className="text-sm text-[#333333]/70">
                  20 minutos de Kegels + Respiração (rotina completa)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <p className="font-medium text-[#333333]">Terça e Quinta</p>
                <p className="text-sm text-[#333333]/70">
                  10 minutos de mindfulness e meditação
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <p className="font-medium text-[#333333]">Diariamente</p>
                <p className="text-sm text-[#333333]/70">
                  5 minutos de respiração 4-7-8 antes de dormir
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div>
                <p className="font-medium text-[#333333]">Antes da intimidade</p>
                <p className="text-sm text-[#333333]/70">
                  3 minutos de respiração pré-intimidade (áudio bônus)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4">
          <h3 className="font-bold text-[#333333] mb-2">💡 Dicas Importantes:</h3>
          <ul className="space-y-2 text-sm text-[#333333]/80">
            <li>• Mantenha a consistência - não abandone a prática</li>
            <li>• Continue registrando seu progresso mensalmente</li>
            <li>• Pratique técnicas durante situações reais</li>
            <li>• Revise exercícios específicos se sentir necessidade</li>
            <li>• Celebre suas conquistas e evolução contínua</li>
          </ul>
        </div>
      </div>

      {/* Depoimentos */}
      <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
        <h2 className="text-xl font-bold text-[#333333] mb-4 flex items-center gap-2">
          <MessageCircle className="w-6 h-6 text-[#007BFF]" />
          Depoimentos Reais
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-[#E3F2FD] rounded-xl p-4 border-2 border-[#007BFF]/20"
            >
              <div className="flex gap-1 mb-2">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-[#333333] italic mb-3">"{testimonial.text}"</p>
              <p className="text-sm text-[#333333]/60 font-medium">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Chat de Suporte */}
      <div className="bg-gradient-to-br from-[#007BFF] to-[#0056B3] rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
          <MessageCircle className="w-6 h-6" />
          Suporte e Dúvidas
        </h2>
        <p className="text-white/90 text-sm mb-4">
          Tire suas dúvidas sobre o programa e técnicas
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
          <p className="text-white text-sm mb-2 font-medium">Perguntas Frequentes:</p>
          <ul className="space-y-2 text-sm text-white/90">
            <li>• Como localizar o músculo PC corretamente?</li>
            <li>• Quantas vezes por dia devo praticar?</li>
            <li>• É normal sentir cansaço no início?</li>
            <li>• Quando verei os primeiros resultados?</li>
            <li>• Posso pular dias ou devo ser rigoroso?</li>
          </ul>
        </div>

        <Button
          className="w-full bg-white text-[#007BFF] hover:bg-white/90 font-bold"
          onClick={() => {
            alert('Chat de suporte será implementado em breve! Por enquanto, revise os exercícios e guias disponíveis.');
          }}
        >
          Abrir Chat de Suporte
        </Button>
      </div>
    </div>
  );
}
