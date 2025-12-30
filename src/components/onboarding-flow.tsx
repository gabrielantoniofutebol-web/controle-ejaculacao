'use client';

import { useState } from 'react';
import { ChevronRight, ChevronLeft, Trophy, Target, Brain, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { QuizAnswers } from '@/lib/types';
import { saveQuizResults, setOnboardingComplete, initializeProgress } from '@/lib/storage';

interface OnboardingFlowProps {
  onComplete: () => void;
}

export default function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  // ✅ TODOS OS HOOKS NO TOPO (antes de qualquer condicional)
  const [step, setStep] = useState(1);
  const [quizAnswers, setQuizAnswers] = useState<Partial<QuizAnswers>>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleQuizAnswer = (question: keyof QuizAnswers, answer: any) => {
    setQuizAnswers(prev => ({ ...prev, [question]: answer }));
  };

  const calculatePlanType = (): 'intensive' | 'standard' => {
    const { frequency, anxiety, triedBefore } = quizAnswers;
    
    // Lógica: alta dor = plano intensivo
    if (frequency === 'always' && anxiety === 'high') return 'intensive';
    if (frequency === 'always' || anxiety === 'high') return 'intensive';
    if (frequency === 'sometimes' && !triedBefore) return 'intensive';
    
    return 'standard';
  };

  const getPlanDescription = (): string => {
    const planType = calculatePlanType();
    const { focus } = quizAnswers;
    
    if (planType === 'intensive') {
      if (focus === 'mental') {
        return 'Seu plano: Foco intensivo em mindfulness e controle mental';
      }
      return 'Seu plano: Foco intensivo em técnicas físicas e respiração';
    }
    
    if (focus === 'mental') {
      return 'Seu plano: Foco equilibrado com ênfase em mindfulness';
    }
    return 'Seu plano: Foco equilibrado em técnicas físicas e mentais';
  };

  const handleStartProgram = () => {
    const planType = calculatePlanType();
    const fullAnswers = quizAnswers as QuizAnswers;
    
    saveQuizResults(fullAnswers);
    initializeProgress(planType, fullAnswers);
    setOnboardingComplete();
    onComplete();
  };

  // Definir perguntas do quiz (constante)
  const questions = [
    {
      id: 'frequency',
      question: '1. Com que frequência você enfrenta ejaculação precoce?',
      options: [
        { value: 'always', label: 'Sempre ou quase sempre' },
        { value: 'sometimes', label: 'Às vezes' },
        { value: 'rarely', label: 'Raramente' },
      ]
    },
    {
      id: 'anxiety',
      question: '2. A ansiedade atrapalha seu desempenho?',
      options: [
        { value: 'high', label: 'Muito - sinto muita pressão' },
        { value: 'medium', label: 'Médio - às vezes me preocupo' },
        { value: 'low', label: 'Pouco - consigo relaxar' },
      ]
    },
    {
      id: 'triedBefore',
      question: '3. Já tentou técnicas de controle antes?',
      options: [
        { value: true, label: 'Sim, já tentei' },
        { value: false, label: 'Não, é minha primeira vez' },
      ]
    },
    {
      id: 'focus',
      question: '4. Qual abordagem prefere?',
      options: [
        { value: 'technical', label: 'Técnico - exercícios físicos e práticos' },
        { value: 'mental', label: 'Mental - mindfulness e controle mental' },
      ]
    },
    {
      id: 'inRelationship',
      question: '5. Você está em um relacionamento?',
      options: [
        { value: true, label: 'Sim' },
        { value: false, label: 'Não' },
      ]
    },
    {
      id: 'timeExpectation',
      question: '6. Qual sua expectativa de tempo para resultados?',
      options: [
        { value: 'days', label: 'Dias - quero resultados rápidos' },
        { value: 'weeks', label: 'Semanas - posso ser paciente' },
        { value: 'months', label: 'Meses - foco em mudança duradoura' },
      ]
    },
  ];

  // Tela 1: Boas-vindas
  if (step === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#E3F2FD] to-white flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Ícone */}
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-br from-[#007BFF] to-[#0056B3] p-6 rounded-full">
              <Trophy className="w-16 h-16 text-white" />
            </div>
          </div>

          {/* Título */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#333333] text-center mb-4">
            Bem-vindo ao 1%
          </h1>

          {/* Subtítulo */}
          <p className="text-xl text-[#333333]/70 text-center mb-8">
            Controle Absoluto: Domine Sua Ejaculação
          </p>

          {/* Mensagem principal */}
          <div className="bg-[#E3F2FD] rounded-2xl p-6 mb-8">
            <p className="text-lg text-[#333333] text-center leading-relaxed">
              <span className="font-bold text-[#007BFF]">Recupere seu controle em 35 dias.</span>
              <br />
              Comece com um quiz rápido para personalizar seu plano.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex flex-col items-center text-center p-4">
              <Target className="w-10 h-10 text-[#007BFF] mb-2" />
              <p className="text-sm text-[#333333] font-medium">3 Fases Progressivas</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <Brain className="w-10 h-10 text-[#007BFF] mb-2" />
              <p className="text-sm text-[#333333] font-medium">Técnicas Comprovadas</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <Heart className="w-10 h-10 text-[#007BFF] mb-2" />
              <p className="text-sm text-[#333333] font-medium">Resultados Reais</p>
            </div>
          </div>

          {/* Botão */}
          <Button 
            onClick={() => setStep(2)}
            className="w-full bg-[#0056B3] hover:bg-[#003d82] text-white text-lg py-6 rounded-xl transition-all duration-300 hover:scale-105"
          >
            Começar Quiz
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    );
  }

  // Tela 2: Quiz Interativo
  if (step === 2) {
    const question = questions[currentQuestion];
    const isAnswered = quizAnswers[question.id as keyof QuizAnswers] !== undefined;

    return (
      <div className="min-h-screen bg-gradient-to-br from-[#E3F2FD] to-white flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-[#333333]/60">Pergunta {currentQuestion + 1} de {questions.length}</span>
              <span className="text-sm font-medium text-[#007BFF]">{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="w-full bg-[#E3F2FD] rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-[#007BFF] to-[#0056B3] h-2 rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Pergunta */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#333333] mb-8">
            {question.question}
          </h2>

          {/* Opções */}
          <RadioGroup 
            value={quizAnswers[question.id as keyof QuizAnswers]?.toString()}
            onValueChange={(value) => {
              const parsedValue = value === 'true' ? true : value === 'false' ? false : value;
              handleQuizAnswer(question.id as keyof QuizAnswers, parsedValue);
            }}
            className="space-y-4 mb-8"
          >
            {question.options.map((option, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 p-4 rounded-xl border-2 border-[#E3F2FD] hover:border-[#007BFF] transition-all duration-300 cursor-pointer hover:bg-[#E3F2FD]/30"
              >
                <RadioGroupItem value={option.value.toString()} id={`option-${index}`} />
                <Label 
                  htmlFor={`option-${index}`}
                  className="flex-1 cursor-pointer text-[#333333] font-medium"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>

          {/* Botões de navegação */}
          <div className="flex gap-4">
            {currentQuestion > 0 && (
              <Button
                onClick={() => setCurrentQuestion(prev => prev - 1)}
                variant="outline"
                className="flex-1 py-6 rounded-xl border-2 border-[#007BFF] text-[#007BFF] hover:bg-[#E3F2FD]"
              >
                <ChevronLeft className="mr-2 w-5 h-5" />
                Anterior
              </Button>
            )}
            
            {currentQuestion < questions.length - 1 ? (
              <Button
                onClick={() => setCurrentQuestion(prev => prev + 1)}
                disabled={!isAnswered}
                className="flex-1 bg-[#0056B3] hover:bg-[#003d82] text-white py-6 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Próxima
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            ) : (
              <Button
                onClick={() => setStep(3)}
                disabled={!isAnswered}
                className="flex-1 bg-[#0056B3] hover:bg-[#003d82] text-white py-6 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Ver Resultado
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Tela 3: Resultado Personalizado
  if (step === 3) {
    const planDescription = getPlanDescription();
    const planType = calculatePlanType();

    return (
      <div className="min-h-screen bg-gradient-to-br from-[#E3F2FD] to-white flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Ícone de sucesso */}
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-br from-[#007BFF] to-[#0056B3] p-6 rounded-full animate-pulse">
              <Trophy className="w-16 h-16 text-white" />
            </div>
          </div>

          {/* Título */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#333333] text-center mb-4">
            Seu Plano Está Pronto!
          </h1>

          {/* Resultado personalizado */}
          <div className="bg-gradient-to-br from-[#007BFF] to-[#0056B3] rounded-2xl p-6 mb-8 text-white">
            <p className="text-xl font-bold text-center mb-2">
              {planDescription}
            </p>
            <p className="text-center text-white/90">
              {planType === 'intensive' 
                ? 'Programa intensivo com foco em resultados rápidos e consistentes'
                : 'Programa equilibrado para desenvolvimento gradual e sustentável'
              }
            </p>
          </div>

          {/* Informações do programa */}
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4 p-4 bg-[#E3F2FD] rounded-xl">
              <div className="bg-[#007BFF] p-2 rounded-lg">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#333333] mb-1">3 Fases Progressivas</h3>
                <p className="text-sm text-[#333333]/70">Fundamentos (7 dias) → Controle Ativo (14 dias) → Domínio Total (14 dias)</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-[#E3F2FD] rounded-xl">
              <div className="bg-[#007BFF] p-2 rounded-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#333333] mb-1">Técnicas Integradas</h3>
                <p className="text-sm text-[#333333]/70">Exercícios de Kegel, respiração avançada e mindfulness</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-[#E3F2FD] rounded-xl">
              <div className="bg-[#007BFF] p-2 rounded-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#333333] mb-1">Acompanhamento Diário</h3>
                <p className="text-sm text-[#333333]/70">Tracker de progresso, badges e notificações motivacionais</p>
              </div>
            </div>
          </div>

          {/* Botão iniciar */}
          <Button
            onClick={handleStartProgram}
            className="w-full bg-gradient-to-r from-[#007BFF] to-[#0056B3] hover:from-[#0056B3] hover:to-[#003d82] text-white text-lg py-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Iniciar Programa Agora
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>

          <p className="text-center text-sm text-[#333333]/60 mt-4">
            Seu progresso será salvo automaticamente
          </p>
        </div>
      </div>
    );
  }

  return null;
}
