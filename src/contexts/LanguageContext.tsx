import React, { createContext, useContext, useState } from 'react';

export type Language = 'en' | 'ar' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    welcome: "Welcome to Merit Business",
    founder: "I am Ali Alfaddaghi, founder and owner of Merit Business. In this introduction, I will share some of my achievements and a brief history of my business journey.",
    address: "Address",
    addressDetails: "7991-Alryan Riyadh, 14211 Kingdom of Saudi Arabia",
    vision: "VISION",
    visionText: "We at Merit Business believe in diversity, excellence, and endurance. We strive to be a global partner for cutting-edge products and services.",
    mission: "MISSION",
    missionText: "To realize our vision, we are focusing on strategic partnerships, teaming up with professionals in their respective fields and creating the most value for all stakeholders.",
    companies: "COMPANIES",
    companiesSubtitle: "Some of the companies that are owned fully or partly by us",
    history: "HISTORY",
    milestones: "Milestones",
    contact: "Contact",
    merit: "MERIT BUSINESS",
    heroTitle: "Merit Business is a diversified Saudi investment and industrial group",
    heroSubtitle: "Founded by visionary entrepreneur Ali Alfaddaghi",
    heroCopy: "For more than four decades, we have driven national industries forward—from water technology and real estate to sustainable energy—through innovation and long-term partnerships.",
    heroCopy2: "Today, Merit Business continues to scale its presence globally while delivering value, reliability, and excellence across every project."
  },
  ar: {
    welcome: "مرحباً بكم في ميرت بيزنس",
    founder: "أنا علي الفداغي، مؤسس ومالك شركة ميرت بيزنس. في هذه المقدمة، سأشارك بعض إنجازاتي ونبذة تاريخية عن رحلتي في عالم الأعمال.",
    address: "العنوان",
    addressDetails: "7991-الريان الرياض، 14211 المملكة العربية السعودية",
    vision: "الرؤية",
    visionText: "نحن في ميرت بيزنس نؤمن بالتنوع والتميز والاستدامة. نسعى لأن نكون شريكاً عالمياً للمنتجات والخدمات المتطورة.",
    mission: "المهمة",
    missionText: "لتحقيق رؤيتنا، نركز على الشراكات الاستراتيجية، والتعاون مع المحترفين في مجالاتهم، وخلق أكبر قيمة لجميع أصحاب المصلحة.",
    companies: "الشركات",
    companiesSubtitle: "بعض الشركات المملوكة لنا بالكامل أو جزئياً",
    history: "التاريخ",
    milestones: "المعالم البارزة",
    contact: "اتصل بنا",
    merit: "ميرت بيزنس",
    heroTitle: "ميرت بيزنس مجموعة استثمارية وصناعية سعودية متنوعة",
    heroSubtitle: "تأسست على يد رائد الأعمال صاحب الرؤية علي الفداغي",
    heroCopy: "لأكثر من أربعة عقود، دفعنا الصناعات الوطنية للأمام - من تكنولوجيا المياه والعقارات إلى الطاقة المستدامة - من خلال الابتكار والشراكات طويلة الأمد.",
    heroCopy2: "اليوم، تواصل ميرت بيزنس توسيع حضورها عالمياً مع تقديم القيمة والموثوقية والتميز في كل مشروع."
  },
  ru: {
    welcome: "Добро пожаловать в Merit Business",
    founder: "Я Али Альфаддаги, основатель и владелец компании Merit Business. В этом введении я поделюсь некоторыми своими достижениями и краткой историей своего бизнес-пути.",
    address: "Адрес",
    addressDetails: "7991-Алриан Эр-Рияд, 14211 Королевство Саудовская Аравия",
    vision: "ВИДЕНИЕ",
    visionText: "Мы в Merit Business верим в разнообразие, совершенство и выносливость. Мы стремимся быть глобальным партнером для передовых продуктов и услуг.",
    mission: "МИССИЯ",
    missionText: "Для реализации нашего видения мы фокусируемся на стратегических партнерствах, объединяясь с профессионалами в их областях и создавая максимальную ценность для всех заинтересованных сторон.",
    companies: "КОМПАНИИ",
    companiesSubtitle: "Некоторые компании, которые полностью или частично принадлежат нам",
    history: "ИСТОРИЯ",
    milestones: "Основные вехи",
    contact: "Контакты",
    merit: "MERIT BUSINESS",
    heroTitle: "Merit Business - диверсифицированная саудовская инвестиционная и промышленная группа",
    heroSubtitle: "Основана дальновидным предпринимателем Али Альфаддаги",
    heroCopy: "На протяжении более четырех десятилетий мы продвигали национальные отрасли промышленности - от водных технологий и недвижимости до устойчивой энергетики - через инновации и долгосрочные партнерства.",
    heroCopy2: "Сегодня Merit Business продолжает масштабировать свое присутствие в мире, обеспечивая ценность, надежность и совершенство в каждом проекте."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
