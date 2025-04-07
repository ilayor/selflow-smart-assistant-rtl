
import React from 'react';
import { cn } from '@/lib/utils';

const Footer: React.FC = () => {
  return (
    <footer className="bg-selflow-darkGray text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-2xl font-bold">Selflow</p>
            <p className="mt-2">העסק שלך, זורם בקלות</p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 md:space-x-reverse text-center md:text-right">
            <div>
              <h3 className="text-lg font-bold mb-2">ניווט מהיר</h3>
              <ul className="space-y-1">
                <li><a href="#features" className="hover:text-selflow-turquoise transition-colors">היתרונות</a></li>
                <li><a href="#workflow" className="hover:text-selflow-turquoise transition-colors">איך זה עובד</a></li>
                <li><a href="#about" className="hover:text-selflow-turquoise transition-colors">מי אנחנו</a></li>
                <li><a href="#pilot" className="hover:text-selflow-turquoise transition-colors">הצטרפות לפיילוט</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-2">צור קשר</h3>
              <ul className="space-y-1">
                <li>info@selflow.co.il</li>
                <li>טלפון: 050-1234567</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <p>&copy; {new Date().getFullYear()} Selflow - כל הזכויות שמורות</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
