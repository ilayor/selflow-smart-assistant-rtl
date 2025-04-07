
import React from 'react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  return (
    <header className="p-4 absolute w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold text-selflow-darkGreen">
          Selflow
        </div>
        <nav className="hidden md:flex space-x-6 space-x-reverse">
          <a href="#features" className="text-selflow-darkGray hover:text-selflow-turquoise transition-colors">היתרונות</a>
          <a href="#workflow" className="text-selflow-darkGray hover:text-selflow-turquoise transition-colors">איך זה עובד</a>
          <a href="#about" className="text-selflow-darkGray hover:text-selflow-turquoise transition-colors">מי אנחנו</a>
          <a href="#pilot" className="text-selflow-darkGray hover:text-selflow-turquoise transition-colors">הצטרפות לפיילוט</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
