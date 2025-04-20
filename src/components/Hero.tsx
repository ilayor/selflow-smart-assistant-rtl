
import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Add animation class to elements after component mounts
    const animElements = document.querySelectorAll('.hero-anim');
    animElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('opacity-100');
        el.classList.add('translate-y-0');
      }, 200 * (index + 1));
    });
  }, []);

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
          <div className="w-full md:w-3/5 text-center md:text-right">
            <h1 className="hero-anim opacity-0 -translate-y-4 transition-all duration-700 text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              בעל עסק עצמאי?
              <br />
              הרשה לנו להכיר לך את <span className="text-white">SELFLOW</span>,
              <br />
              העוזר האישי החדש של העסק שלך 💬
            </h1>
            
            <p className="hero-anim opacity-0 -translate-y-4 transition-all duration-700 delay-300 text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto md:mr-0 md:ml-auto">
              נהל את העסק שלך בצ'אט אחד חכם. בלי אפליקציות, בלי כאבי ראש.
            </p>
            
            <div className="hero-anim opacity-0 -translate-y-4 transition-all duration-700 delay-500 flex flex-col sm:flex-row gap-5 justify-center md:justify-end mb-12">
              <a 
                href="#workflow" 
                className={cn(
                  "inline-flex items-center justify-center",
                  "bg-selflow-green hover:bg-selflow-darkGreen text-white",
                  "font-bold py-4 px-8 rounded-full text-lg shadow-lg",
                  "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                )}
              >
                איך זה עובד?
              </a>
              <a 
                href="#pilot" 
                className={cn(
                  "inline-flex items-center justify-center",
                  "bg-transparent border-2 border-selflow-turquoise text-selflow-turquoise",
                  "hover:bg-selflow-turquoise hover:text-white",
                  "font-bold py-4 px-8 rounded-full text-lg",
                  "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                )}
              >
                הצטרפות לפיילוט
                <ArrowLeft className="mr-2 h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Image/Logo */}
          <div className="hero-anim opacity-0 -translate-y-4 transition-all duration-700 delay-700 w-full md:w-2/5 flex justify-center md:justify-start">
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              {/* Background blur circles */}
              <div className="absolute w-full h-full bg-white/20 rounded-full blur-xl"></div>
              
              {/* Logo */}
              <img 
                src="/lovable-uploads/selflow-icon-transparent.png"
                alt="Selflow Logo"
                className="relative z-10 w-48 h-48 md:w-60 md:h-60 object-contain animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
