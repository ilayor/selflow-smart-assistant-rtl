
import React, { useEffect } from 'react';
import { ArrowLeft, HelpCircle } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const animElements = document.querySelectorAll('.hero-anim');
    animElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('opacity-100');
        el.classList.add('translate-y-0');
      }, 200 * (index + 1));
    });
  }, []);

  const buttonBaseStyles = cn(
    "inline-flex items-center justify-center gap-2",
    "font-bold py-4 px-8 rounded-full text-lg",
    "w-full sm:w-[200px]",
    "transition-all duration-300 hover:-translate-y-1",
  );

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden bg-gradient-to-br from-[#A8E6CF] to-[#25D366]">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute w-96 h-96 rounded-full bg-white/30 blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 rounded-full bg-white/30 blur-3xl bottom-20 right-10"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
          {/* Text content */}
          <div className="w-full md:w-3/5 text-center">
            <h1 className="hero-anim opacity-0 -translate-y-4 transition-all duration-700 text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-shadow-lg">
              בעל עסק עצמאי?
              <br />
              הרשה לנו להכיר לך את <span className="text-white">SELFLOW</span>,
              <br />
              העוזר האישי החדש של העסק שלך 💬
            </h1>
            
            <p className="hero-anim opacity-0 -translate-y-4 transition-all duration-700 delay-300 text-xl md:text-2xl text-white mb-6 max-w-2xl mx-auto font-medium">
              נהל את העסק שלך בצ'אט אחד חכם.
              <br />
              כל זה קורה בצ'אט האהוב של WhatsApp 📲 – בלי אפליקציות מיותרות.
            </p>
            
            <div className="hero-anim opacity-0 -translate-y-4 transition-all duration-700 delay-500 flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a 
                href="#pilot" 
                className={cn(
                  buttonBaseStyles,
                  "bg-[#1DD9E3] hover:bg-[#19c5ce]",
                  "text-white",
                  "shadow-lg hover:shadow-xl"
                )}
              >
                הצטרפות לפיילוט
                <ArrowLeft className="w-5 h-5" />
              </a>
              <a 
                href="#workflow" 
                className={cn(
                  buttonBaseStyles,
                  "border-2 border-white text-white",
                  "hover:bg-white/10",
                  "hover:shadow-white/20 hover:shadow-lg"
                )}
              >
                איך זה עובד?
                <HelpCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Image/Logo */}
          <div className="hero-anim opacity-0 -translate-y-4 transition-all duration-700 delay-700 w-full md:w-2/5 flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center">
              <div className="absolute w-full h-full bg-white/20 rounded-full blur-xl"></div>
              <img 
                src="/lovable-uploads/selflow-icon-transparent.png"
                alt="Selflow Logo"
                className="relative z-10 w-48 h-48 md:w-72 md:h-72 object-contain animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
