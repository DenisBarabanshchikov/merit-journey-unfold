import { useLanguage } from '@/contexts/LanguageContext';
import { Eye, Target } from 'lucide-react';

const VisionMission = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-card">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Vision */}
        <div className="space-y-6 text-center md:text-left">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Eye className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-playfair text-primary tracking-wider">
            {t('vision')}
          </h2>
          <p className="text-lg text-foreground/90 leading-relaxed">
            {t('visionText')}
          </p>
        </div>

        {/* Mission */}
        <div className="space-y-6 text-center md:text-left">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Target className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-playfair text-primary tracking-wider">
            {t('mission')}
          </h2>
          <p className="text-lg text-foreground/90 leading-relaxed">
            {t('missionText')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
