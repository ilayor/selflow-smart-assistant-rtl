
import React from 'react';
import { Users, Brain, Zap } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-selflow-lightGray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-10 md:mb-0 flex justify-center">
            <div className="relative">
              <div className="bg-white p-8 rounded-full shadow-xl z-10 relative">
                <Users className="h-24 w-24 text-selflow-turquoise" />
              </div>
              <div className="absolute -top-4 -right-4 bg-selflow-yellow p-6 rounded-full">
                <Brain className="h-12 w-12 text-selflow-green" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-selflow-purple p-6 rounded-full">
                <Zap className="h-12 w-12 text-selflow-green" />
              </div>
            </div>
          </div>
          <div className="md:w-2/3 md:pr-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">מי אנחנו?</h2>
            <p className="text-xl mb-6">
              אנחנו עילאי וסהר, יזמים צעירים בני 23, בעלי ניסיון משותף בעולם העסקים והטכנולוגיה.
            </p>
            <p className="text-xl mb-6">
              הקמנו את Selflow אחרי שראינו איך בעלי עסקים בתחום היופי מתמודדים עם אתגרים יומיומיים של ניהול לקוחות, תיאום תורים, ומענה להודעות.
            </p>
            <p className="text-xl">
              הטכנולוגיה שפיתחנו משלבת בינה מלאכותית, אוטומציה וידע עסקי כדי לאפשר לכם להתמקד במה שבאמת חשוב - האמנות והמקצועיות שלכם, 
              בזמן ש-Selflow מטפל בכל השאר.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
