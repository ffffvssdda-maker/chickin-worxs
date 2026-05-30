import React, { useEffect } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'motion/react';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
      
      {/* Global Floating Order Button */}
      {pathname !== '/menu' && (
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="fixed bottom-6 right-6 z-50 lg:hidden"
        >
          <Link 
            to="/menu"
            className="flex items-center justify-center space-x-2 bg-[#FF6B00] hover:bg-[#E66000] text-white px-6 py-4 rounded-full shadow-2xl shadow-[#FF6B00]/40 font-bold heading-display text-lg"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Order Now</span>
          </Link>
        </motion.div>
      )}
    </div>
  );
}
