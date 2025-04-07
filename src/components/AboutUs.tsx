
import React from 'react';
import { cn } from '@/lib/utils';
import { Users } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-selflow-lightGray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-10 md:mb-0 flex justify-center">
            <div className="bg-white p-8 rounded-full shadow-xl">
              <Users className="h-24 w-24 text-selflow-turquoise" />
            </div>
          </div>
          <div className="md:w-2/3 md:pr-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">מי אנחנו?</h2>
            <p className="text-xl mb-6">
              אנחנו עילאי וסהר, יזמים צעירים בני 23, שחוו על בשרנו את האתגרים של ניהול עסק קטן.
            </p>
            <p className="text-xl mb-6">
              הקמנו את Selflow מתוך הבנה עמוקה של הצרכים האמיתיים של בעלי עסקים, והחזון שלנו הוא פשוט:
              לאפשר לכל בעל עסק לנהל את העסק שלו בצורה חכמה יותר, פשוטה יותר, ועם פחות מאמץ.
            </p>
            <p className="text-xl">
              הטכנולוגיה שפיתחנו מאפשרת לכם להתמקד במה שבאמת חשוב - פיתוח העסק והתמקדות בלקוחות,
              בזמן שאנחנו מטפלים בכל השאר.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
