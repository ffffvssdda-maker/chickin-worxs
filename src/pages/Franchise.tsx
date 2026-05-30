import React from 'react';
import { TrendingUp, Users, DollarSign, Award, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function Franchise() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#1A1A1A] text-white pt-20 pb-32 relative overflow-hidden -mt-8">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FF6B00]/20 blur-[150px] mix-blend-screen rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-1.5 mb-6 text-sm font-bold text-[#FFC107] uppercase border border-white/10">
              Franchise Opportunities
            </div>
            <h1 className="heading-display text-5xl md:text-7xl font-black mb-6 leading-tight">
              Invest In A <br />
              <span className="text-[#FF6B00]">Proven Winner.</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-8 max-w-lg">
              Chickin Worx is expanding rapidly. Join our family and bring the best premium fast-casual chicken to your market.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="rounded-full text-lg shadow-lg shadow-[#FF6B00]/25">
                Apply Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="bg-white p-8 rounded-[3rem] shadow-2xl rotate-3 transform-gpu">
              <img 
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2940&auto=format&fit=crop" 
                alt="Restaurant interior" 
                className="rounded-[2rem] w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: DollarSign, label: "Average Unit Volume", value: "EGP 120M" },
              { icon: TrendingUp, label: "YoY Growth", value: "34%" },
              { icon: Award, label: "Initial Investment", value: "EGP 17M+" },
              { icon: Users, label: "Locations Nationwide", value: "50+" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-[#FAFAFA] p-8 rounded-3xl border border-zinc-100 text-center">
                <div className="w-14 h-14 bg-[#FFC107] rounded-full flex items-center justify-center mx-auto mb-4 scale-110">
                  <stat.icon className="w-6 h-6 text-[#1A1A1A]" />
                </div>
                <h3 className="heading-display text-4xl font-black text-[#1A1A1A] mb-2">{stat.value}</h3>
                <p className="font-medium text-zinc-500 uppercase text-sm tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-[#FAFAFA] border-t border-zinc-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-display text-4xl font-black text-[#1A1A1A] mb-4">Request Information</h2>
            <p className="text-zinc-500 text-lg">Leave your details below, and our franchise team will reach out with our extensive franchise disclosure document (FDD).</p>
          </div>
          
          <form className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-zinc-100 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#1A1A1A]">First Name</label>
                <input type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#1A1A1A]">Last Name</label>
                <input type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#1A1A1A]">Email Address</label>
              <input type="email" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#1A1A1A]">Phone Number</label>
              <input type="tel" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#1A1A1A]">Liquid Capital Available</label>
              <select className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]">
                <option>EGP 5M - 12.5M</option>
                <option>EGP 12.5M - 25M</option>
                <option>EGP 25M - 50M</option>
                <option>EGP 50M+</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#1A1A1A]">Areas of Interest (City/State)</label>
              <textarea rows={3} className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"></textarea>
            </div>
            
            <Button size="lg" className="w-full rounded-xl text-lg h-14 mt-4">
              Submit Application
            </Button>
            <p className="text-xs text-center text-zinc-400 mt-4">
              This information is not intended as an offer to sell, or the solicitation of an offer to buy, a franchise. It is for information purposes only.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
