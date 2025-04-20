
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full z-50 py-4 bg-gradient-to-br from-[#A8E6CF] to-[#25D366]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Updated logo with larger size */}
          <div className="text-3xl font-bold">
            <a href="/" className="inline-block">
              <img
                src="/lovable-uploads/24b0dcfa-72ee-47d4-8483-9dc536178a02.png"
                alt="Selflow - WhatsApp Smart Assistant"
                className="h-16 object-contain" // Increased from h-12 to h-16
              />
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'סגור תפריט' : 'פתח תפריט'}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8 space-x-reverse">
            <a 
              href="#features" 
              className="text-white hover:text-selflow-turquoise transition-colors"
            >
              היתרונות
            </a>
            <a 
              href="#workflow" 
              className="text-white hover:text-selflow-turquoise transition-colors"
            >
              איך זה עובד
            </a>
            <a 
              href="#about" 
              className="text-white hover:text-selflow-turquoise transition-colors"
            >
              מי אנחנו
            </a>
            <a 
              href="#pilot" 
              className="bg-[#1DD9E3] hover:bg-[#25D366] text-white px-6 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg font-bold"
            >
              הצטרפות לפיילוט
            </a>
          </nav>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-br from-[#A8E6CF] to-[#25D366] shadow-lg py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4 px-4">
              <a 
                href="#features" 
                className="text-white hover:text-selflow-turquoise transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                היתרונות
              </a>
              <a 
                href="#workflow" 
                className="text-white hover:text-selflow-turquoise transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                איך זה עובד
              </a>
              <a 
                href="#about" 
                className="text-white hover:text-selflow-turquoise transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                מי אנחנו
              </a>
              <a 
                href="#pilot" 
                className="bg-[#1DD9E3] hover:bg-[#25D366] text-white px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg font-bold text-center"
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
