import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkClass = cn(
    "relative text-white font-bold hover:text-selflow-turquoise transition-all duration-300",
    "after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white",
    "after:bottom-[-4px] after:right-0 after:scale-x-0 after:origin-right",
    "after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
  );

  const ctaButtonClass = cn(
    "bg-[#1DD9E3] hover:bg-[#25D366] text-white",
    "px-6 py-2 rounded-full transition-all duration-300",
    "shadow-md hover:shadow-lg transform hover:-translate-y-0.5",
    "font-bold text-base"
  );

  return (
    <header className="fixed w-full z-50 py-2 bg-gradient-to-br from-[#A8E6CF] to-[#25D366]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-bold order-1">
            <a href="/" className="inline-block">
              <img
                src="/lovable-uploads/24b0dcfa-72ee-47d4-8483-9dc536178a02.png"
                alt="Selflow - WhatsApp Smart Assistant"
                className="h-16 object-contain"
              />
            </a>
          </div>

          <nav className="hidden md:flex space-x-8 justify-end items-center order-2 mr-4">
            <a href="#features" className={navLinkClass}>היתרונות</a>
            <a href="#workflow" className={navLinkClass}>איך זה עובד</a>
            <a href="#about" className={navLinkClass}>מי אנחנו</a>
            <a href="#pilot" className={ctaButtonClass}>
              הצטרפות לפיילוט
            </a>
          </nav>

          <button 
            className="md:hidden text-white focus:outline-none order-2"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'סגור תפריט' : 'פתח תפריט'}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-br from-[#A8E6CF] to-[#25D366] shadow-lg py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4 px-4">
              <a 
                href="#features" 
                className="text-white hover:text-selflow-turquoise transition-colors py-2 font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                היתרונות
              </a>
              <a 
                href="#workflow" 
                className="text-white hover:text-selflow-turquoise transition-colors py-2 font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                איך זה עובד
              </a>
              <a 
                href="#about" 
                className="text-white hover:text-selflow-turquoise transition-colors py-2 font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                מי אנחנו
              </a>
              <a 
                href="#pilot" 
                className={cn(ctaButtonClass, "text-center")}
                onClick={() => setIsMenuOpen(false)}
              >
                הצטרפות לפיילוט
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

