import { LanguageProvider } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import VisionMission from '@/components/VisionMission';
import Companies from '@/components/Companies';
import History from '@/components/History';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Hero />
        <VisionMission />
        <Companies />
        <History />
        <Contact />
      </div>
    </LanguageProvider>
  );
};

export default Index;
