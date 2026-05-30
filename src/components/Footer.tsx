import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from './ui/Button';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex flex-col">
              <span className="heading-display text-2xl font-black text-[#FF6B00] leading-none tracking-tight">
                CHICKIN
              </span>
              <span className="heading-display text-2xl font-black text-white leading-none tracking-tight">
                WORX.
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              Crispy. Juicy. Crafted Fresh Every Day. We're on a mission to serve the best chicken in town with bold flavors and premium ingredients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-[#FF6B00] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-[#FF6B00] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-[#FF6B00] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="heading-display text-lg font-bold mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/menu" className="text-zinc-400 hover:text-white transition-colors">Our Menu</Link></li>
              <li><Link to="/locations" className="text-zinc-400 hover:text-white transition-colors">Find a Location</Link></li>
              <li><Link to="/catering" className="text-zinc-400 hover:text-white transition-colors">Catering</Link></li>
              <li><Link to="/franchise" className="text-zinc-400 hover:text-white transition-colors">Franchise With Us</Link></li>
              <li><Link to="/offers" className="text-zinc-400 hover:text-white transition-colors">Special Offers</Link></li>
              <li><Link to="/app" className="text-zinc-400 hover:text-white transition-colors">Get the App</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="heading-display text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-zinc-400 hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/careers" className="text-zinc-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-zinc-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy" className="text-zinc-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-zinc-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h4 className="heading-display text-lg font-bold mb-6">Stay Hungry</h4>
            <p className="text-zinc-400 text-sm mb-4">Join our newsletter for exclusive deals, new menu drops, and more.</p>
            <form className="flex gap-2 mb-8" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-zinc-800 text-white px-4 py-2 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
              />
              <Button type="submit" variant="default" className="shrink-0">
                Subscribe
              </Button>
            </form>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-zinc-400 text-sm">
                <MapPin className="w-4 h-4 text-[#FF6B00]" />
                <span>Swell Lake, Waslet Dahshur Rd, Giza Governorate</span>
              </div>
              <div className="flex items-center space-x-3 text-zinc-400 text-sm">
                <Phone className="w-4 h-4 text-[#FF6B00]" />
                <span>010 10351999</span>
              </div>
              <div className="flex items-center space-x-3 text-zinc-400 text-sm">
                <Mail className="w-4 h-4 text-[#FF6B00]" />
                <span>hello@chickinworx.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Chickin Worx - تشيكن وركس. All rights reserved.</p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span>Halal Certified</span>
            <span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
            <span>100% Fresh</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
