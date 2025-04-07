
import React from 'react';
import { cn } from '@/lib/utils';
import { Rocket } from 'lucide-react';

const PilotInvitation: React.FC = () => {
  return (
    <section id="pilot" className="py-16 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <Rocket className="h-16 w-16 text-selflow-darkGreen mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">הצטרפו לפיילוט!</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            אנו מזמינים אתכם להשתתף בפיילוט חינמי של 4 ימים, בו תוכלו להתנסות במערכת Selflow ולראות כיצד היא יכולה לשפר את ניהול העסק שלכם.
          </p>
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full">
            <h3 className="text-2xl font-bold mb-4">דרישות ההשתתפות:</h3>
            <ul className="text-right text-lg mb-6">
              <li className="mb-2 flex items-center">
                <span className="ml-2 text-selflow-green font-bold">✓</span> גיל 17 ומעלה
              </li>
              <li className="mb-2 flex items-center">
                <span className="ml-2 text-selflow-green font-bold">✓</span> עסק פעיל עם לקוחות קיימים
              </li>
              <li className="flex items-center">
                <span className="ml-2 text-selflow-green font-bold">✓</span> נכונות לתת משוב על המערכת
              </li>
            </ul>
            <p className="text-lg mb-6">
              מספר המקומות בפיילוט מוגבל, הקדימו להירשם!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PilotInvitation;
