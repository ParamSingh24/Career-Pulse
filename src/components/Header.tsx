
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="font-bold">
              <span className="text-xs uppercase tracking-widest text-gray-500 block">Kalpathon</span>
              <span className="text-lg">BBD CareerPulse</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Features</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Resources</a>
            <div className="pl-4 flex items-center space-x-3 border-l border-gray-200">
              <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Log in</a>
              <Button size="sm" className="bg-black hover:bg-gray-800 text-white">
                Sign up free
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-sm font-medium text-gray-600 px-2 py-1">Features</a>
              <a href="#" className="text-sm font-medium text-gray-600 px-2 py-1">Pricing</a>
              <a href="#" className="text-sm font-medium text-gray-600 px-2 py-1">Resources</a>
              <a href="#" className="text-sm font-medium text-gray-600 px-2 py-1">Log in</a>
              <Button size="sm" className="bg-black hover:bg-gray-800 text-white">
                Sign up free
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
