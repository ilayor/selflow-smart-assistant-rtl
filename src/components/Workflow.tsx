import React from 'react';
import { MessageSquare, Brain, RefreshCw, FileText, Clock } from 'lucide-react';
const WorkflowItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  position: number;
  total: number;
}> = ({
  icon,
  title,
  description,
  position,
  total
}) => {
  // Calculate the position around the circle
  const angle = Math.PI * 2 / total * position;
  const radius = 150; // radius of the circle

  // Calculate the x and y coordinates
  const x = Math.sin(angle) * radius;
  const y = -Math.cos(angle) * radius;
  return <div className="circular-flow-item absolute" style={{
    transform: `translate(${x}px, ${y}px)`,
    transition: 'all 0.4s ease'
  }}>
      <div className="flex flex-col items-center">
        <div className="bg-white p-4 rounded-full shadow-lg text-selflow-green">
          {icon}
        </div>
        <div className="mt-4 bg-white p-3 rounded-lg shadow-md w-48 text-center">
          <h3 className="font-bold text-lg mb-1">{title}</h3>
          <p className="text-sm text-selflow-darkGray">{description}</p>
        </div>
      </div>
    </div>;
};
const Workflow: React.FC = () => {
  return <section id="workflow" className="py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">איך Selflow עובד?</h2>
          <p className="text-xl max-w-3xl mx-auto"> עוזר אישי חכם, מבוסס בינה מלאכותית, שמקבל ממך הוראות ולוקח את העסק שלך קדימה.</p>
        </div>
        
        <div className="relative h-[600px] animate-fade-in">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* Central Circle */}
            <div className="relative w-80 h-80 border-4 border-selflow-turquoise rounded-full flex items-center justify-center bg-gradient-to-br from-white to-selflow-lightGray">
              <div className="text-2xl font-bold text-selflow-darkGreen animate-pulse">Selflow</div>
              
              {/* Workflow Items */}
              <WorkflowItem icon={<MessageSquare className="h-8 w-8" />} title="קבלת הודעות" description="לקוחות שולחים הודעות דרך WhatsApp - הפלטפורמה המוכרת להם" position={0} total={5} />
              
              <WorkflowItem icon={<Brain className="h-8 w-8" />} title="ניתוח חכם" description="המערכת מבינה את תוכן ההודעה ומסווגת אותה לפי סוג הפנייה" position={1} total={5} />
              
              <WorkflowItem icon={<RefreshCw className="h-8 w-8" />} title="פעולה אוטומטית" description="תיאום תורים, ניהול הכנסות הוצאות, הכנסת תזכורות ותורים ליומן וקבלת דוחות הכל באופן אוטומטי" position={2} total={5} />
              
              <WorkflowItem icon={<FileText className="h-8 w-8" />} title="דוחות ותובנות" description="קבלת דוחות מפורטים על הפעילות, המאפשרים לך לקבל החלטות חכמות" position={3} total={5} />
              
              <WorkflowItem icon={<Clock className="h-8 w-8" />} title="חיסכון בזמן" description="פחות עבודה ידנית, יותר זמן להתמקד בעיסוק המקצועי ובלקוחות" position={4} total={5} />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Workflow;