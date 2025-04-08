
import React, { useEffect } from 'react';
import { MessageSquare, Brain, RefreshCw, FileText, Clock, MessageCircle, BarChart3, ClipboardList } from 'lucide-react';

const WorkflowItem: React.FC<{
  icon: React.ReactNode;
  animatedIcon: React.ReactNode;
  title: string;
  description: string;
  position: number;
  total: number;
}> = ({
  icon,
  animatedIcon,
  title,
  description,
  position,
  total
}) => {
  // Calculate the position around the circle
  const angle = Math.PI * 2 / total * position;
  
  // Adjust radius for better positioning
  const radius = 200; // Increased radius for better spacing
  
  // Calculate the x and y coordinates
  const x = Math.sin(angle) * radius;
  const y = -Math.cos(angle) * radius;
  
  // Adjust positioning for "פעולה אוטומטית" and "דוחות ותובנות"
  let adjustedX = x;
  let adjustedY = y;
  
  // Adjust specific positions for better display
  if (title === "פעולה אוטומטית" || title === "דוחות ותובנות") {
    // Make slight adjustments to position these items better
    adjustedX = x * 1.1;
    adjustedY = y * 1.1;
  }

  // Determine animation direction based on position
  const slideDirection = position % 2 === 0 ? 'slide-in-right' : 'slide-in-left';
  
  return (
    <div className={`circular-flow-item absolute animate-${slideDirection} transition-all duration-700`} style={{
      transform: `translate(${adjustedX}px, ${adjustedY}px)`,
      animationDelay: `${position * 0.2}s`,
    }}>
      <div className="flex flex-col items-center">
        <div className="bg-white p-4 rounded-full shadow-lg text-selflow-green relative">
          {icon}
          <div className="absolute -top-2 -right-2 bg-selflow-yellow p-1 rounded-full animate-pulse">
            {animatedIcon}
          </div>
        </div>
        <div className="mt-4 bg-white p-3 rounded-lg shadow-md w-48 text-center hover:shadow-xl transition-all duration-300 animate-bounce-small">
          <h3 className="font-bold text-lg mb-1">{title}</h3>
          <p className="text-sm text-selflow-darkGray">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Workflow: React.FC = () => {
  useEffect(() => {
    // Add scroll-triggered animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.circular-flow-item').forEach(item => {
      observer.observe(item);
    });

    return () => {
      document.querySelectorAll('.circular-flow-item').forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="workflow" className="py-28 bg-white relative overflow-hidden">
      {/* Background animation bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bubble-bg bubble-1"></div>
        <div className="bubble-bg bubble-2"></div>
        <div className="bubble-bg bubble-3"></div>
        <div className="bubble-bg bubble-4"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">איך Selflow עובד?</h2>
          <p className="text-xl max-w-3xl mx-auto"> עוזר אישי חכם, מבוסס בינה מלאכותית, שמקבל ממך הוראות ולוקח את העסק שלך קדימה.</p>
        </div>
        
        <div className="relative h-[700px] animate-fade-in">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* Central Circle */}
            <div className="relative w-80 h-80 border-4 border-selflow-turquoise rounded-full flex items-center justify-center bg-gradient-to-br from-white to-selflow-lightGray">
              <div className="text-2xl font-bold text-selflow-darkGreen animate-pulse">Selflow</div>
              
              {/* Workflow Items - with animations and adjusted positions */}
              <WorkflowItem 
                icon={<MessageSquare className="h-8 w-8" />} 
                animatedIcon={<MessageCircle className="h-4 w-4 text-selflow-darkGreen" />}
                title="קבלת הודעות" 
                description="לקוחות שולחים הודעות דרך WhatsApp - הפלטפורמה המוכרת להם" 
                position={0} 
                total={5} 
              />
              
              <WorkflowItem 
                icon={<Brain className="h-8 w-8" />} 
                animatedIcon={<Brain className="h-4 w-4 text-selflow-darkGreen" />}
                title="ניתוח חכם" 
                description="המערכת מבינה את תוכן ההודעה ומסווגת אותה לפי סוג הפנייה" 
                position={1} 
                total={5} 
              />
              
              <WorkflowItem 
                icon={<RefreshCw className="h-8 w-8" />} 
                animatedIcon={<ClipboardList className="h-4 w-4 text-selflow-darkGreen" />}
                title="פעולה אוטומטית" 
                description="תיאום תורים, ניהול הכנסות הוצאות, הכנסת תזכורות ותורים ליומן וקבלת דוחות הכל באופן אוטומטי" 
                position={2} 
                total={5} 
              />
              
              <WorkflowItem 
                icon={<FileText className="h-8 w-8" />} 
                animatedIcon={<BarChart3 className="h-4 w-4 text-selflow-darkGreen" />}
                title="דוחות ותובנות" 
                description="קבלת דוחות מפורטים על הפעילות, המאפשרים לך לקבל החלטות חכמות" 
                position={3} 
                total={5} 
              />
              
              <WorkflowItem 
                icon={<Clock className="h-8 w-8" />}
                animatedIcon={<Clock className="h-4 w-4 text-selflow-darkGreen" />}
                title="חיסכון בזמן" 
                description="פחות עבודה ידנית, יותר זמן להתמקד בעיסוק המקצועי ובלקוחות" 
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
