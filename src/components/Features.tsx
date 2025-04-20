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
          <p className="text-xl text-selflow-darkGray">אנחנו מבינים את האתגרים היומיומיים של ניהול עסק. הנה איך Selflow הופך את החיים שלך לקלים יותר:</p>
        </div>

        {/* תכונות המערכת */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation mb-24">
          <FeatureCard icon={<Clock className="h-8 w-8 text-selflow-green" />} title="חיסכון בזמן יקר" description="חסכו עד 20 שעות בשבוע על ניהול כספים, מלאי ודוחות. הזמן הזה יקר – תשקיעו אותו בלקוחות שלכם." color="bg-selflow-yellow bg-opacity-40" />
          <FeatureCard icon={<Calendar className="h-8 w-8 text-selflow-turquoise" />} title="ניהול יומן חכם" description="הודעה אחת וכל המידע על תזכורות ותורים מתעדכן ביומן שלכם." color="bg-selflow-purple bg-opacity-40" />
          <FeatureCard icon={<Users className="h-8 w-8 text-selflow-green" />} title="סדר וארגון" description="עדכון מהיר של נתונים בטבלאות ושליחת הודעת אישור שמוודאת שהכל במקום." color="bg-selflow-turquoise bg-opacity-20" />
          <FeatureCard icon={<MessageSquare className="h-8 w-8 text-selflow-turquoise" />} title="תקשורת אחידה" description="כל ההודעות והתכתובות במקום אחד, עם היסטוריה מלאה של לקוחות." color="bg-selflow-yellow bg-opacity-40" />
          <FeatureCard icon={<Smartphone className="h-8 w-8 text-selflow-green" />} title="ללא צורך באפליקציה" description="פועל דרך WhatsApp – הפלטפורמה שאת והלקוחות שלך כבר רגילים אליה." color="bg-selflow-purple bg-opacity-40" />
        </div>

        {/* קהלי יעד – 4 מקצועות */}
        <div className="mt-10 mb-24 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* לק ג'ל */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <img
              src="/lovable-uploads/ab560a2a-a027-46a9-9cd0-8c40069072f1.png"
              alt="לק ג'ל"
              className="rounded-lg object-cover w-full h-64 mb-4"
            />
            <h3 className="text-xl font-bold text-center">הציפורניים שלך – את הסדר השאירי לנו 💅</h3>
          </div>

          {/* ספרים */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <img
              src="https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg"
              alt="מספרה"
              className="rounded-lg object-cover w-full h-64 mb-4"
            />
            <h3 className="text-xl font-bold text-center">אתה רק צריך לגזור – אנחנו נסדר את השאר ✂️</h3>
          </div>

          {/* מאפרות */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <img
              src="/lovable-uploads/16b94f31-e96e-46c3-9f51-bb829d9cc1ad.png"
              alt="מאפרת"
              className="rounded-lg object-cover w-full h-64 mb-4"
            />
            <h3 className="text-xl font-bold text-center">את דואגת לטאצ' – אנחנו לניהול 💄</h3>
          </div>

          {/* אופה ביתית */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <img
              src="/lovable-uploads/29482ded-e100-44d4-87b1-fd4d2b6d1b16.png"
              alt="אופה ביתית"
              className="rounded-lg object-cover w-full h-64 mb-4"
            />
            <h3 className="text-xl font-bold text-center">את אופה באהבה – ואנחנו מטפלים בהזמנות 🍰</h3>
          </div>
        </div>

        {/* הדמיית שיחת WhatsApp */}
        <div className="text-center mt-20">
          <div className="max-w-4xl mx-auto">
            <img
              src="/lovable-uploads/7581958b-339a-4fc3-8e1b-1bf07ea55575.png"
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
