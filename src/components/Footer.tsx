
import React from 'react';
import { Heart, Instagram, Facebook, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-selflow-darkGray text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="text-3xl font-bold text-selflow-turquoise mb-2">Selflow</div>
            <p className="text-lg">נבנה באהבה ע"י פרוסיילור סיסטמס, 2025</p>
            <div className="flex items-center mt-4">
              <Heart className="h-5 w-5 text-selflow-green mr-1" />
              <p>נבנה באהבה בישראל, 2025</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12 md:space-x-reverse">
            <div>
              <h3 className="text-xl font-bold mb-3">ניווט מהיר</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-selflow-turquoise transition-colors">היתרונות</a></li>
                <li><a href="#workflow" className="hover:text-selflow-turquoise transition-colors">איך זה עובד</a></li>
                <li><a href="#about" className="hover:text-selflow-turquoise transition-colors">מי אנחנו</a></li>
                <li><a href="#pilot" className="hover:text-selflow-turquoise transition-colors">הצטרפות לפיילוט</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">צור קשר</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Mail className="h-5 w-5 ml-2 text-selflow-turquoise" />
                  <a href="mailto:info@selflow.co.il" className="hover:text-selflow-turquoise transition-colors">prosailorsys@gmail.com</a>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 ml-2 text-selflow-turquoise" />
                  <a href="tel:0501234567" className="hover:text-selflow-turquoise transition-colors">0556629293 - סהר </a>
                </li>
              </ul>
              <div className="flex space-x-4 mt-3">
                
                
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Selflow - כל הזכויות שמורות</p>
          <p className="mt-2 text-selflow-turquoise animate-fade-in">Selflow - ניהול חכם דרך WhatsApp ✨</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
