import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { locations } from '../data';
import { Button } from '../components/ui/Button';

export default function Locations() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-8 pb-24">
      <div className="bg-[#FFC107] text-[#1A1A1A] py-16 -mt-8 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <h1 className="heading-display text-5xl md:text-6xl font-black mb-6">Find a Branch</h1>
          <p className="text-xl font-medium opacity-80">
            Hot, crispy chicken is closer than you think. Find your nearest Chickin Worx for pickup or delivery.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
        
        {/* Locations List */}
        <div className="lg:w-1/3 flex flex-col gap-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)'}}>
          {locations.map(loc => (
            <div key={loc.id} className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-sm hover:border-[#FF6B00] transition-colors cursor-pointer">
              <h3 className="heading-display text-xl font-bold mb-2">{loc.name}</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start text-zinc-500 text-sm">
                  <MapPin className="w-5 h-5 mr-3 text-[#FF6B00] shrink-0" />
                  <span>{loc.address}<br/>{loc.city}, {loc.state} {loc.zip}</span>
                </div>
                <div className="flex items-center text-zinc-500 text-sm">
                  <Phone className="w-5 h-5 mr-3 text-[#FF6B00] shrink-0" />
                  <span>{loc.phone}</span>
                </div>
                <div className="flex items-center text-zinc-500 text-sm">
                  <Clock className="w-5 h-5 mr-3 text-[#FF6B00] shrink-0" />
                  <span>{loc.hours}</span>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1 rounded-xl text-sm h-10">
                  <Navigation className="w-4 h-4 mr-2" /> Directions
                </Button>
                <Button className="flex-1 rounded-xl text-sm h-10">
                  Order Here
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="lg:w-2/3 h-[500px] lg:h-auto min-h-[600px] bg-zinc-200 rounded-3xl overflow-hidden relative border border-zinc-200">
          {/* Simulated Map UI */}
          <div className="absolute inset-0 bg-[#E5E5E5] flex items-center justify-center">
            <div className="text-center text-zinc-400">
              <MapPin className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="font-medium text-lg">Interactive Map Container</p>
              <p className="text-sm">(Google Maps integration would render here)</p>
            </div>
          </div>
          
          {/* Mock Map Markers for visual polish */}
          {locations.map((loc, idx) => (
            <div 
              key={loc.id}
              className="absolute top-1/2 left-1/2 flex flex-col items-center animate-bounce"
              style={{
                transform: `translate(calc(-50% + ${idx * 150}px), calc(-50% - ${idx * 80}px))`
              }}
            >
              <div className="bg-[#FF6B00] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg mb-1 whitespace-nowrap">
                {loc.name}
              </div>
              <MapPin className="w-8 h-8 text-[#FF6B00] fill-white" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
