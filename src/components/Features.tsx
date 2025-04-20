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

        {/* כותרת עליונה */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">מה העסק שלך מרוויח עם Selflow?</h2>
          <p className="text-xl text-selflow-darkGray">
            אנחנו מבינים את האתגרים היומיומיים של ניהול עסק. הנה איך Selflow הופך את החיים שלך לקלים יותר:
          </p>
        </div>

        {/* פיצ'רים */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
          <FeatureCard
            icon={<Clock className="h-8 w-8 text-selflow-green" />}
            title="חיסכון בזמן יקר"
            description="חסכו עד 20 שעות בשבוע על ניהול כספים, מלאי ודוחות. הזמן הזה יקר, תשקיעו אותו בלקוחות שלכם."
            color="bg-selflow-yellow bg-opacity-40"
          />
          <FeatureCard
            icon={<Calendar className="h-8 w-8 text-selflow-turquoise" />}
            title="ניהול יומן חכם"
            description="הודעה אחת וכל המידע על תזכורות ותורים מתעדכן ביומן שלכם."
            color="bg-selflow-purple bg-opacity-40"
          />
          <FeatureCard
            icon={<Users className="h-8 w-8 text-selflow-green" />}
            title="סדר וארגון"
            description="עדכון מהיר של המידע בטבלאות ושליחת הודעת עדכון על כך, כדי שתדעו שהמידע שלכם במקום בטוח."
            color="bg-selflow-turquoise bg-opacity-20"
          />
          <FeatureCard
            icon={<MessageSquare className="h-8 w-8 text-selflow-turquoise" />}
            title="תקשורת אחידה"
            description="כל ההודעות והתכתובות במקום אחד, עם מעקב מסודר אחרי היסטוריית הלקוחות."
            color="bg-selflow-yellow bg-opacity-40"
          />
          <FeatureCard
            icon={<Smartphone className="h-8 w-8 text-selflow-green" />}
            title="ללא צורך באפליקציה"
            description="פועל דרך WhatsApp - הפלטפורמה שאת והלקוחות שלך כבר משתמשים בה יום-יום."
            color="bg-selflow-purple bg-opacity-40"
          />
        </div>

        {/* קהלי יעד */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* ספרים */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <img
              src="https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg"
              alt="ספר - קהל היעד"
              className="rounded-lg object-cover w-full h-64 mb-4"
            />
            <h3 className="text-xl font-bold text-center">אתה רק צריך לגזור – אנחנו נדאג לשאר ✂️</h3>
          </div>

          {/* לק ג'ל */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <img
              src="https://selflow-smart-assistant-rtl.lovable.app/lovable-uploads/nails.png"
              alt="לק ג'ל - קהל היעד"
              className="rounded-lg object-cover w-full h-64 mb-4"
            />
            <h3 className="text-xl font-bold text-center">הציפורניים שלך – הניהול שלנו 💅</h3>
          </div>

          {/* מאפרת */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <img
              src="https://selflow-smart-assistant-rtl.lovable.app/lovable-uploads/makeup.png"
              alt="מאפרת - קהל היעד"
              className="rounded-lg object-cover w-full h-64 mb-4"
            />
            <h3 className="text-xl font-bold text-center">את דואגת לטאצ' – אנחנו לדוחות 💄</h3>
          </div>

          {/* אופה ביתית */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <img
              src="https://selflow-smart-assistant-rtl.lovable.app/lovable-uploads/baking.png"
              alt="אופה ביתית - קהל היעד"
              className="rounded-lg object-cover w-full h-64 mb-4"
            />
            <h3 className="text-xl font-bold text-center">את אופה באהבה – ואנחנו נטפל בהזמנות 🍰</h3>
          </div>

          {/* כל עסק אחר - מיושר למרכז */}
          <div className="sm:col-span-2 flex justify-center">
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full">
              <img
                src="https://selflow-smart-assistant-rtl.lovable.app/lovable-uploads/A_photograph_of_a_young_Caucasian_man_with_light_s.png"
                alt="בעל עסק מנופף לשלום בכניסה לחנות"
                className="rounded-lg object-cover w-full h-64 mb-4"
              />
              <h3 className="text-xl font-bold text-center">
                בעל עסק אחר? <br /> נתאים את Selflow במיוחד עבורך 🙌
              </h3>
            </div>
          </div>
        </div>

        {/* הדמיה של שיחה בוואטסאפ */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <img
              src="https://selflow-smart-assistant-rtl.lovable.app/lovable-uploads/7581958b-339a-4fc3-8e1b-1bf07ea55575.png"
              alt="שיחת WhatsApp עם Selflow"
              className="rounded-lg shadow-xl mb-4 mx-auto"
            />
            <p className="text-lg mt-4">שיחה יותר יעילה מזו לא תמצאו 😊</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;


