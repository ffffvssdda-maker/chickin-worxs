import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Menu', path: '/menu' },
    { name: 'Locations', path: '/locations' },
    { name: 'Catering', path: '/catering' },
    { name: 'Franchise', path: '/franchise' },
    { name: 'Offers', path: '/offers' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-gray-100 py-3'
            : 'bg-white py-5 border-gray-100'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#FF6B00] flex items-center justify-center shrink-0">
                <div className="w-4 h-4 rounded-full bg-white"></div>
              </div>
              <div className="text-2xl font-extrabold tracking-tighter text-[#1A1A1A] flex items-center">
                CHICKIN<span className="text-[#FF6B00]">WORX</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="font-semibold text-sm text-gray-500 hover:text-[#FF6B00] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-6">
              <div className="text-right hidden lg:block mr-2">
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Estimated Delivery</p>
                <p className="text-sm font-bold text-[#00C853]">22-30 MINS</p>
              </div>
              <Button asChild className="bg-[#1A1A1A] text-white px-8 py-3 rounded-full text-sm font-bold hover:scale-105 transition-transform border-none shadow-none card-shadow-none">
                <Link to="/menu">ORDER NOW</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <Button variant="ghost" className="relative p-2" aria-label="Cart">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#FF6B00] rounded-full"></span>
              </Button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-zinc-900 p-2"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 pb-6 px-4 flex flex-col md:hidden"
          >
            <nav className="flex flex-col space-y-4 text-center mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-2xl heading-display font-bold text-zinc-900 hover:text-[#FF6B00]"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-4">
              <Button className="w-full h-14 text-lg rounded-full">
                <Link to="/menu" className="w-full flex items-center justify-center">Order Now</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
