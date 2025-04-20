
import React from 'react';
import { Clock, Calendar, Users, MessageSquare, Smartphone } from 'lucide-react';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}> = ({
  icon,
  title,
  description,
  color
}) => {
  return <div className="feature-card bg-white p-8 rounded-xl shadow-lg h-full">
      <div className={`${color} rounded-full p-4 inline-block mb-6`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-lg text-selflow-darkGray">{description}</p>
    </div>;
};

const Features: React.FC = () => {
  return <section id="features" className="py-24 bg-selflow-lightGray">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">מה העסק שלך מרוויח עם Selflow?</h2>
          <p className="text-xl text-selflow-darkGray">אנחנו מבינים את האתגרים היומיומיים של ניהול עסק . הנה איך Selflow הופך את החיים שלך לקלים יותר:</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
          <div className="animate-slide-up">
            <FeatureCard icon={<Clock className="h-8 w-8 text-selflow-green" />} title="חיסכון בזמן יקר" description="חסכו עד 20 שעות בשבוע על ניהול כספים מלאי ודוחות. הזמן הזה יקר, תשקיעו אותו בלקוחות שלכם." color="bg-selflow-yellow bg-opacity-40" />
          </div>
          
          <div className="animate-slide-up">
            <FeatureCard icon={<Calendar className="h-8 w-8 text-selflow-turquoise" />} title="ניהול יומן חכם" description="הודעה אחת וכל המידע על תזכורות ותורים מתעדכן ביומן שלכם." color="bg-selflow-purple bg-opacity-40" />
          </div>
          
          <div className="animate-slide-up">
            <FeatureCard icon={<Users className="h-8 w-8 text-selflow-green" />} title="סדר וארגון" description="עדכון מהיר של המידע בטבלאות ושליחת הודעת עדכון על כך על מנת שתדעו שהמידע שלכם במקום בטוח." color="bg-selflow-turquoise bg-opacity-20" />
          </div>
          
          <div className="animate-slide-up">
            <FeatureCard icon={<MessageSquare className="h-8 w-8 text-selflow-turquoise" />} title="תקשורת אחידה" description="כל ההודעות והתכתובות במקום אחד, עם מעקב מסודר אחרי היסטוריית הלקוחות." color="bg-selflow-yellow bg-opacity-40" />
          </div>
          
          <div className="animate-slide-up md:col-span-2 lg:col-span-1">
            <FeatureCard icon={<Smartphone className="h-8 w-8 text-selflow-green" />} title="ללא צורך באפליקציה" description="פועל דרך WhatsApp - הפלטפורמה שאת והלקוחות שלך כבר משתמשים בה יום-יום." color="bg-selflow-purple bg-opacity-40" />
          </div>
        </div>
        
       {/* Target audience images */}
<div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
  {/* לק ג'ל */}
  <div className="bg-white p-6 rounded-xl shadow-lg">
    <img
      src="/lovable-uploads/7581958b-339a-4fc3-8e1b-1bf07ea55575.png"
      alt="לק ג'ל"
      className="rounded-lg object-cover w-full h-64 mb-4"
    />
    <h3 className="text-xl font-bold text-center">הציפורניים של הלקוחות שלך בעדיפות ראשונה</h3>
  </div>

  {/* ספרים */}
  <div className="bg-white p-6 rounded-xl shadow-lg">
    <img
      src="https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg"
      alt="מספרה"
      className="rounded-lg object-cover w-full h-64 mb-4"
    />
    <h3 className="text-xl font-bold text-center">אתה רק צריך לגזור – אנחנו נדאג לשאר ✂️</h3>
  </div>

  {/* מאפרת */}
  <div className="bg-white p-6 rounded-xl shadow-lg">
    <img
      src="https://images.pexels.com/photos/7587530/pexels-photo-7587530.jpeg"
      alt="מאפרת"
      className="rounded-lg object-cover w-full h-64 mb-4"
    />
    <h3 className="text-xl font-bold text-center">את דואגת לטאצ' – אנחנו לדוחות 💄</h3>
  </div>

  {/* אופה ביתית */}
  <div className="bg-white p-6 rounded-xl shadow-lg">
    <img
      src="https://images.unsplash.com/photo-1606857521015-7c6ebacee52a?auto=format&fit=crop&w=800&q=80"
      alt="אופה ביתית"
      className="rounded-lg object-cover w-full h-64 mb-4"
    />
    <h3 className="text-xl font-bold text-center">את אופה באהבה – ואנחנו נטפל בהזמנות 🍰</h3>
  </div>
</div>

      </div>
    </section>;
};

export default Features;
