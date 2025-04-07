
import React from 'react';
import { ArrowLeft, Phone, MessageSquare } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="gradient-bg min-h-screen flex items-center pt-24 pb-16 relative">
      {/* Floating bubbles */}
      <div className="bubble bubble-1"></div>
      <div className="bubble bubble-2"></div>
      <div className="bubble bubble-3"></div>
      <div className="bubble bubble-4"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pl-12 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-selflow-darkGreen">
              Selflow – העסק שלך, זורם בקלות 🚀
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-selflow-darkGray max-w-lg">
              העוזר החכם ב-WhatsApp שמנהל את העסק שלך באופן אוטומטי, מסדר את התורים וההודעות, ועוזר לך להתמקד במה שבאמת חשוב.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#pilot" 
                className="cta-button inline-flex items-center justify-center bg-selflow-green hover:bg-selflow-darkGreen text-white font-medium py-3 px-8 rounded-full text-lg"
              >
                התחל עכשיו בחינם
                <ArrowLeft className="mr-2 h-5 w-5" />
              </a>
              <a 
                href="#features" 
                className="cta-button inline-flex items-center justify-center bg-white hover:bg-gray-50 text-selflow-darkGreen border border-selflow-darkGreen font-medium py-3 px-8 rounded-full text-lg"
              >
                אני רוצה סדר בעסק שלי!
              </a>
            </div>
            <div className="mt-8 flex items-center text-selflow-darkGray">
              <Phone className="h-5 w-5 mr-2 text-selflow-green" />
              <p className="text-lg">אין צורך בהתקנת אפליקציה - הכל דרך WhatsApp!</p>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute -top-10 -left-10 animate-float">
                <div className="bg-white rounded-2xl shadow-lg p-4 max-w-[200px]">
                  <div className="flex items-center mb-2">
                    <MessageSquare className="h-5 w-5 text-selflow-green mr-2" />
                    <span className="font-bold text-sm">לקוחה</span>
                  </div>
                  <p className="text-sm">אפשר לקבוע תור למניקור ליום שלישי?</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 animate-float-reverse z-10">
                <div className="bg-selflow-yellow rounded-2xl shadow-lg p-4 max-w-[220px]">
                  <div className="flex items-center mb-2">
                    <MessageSquare className="h-5 w-5 text-selflow-green mr-2" />
                    <span className="font-bold text-sm">סלפלואו</span>
                  </div>
                  <p className="text-sm">בוודאי! יש לנו מקום ביום שלישי ב-15:00 או 17:30. מה מתאים לך?</p>
                </div>
              </div>
              <img 
                src="https://storage.googleapis.com/lovable-files/selflow-mockup.png" 
                alt="Selflow WhatsApp Assistant" 
                className="w-full h-auto rounded-2xl shadow-2xl z-0"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/600x400?text=Selflow+WhatsApp+Assistant";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
