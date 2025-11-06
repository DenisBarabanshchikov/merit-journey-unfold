import { useLanguage } from '@/contexts/LanguageContext';
import { Building2, Droplet, Home, Zap, Sun } from 'lucide-react';

const Companies = () => {
  const { t } = useLanguage();

  const companies = [
    {
      name: 'Mohammed A Alfaddaghi & Partners',
      icon: Building2,
      link: '#'
    },
    {
      name: 'Oy Nord Water LTD',
      icon: Droplet,
      link: '#'
    },
    {
      name: 'Mohammed A Alfaddaghi for Real Estate',
      icon: Home,
      link: '#'
    },
    {
      name: 'New Age Power',
      icon: Zap,
      link: '#'
    },
    {
      name: 'Bravo Solar Energy Systems',
      icon: Sun,
      link: '#'
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair text-primary tracking-wider mb-4">
            {t('companies')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('companiesSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company, index) => (
            <a
              key={index}
              href={company.link}
              className="group p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-gold)]"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <company.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-medium group-hover:text-primary transition-colors duration-300">
                  {company.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
