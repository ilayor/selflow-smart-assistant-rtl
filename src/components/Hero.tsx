
import React from 'react';
import { ArrowLeft, Phone, MessageSquare } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="bg-[#97DB9A] min-h-screen flex items-center pt-24 pb-16 relative">
      {/* Floating bubbles */}
      <div className="bubble bubble-1"></div>
      <div className="bubble bubble-2"></div>
      <div className="bubble bubble-3"></div>
      <div className="bubble bubble-4"></div>
      
      <div className="w-11/12 max-w-5xl mx-auto px-6 text-center">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-11/12 max-w-5xl mx-auto px-6 text-center">
            <h1 className="flex flex-col items-center text-white mb-6">
              <span className="text-5xl lg:text-7xl font-bold mb-2 text-shadow-md">Selflow</span>
              <span className="text-3xl lg:text-4xl font-semibold text-shadow-sm">הפשטות שבניהול עסק</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white max-w-lg mx-auto font-bold text-shadow-sm">העוזר החכם ב-WhatsApp שמנהל את העסק שלך באופן חכם, מסדר את המידע החשוב של העסק, ועוזר לך להתמקד במה שבאמת חשוב  -  הלקוחות שלך.</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
              <a href="#pilot" className="cta-button inline-flex items-center justify-center bg-selflow-green hover:bg-selflow-darkGreen text-white font-bold py-3 px-8 rounded-full text-lg shadow-md">
                הרשמה לפיילוט
                <ArrowLeft className="mr-2 h-5 w-5" />
              </a>
              <a href="#features" className="cta-button inline-flex items-center justify-center bg-white hover:bg-gray-50 text-selflow-darkGreen border border-selflow-darkGreen font-semibold py-3 px-8 rounded-full text-lg shadow-md">אפשר עוד מידע?</a>
            </div>
            <div className="flex items-center justify-center text-white mb-16 font-bold">
              <Phone className="h-5 w-5 mr-2 text-white" />
              <p className="text-lg text-shadow-sm">אין צורך בהתקנת אפליקציה - הכל דרך WhatsApp!</p>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              {/* Repositioned chat bubbles one below the other */}
              <div className="flex flex-col items-center justify-center relative mb-4">
                {/* User message bubble (top) */}
                <div className="w-full max-w-[250px] mb-6 z-10 animate-float">
                  <div className="bg-white rounded-2xl shadow-lg p-4">
                    <div className="flex items-center mb-2">
                      <MessageSquare className="h-5 w-5 text-selflow-green mr-2" />
                      <span className="font-bold text-sm">לקוחה</span>
                    </div>
                    <p className="text-sm">אפשר לקבוע תור למניקור ליום שלישי?</p>
                  </div>
                </div>
                
                {/* Selflow message bubble (bottom) */}
                <div className="w-full max-w-[280px] mb-6 z-10 animate-float-reverse">
                  <div className="bg-selflow-yellow rounded-2xl shadow-lg p-4">
                    <div className="flex items-center mb-2">
                      <MessageSquare className="h-5 w-5 text-selflow-green mr-2" />
                      <span className="font-bold text-sm">selflow</span>
                    </div>
                    <p className="text-sm">בוודאי! יש לנו מקום ביום שלישי ב-15:00 או 17:30. מה מתאים לך? הלקוחה בחרה בחמש תכתבי לי פה אני כבר אעדכן את זה ביומן שלך.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
