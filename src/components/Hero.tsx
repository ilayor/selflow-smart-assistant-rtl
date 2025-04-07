
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="gradient-bg min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pl-12 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-selflow-darkGreen">
              Selflow – העסק שלך, זורם בקלות 🚀
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-selflow-darkGray max-w-lg">
              פתרון חכם לניהול העסק שלך, אוטומציה של תהליכים, ושיפור חווית הלקוח – כל זה במקום אחד.
            </p>
            <a 
              href="#pilot" 
              className="cta-button inline-flex items-center bg-selflow-green hover:bg-selflow-darkGreen text-white font-medium py-3 px-8 rounded-full text-lg"
            >
              התחל לנהל חכם
              <ArrowLeft className="mr-2 h-5 w-5" />
            </a>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 animate-fade-in">
            <img 
              src="https://storage.googleapis.com/lovable-files/selflow-mockup.png" 
              alt="Selflow Dashboard" 
              className="w-full h-auto rounded-lg shadow-xl"
              onError={(e) => {
                // Fallback if image doesn't load
                e.currentTarget.src = "https://via.placeholder.com/600x400?text=Selflow+Dashboard";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
