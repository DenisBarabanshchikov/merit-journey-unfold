import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-skyline.jpg';
import logo from '@/assets/merit-logo.png';
import LanguageSwitcher from './LanguageSwitcher';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 px-6 py-8 md:px-12 lg:px-20">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Merit Business Logo" className="h-12 w-12 object-contain" />
            <h1 className="text-xl md:text-2xl font-playfair tracking-wider">{t('merit')}</h1>
          </div>
          <LanguageSwitcher />
        </div>
      </header>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair leading-tight">
          {t('heroTitle')}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground italic">
          {t('heroSubtitle')}
        </p>
        <div className="space-y-4 text-base md:text-lg text-foreground/90 max-w-3xl mx-auto pt-4">
          <p>{t('heroCopy')}</p>
          <p>{t('heroCopy2')}</p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
