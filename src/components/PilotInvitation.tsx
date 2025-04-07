
import React from 'react';
import { Rocket, Clock, CheckCircle, Users } from 'lucide-react';
const PilotInvitation: React.FC = () => {
  return <section id="pilot" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center animate-fade-in">
          <div className="relative">
            <Rocket className="h-16 w-16 text-selflow-darkGreen mb-2" />
            <div className="absolute -top-2 -right-2 bg-selflow-yellow rounded-full p-1">
              <Clock className="h-6 w-6 text-selflow-green" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">הצטרפו לפיילוט!</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            אנו מזמינים אתכם להשתתף בפיילוט חינמי של 4 ימים, בו תוכלו להתנסות במערכת Selflow ולראות כיצד היא משנה את חווית ניהול העסק שלכם.
          </p>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">מה כולל הפיילוט?</h3>
                <ul className="text-right text-lg space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="ml-2 h-5 w-5 text-selflow-green" />
                    <span>הקמת מערכת אישית בהתאמה לעסק שלך</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="ml-2 h-5 w-5 text-selflow-green" />
                    <span>ליווי אישי לאורך כל תקופת הפיילוט</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="ml-2 h-5 w-5 text-selflow-green" />
                    <span>ניהול העסק לתקופה רק דרך וואטסאפ</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="ml-2 h-5 w-5 text-selflow-green" />
                    <span>דוחות ותובנות בענייני כספים ומלאי</span>
                  </li>
                </ul>
              </div>
              
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">דרישות השתתפות:</h3>
                <ul className="text-right text-lg space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="ml-2 h-5 w-5 text-selflow-green" />
                    <span>גיל 17 ומעלה</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="ml-2 h-5 w-5 text-selflow-green" />
                    <span>עסק פעיל בתחום היופי עם לקוחות קיימים</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="ml-2 h-5 w-5 text-selflow-green" />
                    <span>שימוש ב-WhatsApp לתקשורת עם לקוחות</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="ml-2 h-5 w-5 text-selflow-green" />
                    <span>נכונות לתת משוב על המערכת</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-selflow-yellow bg-opacity-30 rounded-lg flex items-center">
              <Users className="h-6 w-6 text-selflow-darkGreen ml-3 flex-shrink-0" />
              <p className="text-lg">
                <span className="font-bold">מספר המקומות מוגבל!</span> הפיילוט פתוח ל-4 עסקים בלבד. הקדימו להירשם להבטחת מקומכם.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default PilotInvitation;
