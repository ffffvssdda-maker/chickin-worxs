import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Info, Plus } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { menuItems, categories } from '../data';
import { cn } from '../lib/utils';
import { useLanguage } from '../contexts/LanguageContext';

export default function Menu() {
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = menuItems.filter(item => {
    const itemCategory = lang === 'ar' && item.categoryAr ? item.categoryAr : item.category;
    const matchesCategory = activeCategory === 'All' || itemCategory === activeCategory || item.category === activeCategory;
    const searchTarget = lang === 'ar' ? `${item.nameAr || item.name} ${item.descriptionAr || item.description}` : `${item.name} ${item.description}`;
    
    const matchesSearch = searchTarget.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayCategories = categories.map(cat => {
    if (lang === 'en') return cat;
    // Map existing categories to Arabic for display if needed
    const translations: Record<string, string> = {
      "Sandwiches": "سندوتشات",
      "Tenders": "تندرز",
      "Sides": "أطباق جانبية",
      "Family Meals": "وجبات عائلية",
      "Desserts": "حلويات",
      "Drinks": "مشروبات"
    };
    return translations[cat] || cat;
  });

  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-8 pb-24">
      {/* Header */}
      <div className="bg-[#1A1A1A] text-white py-16 -mt-8 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="heading-display text-5xl md:text-6xl font-black mb-6">{t("Our Menu")}</h1>
          <div className="relative max-w-md">
            <Search className="absolute left-4 rtl:left-auto rtl:right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input 
              type="text" 
              placeholder={t("Search for craves...")} 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-800 border-none text-white pl-12 rtl:pl-4 rtl:pr-12 pr-4 py-4 rounded-full focus:ring-2 focus:ring-[#FF6B00] outline-none"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8 lg:gap-12">
        {/* Categories Sidebar */}
        <aside className="md:w-64 flex-shrink-0">
          <div className="sticky top-28 bg-white p-6 rounded-3xl shadow-sm border border-zinc-100">
            <h3 className="font-bold text-lg mb-4 text-[#1A1A1A]">{t("Categories")}</h3>
            <div className="flex md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
              <button
                onClick={() => setActiveCategory('All')}
                className={cn(
                  "px-4 py-3 rounded-xl text-left rtl:text-right font-medium transition-all whitespace-nowrap",
                  activeCategory === 'All' 
                    ? "bg-[#FF6B00] text-white shadow-md shadow-[#FF6B00]/20" 
                    : "text-zinc-600 hover:bg-zinc-100"
                )}
              >
                {t("All Items")}
              </button>
              {displayCategories.map((category, index) => {
                const originalCategory = categories[index];
                return (
                  <button
                    key={originalCategory}
                    onClick={() => setActiveCategory(originalCategory)}
                    className={cn(
                      "px-4 py-3 rounded-xl text-left rtl:text-right font-medium transition-all whitespace-nowrap",
                      (activeCategory === originalCategory)
                        ? "bg-[#FF6B00] text-white shadow-md shadow-[#FF6B00]/20" 
                        : "text-zinc-600 hover:bg-zinc-100"
                    )}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>
        </aside>

        {/* Menu Grid */}
        <main className="flex-1">
          <div className="mb-8 flex justify-between items-center">
            <h2 className="heading-display text-2xl font-bold text-[#1A1A1A]">
              {activeCategory === 'All' ? t('Full Menu') : displayCategories[categories.indexOf(activeCategory)]}
            </h2>
            <span className="text-zinc-500 font-medium bg-zinc-100 px-3 py-1 rounded-full text-sm">
              {filteredItems.length} {t("items")}
            </span>
          </div>

          <AnimatePresence mode="popLayout">
            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredItems.map(item => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    key={item.id}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-zinc-100 group flex flex-col h-full"
                  >
                    <div className="h-56 relative overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      {item.popular && (
                        <div className="absolute top-3 left-3 rtl:right-3 rtl:left-auto bg-[#FFC107] text-[#1A1A1A] text-xs font-bold px-2 py-1 rounded-md shadow-sm">
                          {lang === 'ar' ? 'الأكثر مبيعاً' : 'POPULAR'}
                        </div>
                      )}
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex justify-between items-start mb-2 gap-4">
                        <h4 className="heading-display text-lg font-bold text-[#1A1A1A] leading-tight">
                          {lang === 'ar' && item.nameAr ? item.nameAr : item.name}
                        </h4>
                        <span className="font-bold text-[#FF6B00] whitespace-nowrap">
                          {lang === 'ar' ? `ج.م ${item.price}` : `EGP ${item.price}`}
                        </span>
                      </div>
                      <p className="text-zinc-500 text-sm mb-4 line-clamp-2">
                        {lang === 'ar' && item.descriptionAr ? item.descriptionAr : item.description}
                      </p>
                      
                      <div className="mt-auto flex items-center justify-between">
                        <span className="text-xs text-zinc-400 font-medium flex items-center">
                          <Info className="w-3 h-3 mr-1 rtl:ml-1 rtl:mr-0" /> {item.calories} {t("Cal")}
                        </span>
                        
                        <Button size="icon" className="rounded-full bg-[#1A1A1A] hover:bg-[#FF6B00] text-white">
                          <Plus className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl border border-zinc-100">
                <h3 className="heading-display text-2xl font-bold text-zinc-300 mb-2">{lang === 'ar' ? 'لا يوجد نتائج' : 'No items found'}</h3>
                <p className="text-zinc-500">{lang === 'ar' ? 'جرب البحث بكلمات أخرى.' : 'Try adjusting your search or category filter.'}</p>
                <Button 
                  variant="outline" 
                  className="mt-6 rounded-full"
                  onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                >
                  {lang === 'ar' ? 'مسح الفلاتر' : 'Clear Filters'}
                </Button>
              </div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
