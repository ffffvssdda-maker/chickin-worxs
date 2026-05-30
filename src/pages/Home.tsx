import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Leaf, ShieldCheck, Clock, MapPin, Smartphone, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { menuItems } from '../data';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const { t, lang } = useLanguage();
  const featuredMenu = menuItems.filter(item => item.popular).slice(0, 3);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-white overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col gap-8 text-center lg:text-left rtl:lg:text-right z-10"
          >
            <div className="flex flex-wrap justify-center lg:justify-start rtl:lg:justify-start gap-2">
              <span className="bg-[#FF6B0015] bg-[#FF6B00]/10 text-[#FF6B00] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">{t("Freshly Crafted Daily")}</span>
              <span className="bg-[#00C85315] bg-[#00C853]/10 text-[#00C853] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">{t("Halal Certified")}</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[0.9] tracking-tight text-[#1A1A1A]">
              {t("CHICKEN")}<br />
              {t("DONE")}<span className="text-[#FF6B00]">{t("RIGHT.")}</span>
            </h1>
            
            <p className="text-xl text-gray-500 leading-relaxed max-w-md mx-auto lg:mx-0 rtl:lg:mx-0">
              {t("home_desc")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start rtl:lg:justify-start">
              <Button asChild size="lg" className="rounded-2xl">
                <Link to="/menu">{t("Order Delivery")}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl">
                <Link to="/menu">{t("Explore Menu")}</Link>
              </Button>
            </div>
            
            {/* Trust indicators / Stats */}
            <div className="flex items-center justify-center lg:justify-start rtl:lg:justify-start gap-10 mt-4">
              <div className="flex flex-col">
                <p className="text-3xl font-extrabold text-[#1A1A1A]">12M+</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">{t("Meals Served")}</p>
              </div>
              <div className="w-px h-10 bg-gray-200 hidden sm:block"></div>
              <div className="flex flex-col">
                <p className="text-3xl font-extrabold text-[#1A1A1A]">4.9/5</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">{t("Average Rating")}</p>
              </div>
              <div className="w-px h-10 bg-gray-200 hidden md:block"></div>
              <div className="hidden md:flex flex-col">
                <p className="text-3xl font-extrabold text-[#1A1A1A]">150+</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">{t("Locations")}</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 h-[500px] lg:h-[650px] relative mt-10 lg:mt-0"
          >
            <div className="w-full h-full bg-[#F5F5F5] rounded-[48px] relative overflow-hidden flex items-center justify-center">
              
              <div className="absolute top-10 right-4 lg:right-10 rtl:left-4 rtl:lg:left-10 rtl:right-auto glass p-5 rounded-3xl z-20 w-48 shadow-lg">
                <div className="flex items-center gap-3 mb-2 rtl:gap-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-xl">🔥</div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">{t("Trending")}</p>
                    <p className="text-xs font-bold text-[#1A1A1A]">{lang === 'ar' ? 'ذا بافلو ساندو بيج' : 'The Buffalo Sando Big'}</p>
                  </div>
                </div>
                <div className="w-full bg-gray-100 h-1 rounded-full flex rtl:justify-end">
                  <div className="bg-[#FF6B00] h-1 rounded-full w-3/4"></div>
                </div>
              </div>

              <div className="absolute bottom-12 left-4 lg:left-[-20px] rtl:right-4 rtl:lg:right-[-20px] rtl:left-auto glass p-6 rounded-[32px] z-20 shadow-2xl flex items-center gap-4 rtl:gap-4 border border-white">
                <div className="w-14 h-14 rounded-2xl bg-[#00C853] flex items-center justify-center text-white font-bold text-xl">✓</div>
                <div>
                  <p className="text-sm font-bold text-[#1A1A1A]">{t("Quality Verified")}</p>
                  <p className="text-xs text-gray-500">{t("Quality Desc")}</p>
                </div>
              </div>

              <div className="relative w-4/5 h-4/5 bg-gray-200 rounded-[40px] shadow-inner rotate-3 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2940&auto=format&fit=crop')"}}></div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-[40px] border-white/40 rounded-full animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — SOCIAL PROOF */}
      <section className="bg-[#FFC107] py-6 sm:py-10 border-b-4 border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="flex -space-x-3 rtl:-space-x-reverse">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Customer" className="w-12 h-12 rounded-full border-2 border-[#FFC107]" />
              ))}
              <div className="w-12 h-12 rounded-full border-2 border-[#FFC107] bg-[#1A1A1A] flex items-center justify-center text-white text-xs font-bold">+24k</div>
            </div>
            <div>
              <div className="flex text-[#1A1A1A] mb-1">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-[#1A1A1A] font-bold text-sm">4.9/5 {t('from')} 24,296 {t('reviews')}</p>
            </div>
          </div>
          
          <div className="hidden lg:flex w-px h-12 bg-black/10"></div>
          
          <p className="text-xl font-bold text-[#1A1A1A] heading-display">{t("home_quote")}</p>
        </div>
      </section>

      {/* SECTION 3 — FEATURED MENU */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-[#FF6B00] font-bold tracking-wider uppercase mb-2">{t("Fan Favorites") || "Fan Favorites"}</h2>
              <h3 className="heading-display text-4xl md:text-5xl font-black text-[#1A1A1A]">{t("Signature Menu") || "Signature Menu"}</h3>
            </div>
            <Link to="/menu" className="hidden sm:flex text-[#FF6B00] font-bold items-center hover:text-[#E66000] transition-colors">
              {t("See full menu") || "See full menu"} {lang === 'ar' ? <ChevronRight className="w-5 h-5 ml-1 rotate-180" /> : <ChevronRight className="w-5 h-5 ml-1" />}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMenu.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-100 flex flex-col h-full"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  <div className="absolute top-4 right-4 rtl:left-4 rtl:right-auto bg-white/90 backdrop-blur text-[#1A1A1A] font-bold px-3 py-1 rounded-full shadow-sm">
                    {lang === 'ar' ? `ج.م ${item.price}` : `EGP ${item.price}`}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="heading-display text-xl font-bold text-[#1A1A1A]">{lang === 'ar' && item.nameAr ? item.nameAr : item.name}</h4>
                  </div>
                  <p className="text-zinc-500 text-sm mb-4 line-clamp-2">{lang === 'ar' && item.descriptionAr ? item.descriptionAr : item.description}</p>
                  <div className="flex items-center text-xs text-zinc-400 font-medium mb-6">
                    <Zap className="w-3 h-3 mr-1 rtl:ml-1 rtl:mr-0" /> {item.calories} {t("Cal")}
                  </div>
                  <div className="mt-auto">
                    <Button className="w-full rounded-xl group relative overflow-hidden">
                      <span className="relative z-10 font-bold">{t("Add to Order")}</span>
                      <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 sm:hidden flex justify-center">
            <Button asChild variant="outline" className="rounded-full w-full">
              <Link to="/menu">{t("See full menu") || "See full menu"} {lang === 'ar' ? <ChevronRight className="w-5 h-5 ml-1 rotate-180" /> : <ChevronRight className="w-5 h-5 ml-1" />}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 12 — FINAL CTA */}
      <section className="py-32 bg-[#FF6B00] text-white text-center relative overflow-hidden pattern-dots">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="heading-display text-5xl md:text-7xl font-black mb-8 leading-[1.1]">
            {lang === 'ar' ? 'مستعد لوجبتك المفضلة؟' : 'Ready For Your Next Favorite Meal?'}
          </h2>
          <p className="text-xl md:text-2xl font-medium text-white/90 mb-10">
            {lang === 'ar' ? 'اطلب أونلاين الآن للتوصيل، أو استلمها بدون انتظار.' : 'Order online now for hot, fresh delivery or skip the line in-store.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full bg-[#1A1A1A] text-white hover:bg-black text-xl h-16 w-full sm:w-auto px-12 shadow-2xl">
              <Link to="/menu">{t("ORDER NOW")}</Link>
            </Button>
            <Button asChild size="lg" className="rounded-full bg-white text-[#FF6B00] hover:bg-zinc-100 text-xl h-16 w-full sm:w-auto px-12">
              <Link to="/locations">{t("Find a Branch")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
