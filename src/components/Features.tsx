
import React from 'react';
import { Clock, Calendar, Users, MessageSquare, Smartphone } from 'lucide-react';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}> = ({ icon, title, description, color }) => {
  return (
    <div className="feature-card bg-white p-8 rounded-xl shadow-lg h-full">
      <div className={`${color} rounded-full p-4 inline-block mb-6`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-lg text-selflow-darkGray">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-selflow-lightGray">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">מה העסק שלך מרוויח עם Selflow?</h2>
          <p className="text-xl text-selflow-darkGray">
            אנחנו מבינים את האתגרים היומיומיים של ניהול עסק בתחום היופי. הנה איך Selflow הופך את החיים שלך לקלים יותר:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
          <div className="animate-slide-up">
            <FeatureCard 
              icon={<Clock className="h-8 w-8 text-selflow-green" />}
              title="חיסכון בזמן יקר"
              description="חסכו עד 20 שעות בשבוע בניהול הודעות, קביעת תורים וניהול לקוחות."
              color="bg-selflow-yellow bg-opacity-40"
            />
          </div>
          
          <div className="animate-slide-up">
            <FeatureCard 
              icon={<Calendar className="h-8 w-8 text-selflow-turquoise" />}
              title="ניהול יומן חכם"
              description="תיאום תורים אוטומטי, תזכורות ללקוחות, והתראות על ביטולים - הכל באופן אוטומטי."
              color="bg-selflow-purple bg-opacity-40"
            />
          </div>
          
          <div className="animate-slide-up">
            <FeatureCard 
              icon={<Users className="h-8 w-8 text-selflow-green" />}
              title="הגדלת שביעות רצון"
              description="שירות מהיר ואישי ללקוחות שלך, עם מענה מיידי לשאלות נפוצות בכל שעה."
              color="bg-selflow-turquoise bg-opacity-20"
            />
          </div>
          
          <div className="animate-slide-up">
            <FeatureCard 
              icon={<MessageSquare className="h-8 w-8 text-selflow-turquoise" />}
              title="תקשורת אחידה"
              description="כל ההודעות והתכתובות במקום אחד, עם מעקב מסודר אחרי היסטוריית הלקוחות."
              color="bg-selflow-yellow bg-opacity-40"
            />
          </div>
          
          <div className="animate-slide-up md:col-span-2 lg:col-span-1">
            <FeatureCard 
              icon={<Smartphone className="h-8 w-8 text-selflow-green" />}
              title="ללא צורך באפליקציה"
              description="פועל דרך WhatsApp - הפלטפורמה שאת והלקוחות שלך כבר משתמשים בה יום-יום."
              color="bg-selflow-purple bg-opacity-40"
            />
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-2xl font-bold text-selflow-darkGreen mb-8">״מאז שהתחלתי להשתמש ב-Selflow, העסק שלי מסודר, אני פחות לחוצה, והלקוחות מרוצים יותר!״</p>
          <p className="text-lg">- מיכל, מעצבת ציפורניים, תל אביב</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
