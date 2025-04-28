import React from 'react';
import { Heart, Mail, Phone, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-selflow-darkGray text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="w-full md:w-1/3 flex flex-col items-start">
            <img 
              src="/lovable-uploads/24b0dcfa-72ee-47d4-8483-9dc536178a02.png" 
              alt="Selflow Logo"
              className="h-12 mb-3"
            />
            <p className="text-lg">נבנה באהבה ע"י פרוסיילור סיסטמס, 2025</p>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-3">ניווט מהיר</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-selflow-turquoise transition-colors">היתרונות</a></li>
              <li><a href="#workflow" className="hover:text-selflow-turquoise transition-colors">איך זה עובד</a></li>
              <li><a href="#about" className="hover:text-selflow-turquoise transition-colors">מי אנחנו</a></li>
              <li><a href="#contact" className="hover:text-selflow-turquoise transition-colors">צור קשר</a></li>
              <li><button onClick={scrollToTop} className="hover:text-selflow-turquoise transition-colors">חזרה לראש הדף</button></li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-3">צור קשר</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 ml-2 text-selflow-turquoise" />
                <a href="mailto:prosailorsys@gmail.com" className="hover:text-selflow-turquoise transition-colors">
                  prosailorsys@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 ml-2 text-selflow-turquoise" />
                <a href="tel:0556629293" className="hover:text-selflow-turquoise transition-colors">
                  055-6629293 - סהר
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 ml-2 text-selflow-turquoise" />
                <a href="tel:0558837762" className="hover:text-selflow-turquoise transition-colors">
                  055-8837762 - עילאי
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center space-y-2">
          <p>&copy; {new Date().getFullYear()} Selflow - כל הזכויות שמורות</p>
          <div className="flex justify-center items-center text-sm text-gray-300">
            <ShieldCheck className="h-4 w-4 ml-2 text-selflow-green" />
            המידע שלך מאובטח. Selflow פועלת לפי תקני פרטיות מחמירים.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

