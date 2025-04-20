import React from 'react';
import { MessageSquare, Brain, RefreshCw, FileText, Clock } from 'lucide-react';

const workflowSteps = [
  {
    icon: <MessageSquare className="h-6 w-6 md:h-8 md:w-8 text-white" />,
    title: "קבלת הודעות",
    description: "שליחת הודעה לעוזר האישי בוואטסאפ"
  },
  {
    icon: <Brain className="h-6 w-6 md:h-8 md:w-8 text-white" />,
    title: "ניתוח חכם",
    description: "המערכת מבינה את תוכן ההודעה ומסווגת אותה לפי סוג הפנייה"
  },
  {
    icon: <RefreshCw className="h-6 w-6 md:h-8 md:w-8 text-white" />,
    title: "פעולה אוטומטית",
    description: "ניהול הכנסות, הוצאות, מלאי, יומן ותיאומים – בלי להקליד"
  },
  {
    icon: <FileText className="h-6 w-6 md:h-8 md:w-8 text-white" />,
    title: "דוחות ותובנות",
    description: "קבלת דוחות חכמים על הפעילות והביצועים שלך"
  },
  {
    icon: <Clock className="h-6 w-6 md:h-8 md:w-8 text-white" />,
    title: "חיסכון בזמן",
    description: "פחות עבודת ניירת, יותר זמן להתמקד בעסק ובלקוחות"
  }
];

const Workflow: React.FC = () => {
  return (
    <section id="workflow" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">איך Selflow עובד?</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            עוזר אישי חכם, מבוסס בינה מלאכותית, שמקבל ממך הוראות ולוקח את העסק שלך קדימה.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:flex justify-between relative max-w-6xl mx-auto">
          {/* קו מחבר עליון */}
          <div className="absolute top-10 left-0 right-0 h-1 bg-gray-200 z-0" />
          
          {workflowSteps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center w-1/5 px-2">
              <div className="bg-selflow-green p-4 rounded-full shadow-lg mb-4">
                {step.icon}
              </div>
              <h4 className="font-bold text-lg mb-2">{step.title}</h4>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile stacked cards */}
        <div className="md:hidden flex flex-col gap-6 mt-4">
          {workflowSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-xl shadow">
              <div className="bg-selflow-green p-4 rounded-full shadow-md mb-4">
                {step.icon}
              </div>
              <h4 className="font-bold text-lg mb-2">{step.title}</h4>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;

