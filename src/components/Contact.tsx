import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, MapPin } from 'lucide-react';
import logo from '@/assets/merit-logo.png';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <img src={logo} alt="Merit Business Logo" className="h-20 w-20 mx-auto object-contain" />
        
        <h2 className="text-3xl md:text-4xl font-playfair text-primary tracking-wider">
          {t('contact')}
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-lg">
          <a 
            href="mailto:aalfaddaghi@gmail.com"
            className="flex items-center gap-3 hover:text-primary transition-colors duration-300 group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <span>aalfaddaghi@gmail.com</span>
          </a>

          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <span className="text-left">
              {t('addressDetails')}
            </span>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Merit Business. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
