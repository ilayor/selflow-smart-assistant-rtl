import React from 'react';
import { ArrowLeft, Phone, MessageSquare } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
const Hero: React.FC = () => {
  const isMobile = useIsMobile();
  return <section className="gradient-bg min-h-screen flex items-center pt-24 pb-16 relative">
      {/* Floating bubbles */}
      <div className="bubble bubble-1"></div>
      <div className="bubble bubble-2"></div>
      <div className="bubble bubble-3"></div>
      <div className="bubble bubble-4"></div>
      
      <div className="w-11/12 max-w-5xl mx-auto px-6 text-center">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-11/12 max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-4xl lg:text-6xl mb-6 text-selflow-darkGreen font-bold text-center md:text-5xl">Selflow   
 הפשטות שבניהול עסק </h1>
            <p className="text-xl md:text-2xl mb-8 text-selflow-darkGray max-w-lg">העוזר החכם ב-WhatsApp שמנהל את העסק שלך באופן חכם, מסדר את המידע החשוב של העסק, ועוזר לך להתמקד במה שבאמת חשוב - 
הלקוחות שלך.</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#pilot" className="cta-button inline-flex items-center justify-center bg-selflow-green hover:bg-selflow-darkGreen text-white font-medium py-3 px-8 rounded-full text-lg">
                התחל עכשיו בחינם
                <ArrowLeft className="mr-2 h-5 w-5" />
              </a>
              <a href="#features" className="cta-button inline-flex items-center justify-center bg-white hover:bg-gray-50 text-selflow-darkGreen border border-selflow-darkGreen font-medium py-3 px-8 rounded-full text-lg">
                אני רוצה סדר בעסק שלי!
              </a>
            </div>
            <div className="flex items-center text-selflow-darkGray mb-16">
              <Phone className="h-5 w-5 mr-2 text-selflow-green" />
              <p className="text-lg">אין צורך בהתקנת אפליקציה - הכל דרך WhatsApp!</p>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              {/* Repositioned chat bubbles for better visibility on mobile */}
              {isMobile ? <>
                  {/* On mobile, position bubbles above and below the phone image with more space */}
                  <div className="absolute -top-36 right-10 z-10 animate-float">
                    <div className="bg-white rounded-2xl shadow-lg p-4 max-w-[200px]">
                      <div className="flex items-center mb-2">
                        <MessageSquare className="h-5 w-5 text-selflow-green mr-2" />
                        <span className="font-bold text-sm">לקוחה</span>
                      </div>
                      <p className="text-sm">אפשר לקבוע תור למניקור ליום שלישי?</p>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-36 left-10 z-10 animate-float-reverse">
                    <div className="bg-selflow-yellow rounded-2xl shadow-lg p-4 max-w-[220px]">
                      <div className="flex items-center mb-2">
                        <MessageSquare className="h-5 w-5 text-selflow-green mr-2" />
                        <span className="font-bold text-sm">selflow</span>
                      </div>
                      <p className="text-sm">בוודאי! יש לנו מקום ביום שלישי ב-15:00 או 17:30. מה מתאים לך? הלקוחה בחרה בחמש תכתבי לי פה אני כבר אעדכן את זה ביומן שלך.</p>
                    </div>
                  </div>
                  
                  <img src="https://storage.googleapis.com/lovable-files/selflow-mockup.png" alt="Selflow WhatsApp Assistant" className="w-full h-auto rounded-2xl shadow-2xl z-0 mt-32 mb-32" onError={e => {
                e.currentTarget.src = "https://via.placeholder.com/600x400?text=Selflow+WhatsApp+Assistant";
              }} />
                </> : <>
                  {/* On desktop, keep original positioning */}
                  <div className="absolute -top-10 -left-10 z-10 animate-float">
                    <div className="bg-white rounded-2xl shadow-lg p-4 max-w-[200px] py-[10px]">
                      <div className="flex items-center mb-2">
                        <MessageSquare className="h-5 w-5 text-selflow-green mr-2" />
                        <span className="font-bold text-sm">לקוחה</span>
                      </div>
                      <p className="text-sm">אפשר לקבוע תור למניקור ליום שלישי?</p>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-6 -right-6 z-10 animate-float-reverse">
                    <div className="bg-selflow-yellow rounded-2xl shadow-lg p-4 max-w-[220px]">
                      <div className="flex items-center mb-2">
                        <MessageSquare className="h-5 w-5 text-selflow-green mr-2" />
                        <span className="font-bold text-sm">selflow</span>
                      </div>
                      <p className="text-sm">בוודאי! יש לנו מקום ביום שלישי ב-15:00 או 17:30. מה מתאים לך? הלקוחה בחרה בחמש תכתבי לי פה אני כבר אעדכן את זה ביומן שלך.</p>
                    </div>
                  </div>
                  
                  <img src="https://storage.googleapis.com/lovable-files/selflow-mockup.png" alt="Selflow WhatsApp Assistant" className="w-full h-auto rounded-2xl shadow-2xl z-0" onError={e => {
                e.currentTarget.src = "https://via.placeholder.com/600x400?text=Selflow+WhatsApp+Assistant";
              }} />
                </>}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;