import React from 'react';
import { MessageSquare, Brain, RefreshCw, FileText, Clock } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const workflowItems = [
  {
    icon: <MessageSquare className="h-8 w-8 md:h-10 md:w-10 text-white" />,
    title: "קבלת הודעות",
    description: "שליחת הודעה לעוזר האישי בצ'אט הוואצאפ"
  },
  {
    icon: <Brain className="h-8 w-8 md:h-10 md:w-10 text-white" />,
    title: "ניתוח חכם",
    description: "המערכת מבינה את תוכן ההודעה ומסווגת אותה לפי סוג הפנייה"
  },
  {
    icon: <RefreshCw className="h-8 w-8 md:h-10 md:w-10 text-white" />,
    title: "פעולה אוטומטית",
    description: "תיאום תורים, ניהול הכנסות והוצאות, ניהול מלאי ותזכורות ליומן"
  },
  {
    icon: <FileText className="h-8 w-8 md:h-10 md:w-10 text-white" />,
    title: "דוחות ותובנות",
    description: "קבלת דוחות מפורטים על הפעילות כדי לקבל החלטות חכמות"
  },
  {
    icon: <Clock className="h-8 w-8 md:h-10 md:w-10 text-white" />,
    title: "חיסכון בזמן",
    description: "פחות עבודה ידנית – יותר זמן להתמקד בעסק ובלקוחות"
  }
];

const Workflow: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section id="workflow" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">איך Selflow עובד?</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            עוזר אישי חכם, מבוסס בינה מלאכותית, שמקבל ממך הוראות ולוקח את העסק שלך קדימה.
          </p>
        </div>

        {/* תצוגת מובייל: רשימה אנכית */}
        {isMobile ? (
          <div className="flex flex-col gap-6 max-w-2xl mx-auto">
            {workflowItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-selflow-green p-4 rounded-full shadow-lg mb-4">
                  {item.icon}
                </div>
                <div className="bg-gray-50 p-4 rounded-xl shadow-md w-full text-center">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // תצוגת דסקטופ: שלבים עם קווים
          <div className="relative flex justify-between items-start max-w-5xl mx-auto px-6">
            {workflowItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center w-1/5 relative">
                {/* קו מחבר בין השלבים */}
                {index !== workflowItems.length - 1 && (
                  <div className="absolute top-8 left-1/2 w-full h-1 bg-gray-300 z-0" style={{ transform: 'translateX(50%)' }}></div>
                )}
                <div className="z-10 bg-selflow-green p-4 rounded-full shadow-md mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Workflow;
