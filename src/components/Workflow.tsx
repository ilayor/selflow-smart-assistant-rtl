
import React from 'react';
import { cn } from '@/lib/utils';
import { MessageSquare, Brain, RefreshCw, FileText, Clock } from 'lucide-react';

const WorkflowItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  position: number;
  total: number;
}> = ({ icon, title, description, position, total }) => {
  // Calculate the position around the circle
  const angle = ((Math.PI * 2) / total) * position;
  
  return (
    <div className="circular-flow-item animate-fade-in relative">
      <div className="absolute flex items-center justify-center">
        <div className="bg-white p-4 rounded-full shadow-lg text-selflow-turquoise">
          {icon}
        </div>
        <div className="absolute mt-20 w-48 text-center">
          <h3 className="font-bold mb-1">{title}</h3>
          <p className="text-sm text-selflow-darkGray">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Workflow: React.FC = () => {
  return (
    <section id="workflow" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">איך Selflow עובד?</h2>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
          פלטפורמה חכמה שמפשטת את תהליכי העבודה היומיומיים שלך
        </p>
        
        <div className="relative my-20">
          {/* Central Circle */}
          <div className="relative mx-auto w-80 h-80 border-4 border-selflow-turquoise rounded-full flex items-center justify-center">
            <div className="text-2xl font-bold text-selflow-darkGreen">Selflow</div>
            
            {/* Workflow Items */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2">
              <WorkflowItem 
                icon={<MessageSquare className="h-8 w-8" />}
                title="קבלת הודעות"
                description="הלקוחות שולחים הודעות דרך הערוצים המועדפים עליהם"
                position={0}
                total={5}
              />
            </div>
            
            <div className="absolute top-1/4 -right-24">
              <WorkflowItem 
                icon={<Brain className="h-8 w-8" />}
                title="ניתוח חכם"
                description="המערכת מבינה את תוכן ההודעה ומסווגת אותה"
                position={1}
                total={5}
              />
            </div>
            
            <div className="absolute bottom-0 right-0">
              <WorkflowItem 
                icon={<RefreshCw className="h-8 w-8" />}
                title="עדכון אוטומטי"
                description="הפעלת תהליכים אוטומטיים לפי תוכן ההודעה"
                position={2}
                total={5}
              />
            </div>
            
            <div className="absolute bottom-0 left-0">
              <WorkflowItem 
                icon={<FileText className="h-8 w-8" />}
                title="תיעוד ודוחות"
                description="קבלת דוחות מפורטים וניתוחי מגמות"
                position={3}
                total={5}
              />
            </div>
            
            <div className="absolute top-1/4 -left-24">
              <WorkflowItem 
                icon={<Clock className="h-8 w-8" />}
                title="חיסכון בזמן"
                description="פחות עבודה ידנית, יותר זמן להתמקד בצמיחת העסק"
                position={4}
                total={5}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
