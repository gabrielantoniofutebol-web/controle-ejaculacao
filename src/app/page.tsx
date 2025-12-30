'use client';

import { useEffect, useState } from 'react';
import { Trophy } from 'lucide-react';
import { isOnboardingComplete } from '@/lib/storage';
import SplashScreen from '@/components/splash-screen';
import OnboardingFlow from '@/components/onboarding-flow';
import MainApp from '@/components/main-app';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    // Simular splash screen por 3 segundos
    const timer = setTimeout(() => {
      setLoading(false);
      // Verificar se onboarding já foi completado
      if (isOnboardingComplete()) {
        setShowApp(true);
      } else {
        setShowOnboarding(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
    setShowApp(true);
  };

  if (loading) {
    return <SplashScreen />;
  }

  if (showOnboarding) {
    return <OnboardingFlow onComplete={handleOnboardingComplete} />;
  }

  if (showApp) {
    return <MainApp />;
  }

  return null;
}
