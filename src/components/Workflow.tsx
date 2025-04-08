
import React from 'react';
import { MessageSquare, Brain, RefreshCw, FileText, Clock } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const WorkflowItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  position: number;
  total: number;
  isMobile: boolean;
}> = ({
  icon,
  title,
  description,
  position,
  total,
  isMobile
}) => {
  // Calculate the position around the circle
  const angle = Math.PI * 2 / total * position;
  
  // Adjust radius based on screen size
  const radius = isMobile ? 120 : 200; // Reduced radius for mobile
  
  // Calculate the x and y coordinates
  const x = Math.sin(angle) * radius;
  const y = -Math.cos(angle) * radius;
  
  // Adjust positioning for "פעולה אוטומטית" and "דוחות ותובנות"
  let adjustedX = x;
  let adjustedY = y;
  
  // Adjust specific positions for better display
  if (title === "פעולה אוטומטית" || title === "דוחות ותובנות") {
    // Make slight adjustments to position these items better
    adjustedX = x * (isMobile ? 1.05 : 1.1);
    adjustedY = y * (isMobile ? 1.05 : 1.1);
  }
  
  // Different animation delay based on position
  const animationDelay = `${0.2 * position}s`;
  
  return (
    <div 
      className="circular-flow-item absolute animate-slide-up" 
      style={{
        transform: `translate(${adjustedX}px, ${adjustedY}px)`,
        transition: 'all 0.4s ease',
        animationDelay: animationDelay
      }}
    >
      <div className="flex flex-col items-center">
        <div className="bg-white p-4 rounded-full shadow-lg text-selflow-green">
          {icon}
        </div>
        <div className={`mt-4 bg-white p-3 rounded-lg shadow-md ${isMobile ? 'w-32' : 'w-48'} text-center`}>
          <h3 className={`font-bold ${isMobile ? 'text-base' : 'text-lg'} mb-1`}>{title}</h3>
          <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-selflow-darkGray`}>{description}</p>
        </div>
      </div>
    </div>
  );
};

const Workflow: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="workflow" className="py-16 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">איך Selflow עובד?</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">עוזר אישי חכם, מבוסס בינה מלאכותית, שמקבל ממך הוראות ולוקח את העסק שלך קדימה.</p>
        </div>
        
        <div className={`relative ${isMobile ? 'h-[500px]' : 'h-[700px]'} animate-fade-in`}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* Central Circle */}
            <div className={`relative ${isMobile ? 'w-60 h-60' : 'w-80 h-80'} border-4 border-selflow-turquoise rounded-full flex items-center justify-center bg-gradient-to-br from-white to-selflow-lightGray`}>
              <div className="text-xl md:text-2xl font-bold text-selflow-darkGreen animate-pulse">Selflow</div>
              
              {/* Workflow Items - adjusted positions */}
              <WorkflowItem 
                icon={<MessageSquare className={`${isMobile ? 'h-6 w-6' : 'h-8 w-8'}`} />} 
                title="קבלת הודעות" 
                description="לקוחות שולחים הודעות דרך WhatsApp - הפלטפורמה המוכרת להם" 
                position={0} 
                total={5}
                isMobile={isMobile}
              />
              
              <WorkflowItem 
                icon={<Brain className={`${isMobile ? 'h-6 w-6' : 'h-8 w-8'}`} />} 
                title="ניתוח חכם" 
                description="המערכת מבינה את תוכן ההודעה ומסווגת אותה לפי סוג הפנייה" 
                position={1} 
                total={5}
                isMobile={isMobile}
              />
              
              <WorkflowItem 
                icon={<RefreshCw className={`${isMobile ? 'h-6 w-6' : 'h-8 w-8'}`} />} 
                title="פעולה אוטומטית" 
                description="תיאום תורים, ניהול הכנסות הוצאות, הכנסת תזכורות ותורים ליומן" 
                position={2} 
                total={5}
                isMobile={isMobile}
              />
              
              <WorkflowItem 
                icon={<FileText className={`${isMobile ? 'h-6 w-6' : 'h-8 w-8'}`} />} 
                title="דוחות ותובנות" 
                description="קבלת דוחות מפורטים על הפעילות, המאפשרים לך לקבל החלטות חכמות" 
                position={3} 
                total={5}
                isMobile={isMobile}
              />
              
              <WorkflowItem 
                icon={<Clock className={`${isMobile ? 'h-6 w-6' : 'h-8 w-8'}`} />} 
                title="חיסכון בזמן" 
                description="פחות עבודה ידנית, יותר זמן להתמקד בעיסוק המקצועי ובלקוחות" 
                position={4} 
                total={5}
                isMobile={isMobile}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
