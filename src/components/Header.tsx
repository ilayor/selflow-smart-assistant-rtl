
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-white shadow-md' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className={`text-3xl font-bold ${isScrolled ? 'text-selflow-darkGreen' : 'text-selflow-darkGreen'}`}>
            Selflow
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-selflow-darkGreen focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'סגור תפריט' : 'פתח תפריט'}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8 space-x-reverse">
            <a 
              href="#features" 
              className={`hover:text-selflow-turquoise transition-colors ${
                isScrolled ? 'text-selflow-darkGray' : 'text-selflow-darkGray'
              }`}
            >
              היתרונות
            </a>
            <a 
              href="#workflow" 
              className={`hover:text-selflow-turquoise transition-colors ${
                isScrolled ? 'text-selflow-darkGray' : 'text-selflow-darkGray'
              }`}
            >
              איך זה עובד
            </a>
            <a 
              href="#about" 
              className={`hover:text-selflow-turquoise transition-colors ${
                isScrolled ? 'text-selflow-darkGray' : 'text-selflow-darkGray'
              }`}
            >
              מי אנחנו
            </a>
            <a 
              href="#pilot" 
              className="bg-selflow-green hover:bg-selflow-darkGreen text-white px-4 py-2 rounded-full transition-colors"
            >
              הצטרפות לפיילוט
            </a>
          </nav>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4 px-4">
              <a 
                href="#features" 
                className="text-selflow-darkGray hover:text-selflow-turquoise transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                היתרונות
              </a>
              <a 
                href="#workflow" 
                className="text-selflow-darkGray hover:text-selflow-turquoise transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                איך זה עובד
              </a>
              <a 
                href="#about" 
                className="text-selflow-darkGray hover:text-selflow-turquoise transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                מי אנחנו
              </a>
              <a 
                href="#pilot" 
                className="bg-selflow-green hover:bg-selflow-darkGreen text-white px-4 py-2 rounded-full transition-colors inline-block text-center"
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
