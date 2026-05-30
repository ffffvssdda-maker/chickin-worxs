/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Locations from './pages/Locations';
import Franchise from './pages/Franchise';
import { LanguageProvider } from './contexts/LanguageContext';

// Mock component for pages that share a simple layout to save resources
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen bg-white pt-10 pb-32 flex items-center justify-center">
    <div className="text-center max-w-2xl px-4">
      <div className="bg-[#FFC107] text-[#1A1A1A] text-sm font-bold uppercase tracking-widest px-4 py-1 rounded-full inline-block mb-6">Coming Soon</div>
      <h1 className="heading-display text-5xl md:text-6xl font-black mb-6 text-[#1A1A1A]">{title}</h1>
      <p className="text-xl text-zinc-500">We're cooking up something special for this page. Please check back later.</p>
    </div>
  </div>
);

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="locations" element={<Locations />} />
            <Route path="franchise" element={<Franchise />} />
            
            {/* Simple Placeholders for the rest of the requested pages */}
            <Route path="catering" element={<PlaceholderPage title="Catering Services" />} />
            <Route path="about" element={<PlaceholderPage title="Our Story" />} />
            <Route path="careers" element={<PlaceholderPage title="Join The Team" />} />
            <Route path="contact" element={<PlaceholderPage title="Contact Us" />} />
            <Route path="offers" element={<PlaceholderPage title="Special Offers" />} />
            <Route path="app" element={<PlaceholderPage title="Mobile App" />} />
            <Route path="privacy" element={<PlaceholderPage title="Privacy Policy" />} />
            <Route path="terms" element={<PlaceholderPage title="Terms of Service" />} />

            {/* Catch-all */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
