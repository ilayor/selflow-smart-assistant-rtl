
import React from 'react';
import { ArrowLeft, Phone, MessageSquare } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="gradient-bg min-h-screen flex items-center pt-24 pb-16 relative">
      {/* Floating bubbles with more pronounced animation */}
      <div className="bubble bubble-1 animate-float"></div>
      <div className="bubble bubble-2 animate-float-reverse"></div>
      <div className="bubble bubble-3 animate-float"></div>
      <div className="bubble bubble-4 animate-float-reverse"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 text-center md:text-right">
            <h1 className="text-4xl lg:text-6xl mb-6 text-selflow-darkGreen font-bold text-center md:text-right">
              Selflow<br />הפשטות שבניהול עסק
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-selflow-darkGray max-w-lg mx-auto md:mr-0 md:ml-auto">
              העוזר החכם ב-WhatsApp שמנהל את העסק שלך באופן חכם, מסדר את המידע החשוב של העסק, ועוזר לך להתמקד במה שבאמת חשוב - הלקוחות שלך.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center md:justify-end">
              <a 
                href="#pilot" 
                className="cta-button animate-float-subtle inline-flex items-center justify-center bg-selflow-green hover:bg-selflow-darkGreen text-white font-medium py-3 px-8 rounded-full text-lg"
              >
                התחל עכשיו בחינם
                <ArrowLeft className="mr-2 h-5 w-5" />
              </a>
              <a 
                href="#features" 
                className="cta-button animate-float-subtle-delay inline-flex items-center justify-center bg-white hover:bg-gray-50 text-selflow-darkGreen border border-selflow-darkGreen font-medium py-3 px-8 rounded-full text-lg"
              >
                אפשר עוד מידע?
              </a>
            </div>
            <div className="flex items-center text-selflow-darkGray mb-16 justify-center md:justify-end">
              <Phone className="h-5 w-5 mr-2 text-selflow-green" />
              <p className="text-lg">אין צורך בהתקנת אפליקציה - הכל דרך WhatsApp!</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-12 md:mt-0">
            <div className="relative max-w-md mx-auto">
              {/* Chat bubbles positioned one below the other with clear visibility on mobile */}
              <div className="flex flex-col items-center justify-center relative mb-4 z-10">
                {/* User message bubble (top) */}
                <div className="w-full max-w-[250px] mb-6 animate-float">
                  <div className="bg-white rounded-2xl shadow-lg p-4">
                    <div className="flex items-center mb-2">
                      <MessageSquare className="h-5 w-5 text-selflow-green mr-2" />
                      <span className="font-bold text-sm">לקוחה</span>
                    </div>
                    <p className="text-sm">אפשר לקבוע תור למניקור ליום שלישי?</p>
                  </div>
                </div>
                
                {/* Selflow message bubble (bottom) */}
                <div className="w-full max-w-[280px] animate-float-reverse">
                  <div className="bg-selflow-yellow rounded-2xl shadow-lg p-4">
                    <div className="flex items-center mb-2">
                      <MessageSquare className="h-5 w-5 text-selflow-green mr-2" />
                      <span className="font-bold text-sm">selflow</span>
                    </div>
                    <p className="text-sm">בוודאי! יש לנו מקום ביום שלישי ב-15:00 או 17:30. מה מתאים לך? הלקוחה בחרה בחמש תכתבי לי פה אני כבר אעדכן את זה ביומן שלך.</p>
                  </div>
                </div>
              </div>
              
              {/* Make sure image is properly displayed on all devices */}
              <img 
                src="https://storage.googleapis.com/lovable-files/selflow-mockup.png" 
                alt="Selflow WhatsApp Assistant" 
                className="w-full h-auto rounded-2xl shadow-2xl" 
                onError={e => {
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
