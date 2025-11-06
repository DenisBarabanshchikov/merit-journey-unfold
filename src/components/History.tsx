import { useLanguage } from '@/contexts/LanguageContext';

const History = () => {
  const { t } = useLanguage();

  const milestones = [
    { year: '1979-1981', text: 'Helped establish M&A Alfaddaghi Co and Alamttar Corp.' },
    { year: '1984', text: 'Managed Alamttar to have the largest market share in its field.' },
    { year: '1985-1989', text: 'Led the restructuring of M&A Alfaddaghi.' },
    { year: '1989-1990', text: 'Formed Alfaddaghi Group by merging the top management of M&A and Alamttar.' },
    { year: '1990', text: 'Formed Matanah Ltd for Service and Auto Parts.' },
    { year: '1992', text: 'Formed Alfaddaghi for Commerce and services.' },
    { year: '1994', text: 'Formed State of the Art technology (SOFT) for software and telecommunication.' },
    { year: '1995', text: 'Led the efforts and negotiations to acquire shares of Alfaddaghi Group.' },
    { year: '1997', text: 'Formed Mohammed A & Partners.' },
    { year: '2005', text: 'Acquired 100% of the shares of Oy Nord Water Ltd Finland.' },
    { year: '2014', text: 'Won the Entrepreneurship award from Saudi Aramco.' },
    { year: '2014', text: 'Formed New Age Power.' },
    { year: '2017', text: 'Formed Bravo Solar Energy Systems Dubai UAE.' },
    { year: '2019-Present', text: 'Chairman of the board of Alfaddaghi Group.' }
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair text-primary tracking-wider mb-4">
            {t('history')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('milestones')}
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative pl-0 md:pl-20">
                {/* Timeline Dot */}
                <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-primary ring-4 ring-card hidden md:block" />
                
                <div className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-gold)]">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <span className="text-primary font-semibold text-lg">{milestone.year}</span>
                  </div>
                  <p className="text-foreground/90">{milestone.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
