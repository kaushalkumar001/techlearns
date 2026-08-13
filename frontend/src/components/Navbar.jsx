import React, { useState, useRef } from 'react';
import { ChevronDown, Menu, ArrowRight } from 'lucide-react';
import MegaMenu from './MegaMenu';
import MobileDrawer from './MobileDrawer';
import logo from '../assets/techlearns-logo.png';

export default function Navbar({ onOpenModal }) {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 250); // 250ms grace period allows seamless cursor movement into mega menu
  };

  const handleProgramsClick = (e) => {
    e.preventDefault();
    setIsMegaMenuOpen(!isMegaMenuOpen);
    const element = document.getElementById('programs');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200/80 transition-all duration-300 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative">
        
        {/* Official Techlearns Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Techlearns Logo"
            className="h-7 sm:h-8 w-auto object-contain group-hover:scale-105 transition-transform"
          />
        </a>

        {/* Desktop Links matching screenshot navbar layout */}
        <nav className="hidden lg:flex items-center gap-8">
          
          {/* Programs Dropdown & Scroll Link */}
          <div
            className="py-6 relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="#programs"
              onClick={handleProgramsClick}
              className="flex items-center gap-1.5 text-sm font-semibold text-[#0F1D38] hover:text-[#612D92] transition-colors py-1 cursor-pointer"
            >
              Programs <ChevronDown className={`w-4 h-4 transition-transform ${isMegaMenuOpen ? 'rotate-180 text-[#612D92]' : 'text-gray-500'}`} />
            </a>
          </div>

          <a href="#cel" className="text-sm font-semibold text-[#0F1D38] hover:text-[#612D92] transition-colors">
            About Us
          </a>

          <a href="#pipeline" className="text-sm font-semibold text-[#0F1D38] hover:text-[#612D92] transition-colors">
            Student Life
          </a>

          <a href="#infrastructure" className="text-sm font-semibold text-[#0F1D38] hover:text-[#612D92] transition-colors">
            Admissions
          </a>

          <a href="#faqs" className="text-sm font-semibold text-[#0F1D38] hover:text-[#612D92] transition-colors">
            Contact Us
          </a>

          <a href="#faqs" className="text-sm font-semibold text-[#0F1D38] hover:text-[#612D92] transition-colors">
            Blogs
          </a>
        </nav>

        {/* Action Button: Pill Button reading "Book a free consultation ->" matching screenshot */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenModal()}
            className="hidden sm:inline-flex items-center gap-2 py-3 px-6 rounded-full bg-[#612D92] hover:bg-[#4F1E7E] text-white font-bold text-sm tracking-wide shadow-md shadow-[#612D92]/25 hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer"
          >
            Book a free consultation <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileDrawerOpen(true)}
            className="lg:hidden p-2 rounded-xl text-gray-700 hover:text-[#612D92] hover:bg-purple-50 transition-colors"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mega Menu Overlay */}
        <MegaMenu
          isOpen={isMegaMenuOpen}
          onClose={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setIsMegaMenuOpen(false);
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onOpenModal={onOpenModal}
        />
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
        onOpenModal={onOpenModal}
      />
    </header>
  );
}
