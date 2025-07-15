import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: "#about", label: "קצת עלינו" },
  { href: "#services", label: "השירותים שלנו" },
  { href: "#contact", label: "צור קשר" },
];

const Header: React.FC = () => {
  return (
    <header className="w-full py-2 bg-gradient-to-br from-[#A8E6CF] to-[#25D366] shadow-sm" dir="rtl">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo on the right */}
        <a href="/" className="flex items-center gap-2">
          <Image
            src="/lovable-uploads/24b0dcfa-72ee-47d4-8483-9dc536178a02.png"
            alt="Selflow - לוגו"
            width={55}
            height={55}
            className="h-12 w-auto object-contain"
            priority
          />
        </a>

        {/* Navigation */}
        <nav className="flex items-center gap-5 md:gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-white font-bold text-base hover:underline hover:underline-offset-4 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          {/* CTA Button */}
          <a
            href="#free-consult"
            className={cn(
              "bg-white text-[#25D366] font-bold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition-all duration-200 border border-[#25D366]",
              "text-base"
            )}
            style={{ minWidth: '128px', textAlign: 'center' }}
          >
            ייעוץ ללא עלות
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
