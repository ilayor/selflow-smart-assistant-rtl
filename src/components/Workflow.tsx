
import React from 'react';
import { MessageSquare, Brain, RefreshCw, FileText, Clock } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

// רכיב כרטיסייה עבור תצוגת מובייל ודסקטופ - מוצג כפריט ברשימה אנכית
const WorkflowItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}> = ({
  icon,
  title,
  description,
  index
}) => {
  // זמן השהייה לאנימציה מדורגת
  const animationDelay = `${0.1 * (index + 1)}s`;
  
  return (
    <div 
      className="flex flex-col items-center mb-6 w-[90%] mx-auto animate-slide-up"
      style={{ animationDelay }}
    >
      <div className="bg-white p-4 rounded-full shadow-lg text-selflow-green mb-3">
        {icon}
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md w-full text-center">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-sm text-selflow-darkGray">{description}</p>
      </div>
    </div>
  );
};

const Workflow: React.FC = () => {
  const isMobile = useIsMobile();

  // פריטי העבודה - הוצאנו למשתנה כדי להשתמש גם בתצוגת מובייל וגם בתצוגת דסקטופ
  const workflowItems = [
    {
      icon: <MessageSquare className={`${isMobile ? 'h-6 w-6' : 'h-8 w-8'}`} />,
      title: "קבלת הודעות",
      description: "לקוחות שולחים הודעות דרך WhatsApp - הפלטפורמה המוכרת להם"
    },
    {
      icon: <Brain className={`${isMobile ? 'h-6 w-6' : 'h-8 w-8'}`} />,
      title: "ניתוח חכם",
      description: "המערכת מבינה את תוכן ההודעה ומסווגת אותה לפי סוג הפנייה"
    },
    {
      icon: <RefreshCw className={`${isMobile ? 'h-6 w-6' : 'h-8 w-8'}`} />,
      title: "פעולה אוטומטית",
      description: "תיאום תורים, ניהול הכנסות הוצאות, הכנסת תזכורות ותורים ליומן"
    },
    {
      icon: <FileText className={`${isMobile ? 'h-6 w-6' : 'h-8 w-8'}`} />,
      title: "דוחות ותובנות",
      description: "קבלת דוחות מפורטים על הפעילות, המאפשרים לך לקבל החלטות חכמות"
    },
    {
      icon: <Clock className={`${isMobile ? 'h-6 w-6' : 'h-8 w-8'}`} />,
      title: "חיסכון בזמן",
      description: "פחות עבודה ידנית, יותר זמן להתמקד בעיסוק המקצועי ובלקוחות"
    }
  ];
  
  return (
    <section id="workflow" className="py-16 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">איך Selflow עובד?</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">עוזר אישי חכם, מבוסס בינה מלאכותית, שמקבל ממך הוראות ולוקח את העסק שלך קדימה.</p>
        </div>
        
        {/* תצוגה אחידה למובייל ודסקטופ - רשימה אנכית של כרטיסיות */}
        <div className="flex flex-col items-center py-4 max-w-3xl mx-auto">
          {workflowItems.map((item, index) => (
            <WorkflowItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
