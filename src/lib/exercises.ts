// Dados dos exercícios diários para as 3 fases do programa

import { DayExercise } from './types';

export const exercises: DayExercise[] = [
  // FASE 1: FUNDAMENTOS (Dias 1-7)
  {
    day: 1,
    phase: 1,
    title: 'Localização do Músculo PC',
    kegels: 'Identifique o músculo PC: durante a urinação, tente parar o fluxo. O músculo usado é o PC. Pratique 3 séries de 10 contrações rápidas (1s contraído, 1s relaxado).',
    breathing: 'Respiração diafragmática básica: deite-se, coloque uma mão no peito e outra na barriga. Inspire pelo nariz (4s) expandindo a barriga, expire pela boca (6s). Repita por 5 minutos.',
    mindfulness: 'Escaneamento corporal: sente-se confortavelmente, feche os olhos. Observe sensações do corpo da cabeça aos pés por 5 minutos, sem julgamento.',
    optional: 'Anote em um diário: como se sentiu ao identificar o músculo PC? Houve dificuldade?',
    duration: 15,
    imageUrl: 'https://st5.depositphotos.com/3900811/61930/v/450/depositphotos_619301320-stock-illustration-pelvic-floor-muscles-anatomy-male.jpg'
  },
  {
    day: 2,
    phase: 1,
    title: 'Fortalecimento Inicial',
    kegels: 'Contrações sustentadas: 3 séries de 5 contrações (segure por 3s, relaxe por 3s). Foque na qualidade, não na quantidade.',
    breathing: 'Respiração 4-7-8: inspire por 4s, segure por 7s, expire por 8s. Repita 5 ciclos. Ajuda a reduzir ansiedade.',
    mindfulness: 'Atenção plena na respiração: sente-se, foque apenas na respiração por 7 minutos. Quando a mente divagar, volte gentilmente.',
    optional: 'Pratique a respiração 4-7-8 antes de dormir para melhorar o sono.',
    duration: 18,
    imageUrl: 'https://i.ytimg.com/vi/y1HTRArPo_0/maxresdefault.jpg'
  },
  {
    day: 3,
    phase: 1,
    title: 'Coordenação Respiração-Kegel',
    kegels: 'Combine: inspire e contraia o PC por 3s, expire e relaxe por 3s. Faça 3 séries de 8 repetições.',
    breathing: 'Respiração quadrada: inspire 4s, segure 4s, expire 4s, segure 4s. Repita por 6 minutos.',
    mindfulness: 'Observe pensamentos: durante 8 minutos, note pensamentos que surgem sem se apegar. Imagine-os como nuvens passando.',
    optional: 'Teste a coordenação durante uma atividade diária (ex: caminhando).',
    duration: 20,
    imageUrl: 'https://i.ytimg.com/vi/DgsLVZYN8Xg/maxresdefault.jpg'
  },
  {
    day: 4,
    phase: 1,
    title: 'Aumento de Resistência',
    kegels: 'Contrações longas: 3 séries de 5 contrações (segure por 5s, relaxe por 5s). Sinta o músculo trabalhando.',
    breathing: 'Respiração alternada: inspire pela narina esquerda (4s), expire pela direita (6s). Alterne por 7 minutos.',
    mindfulness: 'Body scan focado: escaneie apenas a região pélvica por 10 minutos. Note tensões e relaxe conscientemente.',
    optional: 'Pratique Kegels em diferentes posições: sentado, em pé, deitado.',
    duration: 22,
    imageUrl: 'https://drconsulta.com/conteudo/wp-content/uploads/2023/12/dr.consulta-exercicios-de-kegel-para-homens-1024x576.webp'
  },
  {
    day: 5,
    phase: 1,
    title: 'Controle Consciente',
    kegels: 'Contrações variadas: 2 séries de 10 rápidas (1s cada) + 2 séries de 5 longas (7s cada). Descanse 30s entre séries.',
    breathing: 'Respiração profunda com pausa: inspire 5s, segure 10s, expire 7s. Repita 8 vezes.',
    mindfulness: 'Meditação guiada: use áudio de 10 minutos focando em relaxamento total do corpo.',
    optional: 'Anote: qual tipo de contração (rápida ou longa) você sente mais controle?',
    duration: 25,
    imageUrl: 'https://st5.depositphotos.com/3900811/61930/v/450/depositphotos_619301320-stock-illustration-pelvic-floor-muscles-anatomy-male.jpg'
  },
  {
    day: 6,
    phase: 1,
    title: 'Integração Mental',
    kegels: 'Kegels com visualização: ao contrair, visualize energia subindo pela coluna. 3 séries de 8 contrações (5s cada).',
    breathing: 'Respiração com contagem regressiva: inspire 6s, expire 8s. Conte de 10 a 1 mentalmente.',
    mindfulness: 'Mindfulness sensorial: foque em sensações físicas durante 12 minutos. Note calor, frio, pressão.',
    optional: 'Pratique visualização antes de dormir: imagine-se com controle total.',
    duration: 27,
    imageUrl: 'https://i.ytimg.com/vi/DgsLVZYN8Xg/maxresdefault.jpg'
  },
  {
    day: 7,
    phase: 1,
    title: 'Revisão da Fase 1',
    kegels: 'Teste de força: 3 séries de 10 contrações máximas (segure o máximo que conseguir, até 10s). Anote o tempo.',
    breathing: 'Respiração livre: escolha sua técnica favorita da semana e pratique por 10 minutos.',
    mindfulness: 'Reflexão guiada: medite por 15 minutos refletindo sobre o progresso da semana.',
    optional: 'Preencha o mini-relatório: nota de 1-10 para força do PC, controle respiratório e foco mental.',
    duration: 30,
    imageUrl: 'https://drconsulta.com/conteudo/wp-content/uploads/2023/12/dr.consulta-exercicios-de-kegel-para-homens-1024x576.webp'
  },

  // FASE 2: CONTROLE ATIVO (Dias 8-21)
  {
    day: 8,
    phase: 2,
    title: 'Técnica Start-Stop Básica',
    kegels: '4 séries de 10 contrações (5s contraído, 3s relaxado). Aumente a intensidade.',
    breathing: 'Respiração sincronizada: durante autoestimulação, pratique respiração 4-7-8 para manter calma.',
    mindfulness: 'Atenção plena nas sensações: durante 10 minutos, observe sensações corporais sem reagir.',
    optional: 'Prática Start-Stop: durante autoestimulação, pare ao atingir 7/10 de excitação. Respire fundo e relaxe o PC.',
    duration: 25,
    imageUrl: 'https://i.ytimg.com/vi/y1HTRArPo_0/maxresdefault.jpg'
  },
  {
    day: 9,
    phase: 2,
    title: 'Controle de Excitação',
    kegels: 'Kegels reversos: contraia ao inspirar, relaxe ao expirar. 3 séries de 12 repetições.',
    breathing: 'Respiração de emergência: pratique respiração rápida e profunda para reduzir excitação instantaneamente.',
    mindfulness: 'Observação de pensamentos excitantes: note quando surgem, aceite-os sem reagir por 12 minutos.',
    optional: 'Durante prática sexual, use Kegel reverso ao sentir proximidade do orgasmo.',
    duration: 28,
    imageUrl: 'https://st5.depositphotos.com/3900811/61930/v/450/depositphotos_619301320-stock-illustration-pelvic-floor-muscles-anatomy-male.jpg'
  },
  {
    day: 10,
    phase: 2,
    title: 'Técnica de Compressão',
    kegels: 'Contrações isométricas: segure contração máxima por 15s, descanse 10s. Repita 5 vezes.',
    breathing: 'Respiração abdominal profunda: 8 minutos focando em expandir totalmente o abdômen.',
    mindfulness: 'Meditação de aceitação: aceite sensações sem julgamento por 15 minutos.',
    optional: 'Aprenda a técnica de compressão: pressione a base do pênis ao sentir proximidade do orgasmo.',
    duration: 30,
    imageUrl: 'https://drconsulta.com/conteudo/wp-content/uploads/2023/12/dr.consulta-exercicios-de-kegel-para-homens-1024x576.webp'
  },
  {
    day: 11,
    phase: 2,
    title: 'Resistência Avançada',
    kegels: '5 séries de 8 contrações (8s contraído, 4s relaxado). Foque em contrações fortes.',
    breathing: 'Respiração triangular: inspire 5s, segure 5s, expire 5s. Repita por 10 minutos.',
    mindfulness: 'Body scan durante excitação: pratique escaneamento corporal enquanto levemente excitado.',
    optional: 'Combine Start-Stop com compressão durante prática.',
    duration: 32,
    imageUrl: 'https://i.ytimg.com/vi/DgsLVZYN8Xg/maxresdefault.jpg'
  },
  {
    day: 12,
    phase: 2,
    title: 'Controle Mental Avançado',
    kegels: 'Kegels com distração: faça 4 séries de 10 enquanto lê ou assiste algo.',
    breathing: 'Respiração consciente contínua: mantenha respiração profunda por 12 minutos sem interrupção.',
    mindfulness: 'Meditação de desapego: observe excitação como observador externo por 15 minutos.',
    optional: 'Pratique técnicas durante situações de maior excitação.',
    duration: 35,
    imageUrl: 'https://i.ytimg.com/vi/y1HTRArPo_0/maxresdefault.jpg'
  },
  {
    day: 13,
    phase: 2,
    title: 'Integração Completa',
    kegels: 'Circuito completo: 3 séries de (10 rápidas + 5 longas + 3 máximas).',
    breathing: 'Respiração adaptativa: alterne entre técnicas conforme necessidade por 10 minutos.',
    mindfulness: 'Mindfulness em movimento: pratique atenção plena durante atividade física por 20 minutos.',
    optional: 'Teste todas as técnicas durante prática sexual real ou simulada.',
    duration: 38,
    imageUrl: 'https://st5.depositphotos.com/3900811/61930/v/450/depositphotos_619301320-stock-illustration-pelvic-floor-muscles-anatomy-male.jpg'
  },
  {
    day: 14,
    phase: 2,
    title: 'Revisão Fase 2 - Parte 1',
    kegels: 'Teste de resistência: quantas contrações de 10s você consegue fazer? Anote o número.',
    breathing: 'Respiração de recuperação: pratique técnica favorita por 15 minutos.',
    mindfulness: 'Reflexão profunda: medite sobre o progresso e desafios por 20 minutos.',
    optional: 'Preencha mini-relatório: avalie controle durante excitação (1-10).',
    duration: 40,
    imageUrl: 'https://drconsulta.com/conteudo/wp-content/uploads/2023/12/dr.consulta-exercicios-de-kegel-para-homens-1024x576.webp'
  },
  {
    day: 15,
    phase: 2,
    title: 'Técnica Squeeze Avançada',
    kegels: '4 séries de 12 contrações (7s contraído, 5s relaxado) com foco em intensidade máxima.',
    breathing: 'Respiração de controle: inspire 6s, segure 12s, expire 8s. Repita 10 vezes.',
    mindfulness: 'Meditação de controle: visualize controle total sobre excitação por 18 minutos.',
    optional: 'Pratique técnica squeeze durante momentos de alta excitação.',
    duration: 35,
    imageUrl: 'https://i.ytimg.com/vi/DgsLVZYN8Xg/maxresdefault.jpg'
  },
  {
    day: 16,
    phase: 2,
    title: 'Edging Controlado',
    kegels: '5 séries de 10 contrações variadas (alterne rápidas e lentas).',
    breathing: 'Respiração rítmica: mantenha ritmo constante de 5s inspire/7s expire por 12 minutos.',
    mindfulness: 'Observação de picos: note momentos de alta excitação sem reagir por 20 minutos.',
    optional: 'Pratique edging: leve excitação a 8/10, pare, respire, relaxe PC. Repita 3-5 vezes.',
    duration: 40,
    imageUrl: 'https://i.ytimg.com/vi/y1HTRArPo_0/maxresdefault.jpg'
  },
  {
    day: 17,
    phase: 2,
    title: 'Controle de Velocidade',
    kegels: 'Kegels em diferentes velocidades: 2 séries rápidas (1s) + 2 séries médias (5s) + 2 séries lentas (10s).',
    breathing: 'Respiração sincronizada com movimento: coordene respiração com contrações por 15 minutos.',
    mindfulness: 'Mindfulness sensorial avançado: foque em sensações sutis por 22 minutos.',
    optional: 'Varie velocidade de estimulação durante prática, mantendo controle.',
    duration: 42,
    imageUrl: 'https://st5.depositphotos.com/3900811/61930/v/450/depositphotos_619301320-stock-illustration-pelvic-floor-muscles-anatomy-male.jpg'
  },
  {
    day: 18,
    phase: 2,
    title: 'Técnica de Distração Mental',
    kegels: '4 séries de 15 contrações (6s cada) enquanto resolve problemas mentais.',
    breathing: 'Respiração automática consciente: mantenha respiração profunda enquanto faz outras atividades.',
    mindfulness: 'Meditação de foco dividido: mantenha atenção em múltiplos pontos simultaneamente por 20 minutos.',
    optional: 'Durante excitação, use distração mental (ex: contar de 100 a 0 de 7 em 7).',
    duration: 38,
    imageUrl: 'https://drconsulta.com/conteudo/wp-content/uploads/2023/12/dr.consulta-exercicios-de-kegel-para-homens-1024x576.webp'
  },
  {
    day: 19,
    phase: 2,
    title: 'Controle de Tensão',
    kegels: 'Contrações progressivas: aumente intensidade gradualmente de 20% a 100% em 10 contrações. Repita 3 vezes.',
    breathing: 'Respiração de relaxamento progressivo: relaxe cada parte do corpo enquanto respira por 18 minutos.',
    mindfulness: 'Body scan de tensão: identifique e relaxe tensões desnecessárias por 25 minutos.',
    optional: 'Note áreas de tensão durante excitação e relaxe-as conscientemente.',
    duration: 45,
    imageUrl: 'https://i.ytimg.com/vi/DgsLVZYN8Xg/maxresdefault.jpg'
  },
  {
    day: 20,
    phase: 2,
    title: 'Integração Total',
    kegels: 'Circuito master: combine todos os tipos de contração em uma sessão de 20 minutos.',
    breathing: 'Respiração adaptativa avançada: use diferentes técnicas conforme situação por 15 minutos.',
    mindfulness: 'Meditação de maestria: visualize controle perfeito em todas as situações por 25 minutos.',
    optional: 'Teste todas as técnicas em sequência durante prática sexual.',
    duration: 50,
    imageUrl: 'https://i.ytimg.com/vi/y1HTRArPo_0/maxresdefault.jpg'
  },
  {
    day: 21,
    phase: 2,
    title: 'Revisão Fase 2 - Completa',
    kegels: 'Teste final de força e resistência: máximo de contrações de 10s + tempo máximo de contração única.',
    breathing: 'Respiração livre avançada: pratique técnica mais eficaz por 20 minutos.',
    mindfulness: 'Reflexão completa: medite sobre toda a jornada até aqui por 30 minutos.',
    optional: 'Preencha relatório completo: avalie todas as áreas (força PC, controle respiratório, controle mental, controle durante excitação).',
    duration: 55,
    imageUrl: 'https://st5.depositphotos.com/3900811/61930/v/450/depositphotos_619301320-stock-illustration-pelvic-floor-muscles-anatomy-male.jpg'
  },

  // FASE 3: DOMÍNIO TOTAL (Dias 22-35)
  {
    day: 22,
    phase: 3,
    title: 'Controle Multiorgásmico - Introdução',
    kegels: '5 séries de 15 contrações (10s contraído, 5s relaxado) com intensidade máxima.',
    breathing: 'Respiração de energia: inspire visualizando energia subindo, expire descendo. 20 minutos.',
    mindfulness: 'Meditação de sensações sutis: foque em sensações mínimas por 30 minutos.',
    optional: 'Aprenda sobre orgasmo seco: contraia PC fortemente ao atingir ponto de não-retorno.',
    duration: 50,
    imageUrl: 'https://drconsulta.com/conteudo/wp-content/uploads/2023/12/dr.consulta-exercicios-de-kegel-para-homens-1024x576.webp'
  },
  {
    day: 23,
    phase: 3,
    title: 'Técnica de Redirecionamento',
    kegels: 'Kegels com visualização avançada: redirecione energia sexual para todo o corpo. 6 séries de 12.',
    breathing: 'Respiração circular: inspire e expire sem pausas, mantendo fluxo contínuo por 25 minutos.',
    mindfulness: 'Mindfulness de energia: sinta energia sexual fluindo pelo corpo por 35 minutos.',
    optional: 'Durante excitação, redirecione energia para outras partes do corpo através da respiração.',
    duration: 55,
    imageUrl: 'https://i.ytimg.com/vi/DgsLVZYN8Xg/maxresdefault.jpg'
  },
  {
    day: 24,
    phase: 3,
    title: 'Controle de Ponto de Não-Retorno',
    kegels: 'Contrações de emergência: pratique contrações máximas instantâneas. 10 séries de 5.',
    breathing: 'Respiração de parada: inspire profundo e segure ao sentir proximidade. Pratique por 15 minutos.',
    mindfulness: 'Meditação de limiar: identifique exatamente o ponto de não-retorno por 40 minutos.',
    optional: 'Pratique identificar e parar exatamente no ponto de não-retorno múltiplas vezes.',
    duration: 60,
    imageUrl: 'https://i.ytimg.com/vi/y1HTRArPo_0/maxresdefault.jpg'
  },
  {
    day: 25,
    phase: 3,
    title: 'Orgasmo Seco - Prática',
    kegels: 'Contrações de bloqueio: pratique contração máxima sustentada por 20s. Repita 8 vezes.',
    breathing: 'Respiração de contenção: inspire profundo, segure, contraia PC máximo. 20 minutos.',
    mindfulness: 'Meditação de separação: separe mentalmente excitação de ejaculação por 45 minutos.',
    optional: 'Tente alcançar orgasmo sem ejaculação: contraia PC fortemente ao atingir clímax.',
    duration: 65,
    imageUrl: 'https://st5.depositphotos.com/3900811/61930/v/450/depositphotos_619301320-stock-illustration-pelvic-floor-muscles-anatomy-male.jpg'
  },
  {
    day: 26,
    phase: 3,
    title: 'Controle de Múltiplos Picos',
    kegels: 'Circuito de resistência extrema: 10 séries de 10 contrações (12s cada) com 30s de descanso.',
    breathing: 'Respiração de recuperação rápida: técnica para recuperar controle rapidamente. 25 minutos.',
    mindfulness: 'Mindfulness de múltiplos picos: observe vários picos de excitação sem perder controle por 50 minutos.',
    optional: 'Pratique atingir 9/10 de excitação múltiplas vezes sem ejacular.',
    duration: 70,
    imageUrl: 'https://drconsulta.com/conteudo/wp-content/uploads/2023/12/dr.consulta-exercicios-de-kegel-para-homens-1024x576.webp'
  },
  {
    day: 27,
    phase: 3,
    title: 'Técnica de Prolongamento Extremo',
    kegels: 'Kegels de manutenção: contrações leves e constantes durante 30 minutos.',
    breathing: 'Respiração de prolongamento: mantenha respiração lenta e profunda continuamente por 30 minutos.',
    mindfulness: 'Meditação de duração: visualize controle por períodos prolongados por 60 minutos.',
    optional: 'Teste: quanto tempo consegue manter excitação alta sem ejacular? Anote o tempo.',
    duration: 75,
    imageUrl: 'https://i.ytimg.com/vi/DgsLVZYN8Xg/maxresdefault.jpg'
  },
  {
    day: 28,
    phase: 3,
    title: 'Revisão Fase 3 - Parte 1',
    kegels: 'Teste de força máxima: contrações mais fortes e longas possíveis. Anote resultados.',
    breathing: 'Respiração livre master: pratique técnica mais avançada por 35 minutos.',
    mindfulness: 'Reflexão de maestria: medite sobre o domínio alcançado por 60 minutos.',
    optional: 'Preencha relatório: avalie capacidade de orgasmo seco, controle de múltiplos picos.',
    duration: 80,
    imageUrl: 'https://i.ytimg.com/vi/y1HTRArPo_0/maxresdefault.jpg'
  },
  {
    day: 29,
    phase: 3,
    title: 'Controle em Situações Reais',
    kegels: '8 séries de 15 contrações variadas (simule situações reais).',
    breathing: 'Respiração adaptativa em tempo real: pratique ajustar respiração instantaneamente por 30 minutos.',
    mindfulness: 'Mindfulness situacional: visualize situações reais e mantenha controle por 55 minutos.',
    optional: 'Aplique todas as técnicas em situação real com parceiro(a) ou sozinho.',
    duration: 70,
    imageUrl: 'https://st5.depositphotos.com/3900811/61930/v/450/depositphotos_619301320-stock-illustration-pelvic-floor-muscles-anatomy-male.jpg'
  },
  {
    day: 30,
    phase: 3,
    title: 'Técnica de Controle Total',
    kegels: 'Circuito completo master: todos os tipos de contração em sequência por 40 minutos.',
    breathing: 'Respiração master: combine todas as técnicas aprendidas por 35 minutos.',
    mindfulness: 'Meditação de domínio absoluto: visualize controle perfeito em todas as situações por 70 minutos.',
    optional: 'Demonstre controle total: múltiplos picos, orgasmo seco, prolongamento extremo.',
    duration: 90,
    imageUrl: 'https://drconsulta.com/conteudo/wp-content/uploads/2023/12/dr.consulta-exercicios-de-kegel-para-homens-1024x576.webp'
  },
  {
    day: 31,
    phase: 3,
    title: 'Refinamento de Técnicas',
    kegels: 'Kegels de precisão: contrações extremamente controladas e precisas. 10 séries de 10.',
    breathing: 'Respiração de precisão: ajustes mínimos para controle máximo por 30 minutos.',
    mindfulness: 'Mindfulness de detalhes: foque em sensações mínimas e ajustes sutis por 60 minutos.',
    optional: 'Refine cada técnica: identifique pontos de melhoria e pratique.',
    duration: 75,
    imageUrl: 'https://i.ytimg.com/vi/DgsLVZYN8Xg/maxresdefault.jpg'
  },
  {
    day: 32,
    phase: 3,
    title: 'Controle Sob Pressão',
    kegels: 'Kegels sob distração intensa: pratique enquanto exposto a estímulos fortes.',
    breathing: 'Respiração sob pressão: mantenha controle respiratório em situações desafiadoras por 35 minutos.',
    mindfulness: 'Meditação sob pressão: mantenha foco mesmo com distrações intensas por 65 minutos.',
    optional: 'Teste controle em situações de alta excitação e pressão.',
    duration: 80,
    imageUrl: 'https://i.ytimg.com/vi/y1HTRArPo_0/maxresdefault.jpg'
  },
  {
    day: 33,
    phase: 3,
    title: 'Integração Final',
    kegels: 'Sessão completa de integração: todos os exercícios em sequência por 45 minutos.',
    breathing: 'Respiração integrada: todas as técnicas em harmonia por 40 minutos.',
    mindfulness: 'Meditação de integração: una todas as práticas em uma só por 75 minutos.',
    optional: 'Demonstre maestria completa: aplique tudo em situação real.',
    duration: 90,
    imageUrl: 'https://st5.depositphotos.com/3900811/61930/v/450/depositphotos_619301320-stock-illustration-pelvic-floor-muscles-anatomy-male.jpg'
  },
  {
    day: 34,
    phase: 3,
    title: 'Preparação para Manutenção',
    kegels: 'Rotina de manutenção: crie sua rotina personalizada de Kegels para continuar.',
    breathing: 'Respiração de manutenção: defina prática diária de respiração.',
    mindfulness: 'Mindfulness contínuo: estabeleça prática diária de meditação.',
    optional: 'Planeje rotina semanal pós-programa para manter resultados.',
    duration: 60,
    imageUrl: 'https://drconsulta.com/conteudo/wp-content/uploads/2023/12/dr.consulta-exercicios-de-kegel-para-homens-1024x576.webp'
  },
  {
    day: 35,
    phase: 3,
    title: 'Celebração e Conclusão',
    kegels: 'Teste final completo: demonstre toda a evolução. Anote todos os resultados.',
    breathing: 'Respiração de celebração: pratique com gratidão por 30 minutos.',
    mindfulness: 'Meditação de gratidão: reflita sobre toda a jornada e conquistas por 90 minutos.',
    optional: 'Preencha relatório final completo: compare Dia 1 vs Dia 35 em todas as áreas. Celebre sua entrada no 1%!',
    duration: 90,
    imageUrl: 'https://i.ytimg.com/vi/y1HTRArPo_0/maxresdefault.jpg'
  },
];

export const getExerciseByDay = (day: number): DayExercise | undefined => {
  return exercises.find(ex => ex.day === day);
};

export const getExercisesByPhase = (phase: number): DayExercise[] => {
  return exercises.filter(ex => ex.phase === phase);
};

export const getTotalDuration = (): number => {
  return exercises.reduce((total, ex) => total + ex.duration, 0);
};
