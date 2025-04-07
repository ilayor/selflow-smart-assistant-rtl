
import React from 'react';
import { cn } from '@/lib/utils';
import { MessageSquare, Clock, PieChart, Users, Zap } from 'lucide-react';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="feature-card bg-white p-6 rounded-xl shadow-md"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-selflow-turquoise mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-selflow-darkGray">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-selflow-lightGray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">היתרונות של Selflow</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="animate-slide-up">
            <FeatureCard 
              icon={<MessageSquare className="h-10 w-10" />}
              title="ניהול הודעות חכם"
              description="מענה אוטומטי ללקוחות וניתוב חכם של ההודעות לפי סוג הפנייה"
              delay={100}
            />
          </div>
          <div className="animate-slide-up">
            <FeatureCard 
              icon={<Clock className="h-10 w-10" />}
              title="חיסכון בזמן יקר"
              description="אוטומציה של תהליכים חוזרים ושגרתיים שחוסכת לך שעות עבודה יקרות"
              delay={200}
            />
          </div>
          <div className="animate-slide-up">
            <FeatureCard 
              icon={<PieChart className="h-10 w-10" />}
              title="ניתוח נתונים מתקדם"
              description="דוחות וניתוחים חכמים שעוזרים לך להבין את העסק טוב יותר ולקבל החלטות"
              delay={300}
            />
          </div>
          <div className="animate-slide-up">
            <FeatureCard 
              icon={<Users className="h-10 w-10" />}
              title="ניהול לקוחות"
              description="מעקב אחר היסטוריית לקוחות, העדפות, והתאמת השירות באופן אישי"
              delay={400}
            />
          </div>
          <div className="animate-slide-up">
            <FeatureCard 
              icon={<Zap className="h-10 w-10" />}
              title="פשוט להפעלה"
              description="ממשק ידידותי ואינטואיטיבי שלא דורש ידע טכני או הכשרה מיוחדת"
              delay={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
