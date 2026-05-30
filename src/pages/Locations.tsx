import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { locations } from '../data';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../contexts/LanguageContext';

export default function Locations() {
  const { t, lang } = useLanguage();
  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-8 pb-24">
      <div className="bg-[#FFC107] text-[#1A1A1A] py-16 -mt-8 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <h1 className="heading-display text-5xl md:text-6xl font-black mb-6">{t("Find a Branch")}</h1>
          <p className="text-xl font-medium opacity-80">
            {t("loc_desc")}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
        
        {/* Locations List */}
        <div className="lg:w-1/3 flex flex-col gap-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)'}}>
          {locations.map(loc => (
            <div key={loc.id} className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-sm hover:border-[#FF6B00] transition-colors cursor-pointer text-left rtl:text-right">
              <h3 className="heading-display text-xl font-bold mb-2">{lang === 'ar' && loc.nameAr ? loc.nameAr : loc.name}</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start text-zinc-500 text-sm">
                  <MapPin className="w-5 h-5 mr-3 rtl:ml-3 rtl:mr-0 text-[#FF6B00] shrink-0" />
                  <span>{lang === 'ar' && loc.addressAr ? loc.addressAr : loc.address}<br/>{lang === 'ar' && loc.cityAr ? loc.cityAr : loc.city}, {lang === 'ar' && loc.stateAr ? loc.stateAr : loc.state} {loc.zip}</span>
                </div>
                <div className="flex items-center text-zinc-500 text-sm">
                  <Phone className="w-5 h-5 mr-3 rtl:ml-3 rtl:mr-0 text-[#FF6B00] shrink-0" />
                  <span dir="ltr">{loc.phone}</span>
                </div>
                <div className="flex items-center text-zinc-500 text-sm">
                  <Clock className="w-5 h-5 mr-3 rtl:ml-3 rtl:mr-0 text-[#FF6B00] shrink-0" />
                  <span dir="ltr">{loc.hours}</span>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1 rounded-xl text-sm h-10">
                  <Navigation className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0 rtl:rotate-90" /> {t("Directions")}
                </Button>
                <Button className="flex-1 rounded-xl text-sm h-10">
                  {t("Order Here")}
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
              <p className="font-medium text-lg">{lang === 'ar' ? 'خريطة تفاعلية' : 'Interactive Map Container'}</p>
              <p className="text-sm">{lang === 'ar' ? '(سيتم عرض خريطة تفاعلية هنا)' : '(Google Maps integration would render here)'}</p>
            </div>
          </div>
          
          {/* Mock Map Markers for visual polish */}
          {locations.map((loc, idx) => (
            <div 
              key={loc.id}
              className="absolute top-1/2 left-1/2 flex flex-col items-center animate-bounce"
              style={{
                transform: `translate(calc(-50% + ${idx * 60}px), calc(-50% - ${idx * 40}px))`
              }}
            >
              <div className="bg-[#FF6B00] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg mb-1 whitespace-nowrap">
                {lang === 'ar' && loc.nameAr ? loc.nameAr : loc.name}
              </div>
              <MapPin className="w-8 h-8 text-[#FF6B00] fill-white" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
