import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface Translations {
  [key: string]: {
    en: string;
    ar: string;
  };
}

const translations: Translations = {
  // Navbar
  "Menu": { en: "Menu", ar: "المنيو" },
  "Locations": { en: "Locations", ar: "الفروع" },
  "Catering": { en: "Catering", ar: "الحفلات" },
  "Franchise": { en: "Franchise", ar: "الفرنشايز" },
  "Offers": { en: "Offers", ar: "العروض" },
  "ORDER NOW": { en: "ORDER NOW", ar: "اطلب الآن" },
  "Estimated Delivery": { en: "Estimated Delivery", ar: "الوقت المتوقع للتوصيل" },
  "22-30 MINS": { en: "22-30 MINS", ar: "22-30 دقيقة" },
  
  // Home
  "Freshly Crafted Daily": { en: "Freshly Crafted Daily", ar: "يُحضر طازجاً يومياً" },
  "Halal Certified": { en: "Halal Certified", ar: "حلال 100%" },
  "100% Fresh": { en: "100% Fresh", ar: "طازج 100%" },
  "CHICKEN": { en: "CHICKEN", ar: "تشيكن" },
  "DONE": { en: "DONE ", ar: "على " },
  "RIGHT.": { en: "RIGHT.", ar: "أصوله." },
  "from": { en: "from", ar: "من" },
  "Fan Favorites": { en: "Fan Favorites", ar: "المفضلة لدى الجماهير" },
  "Signature Menu": { en: "Signature Menu", ar: "المنيو المميز" },
  "See full menu": { en: "See full menu", ar: "عرض المنيو بالكامل" },
  "home_desc": { 
    en: "Crispy. Juicy. Crafted to perfection every single day with bold, innovative flavors.", 
    ar: "مقرمش. طري. مُحضر بإتقان كل يوم بخلطات ونكهات مبتكرة." 
  },
  "Order Delivery": { en: "Order Delivery", ar: "اطلب دليفري" },
  "Explore Menu": { en: "Explore Menu", ar: "تصفح المنيو" },
  "Meals Served": { en: "Meals Served", ar: "وجبة قُدمت" },
  "Average Rating": { en: "Average Rating", ar: "متوسط التقييم" },
  "reviews": { en: "reviews", ar: "تقييم" },
  "Trending": { en: "Trending", ar: "الأكثر مبيعاً" },
  "Quality Verified": { en: "Quality Verified", ar: "جودة مضمونة" },
  "Quality Desc": { en: "Triple-inspected poultry", ar: "دواجن مفحوصة ثلاث مرات" },
  "home_quote": {
    en: "\"The food was fresh and delicious, and the service was very fast. Yara was very friendly.\" — Adel Shaker",
    ar: "\"الطعام كان طازج ولذيذ، والخدمة سريعة جداً. يارا كانت ودودة للغاية.\" — عادل شاكر"
  },
  
  // Menu Page
  "Our Menu": { en: "Our Menu", ar: "المنيو الخاص بنا" },
  "Search for craves...": { en: "Search for craves...", ar: "ابحث عن وجبتك..." },
  "Categories": { en: "Categories", ar: "الفئات" },
  "All Items": { en: "All Items", ar: "الكل" },
  "Full Menu": { en: "Full Menu", ar: "المنيو كامل" },
  "items": { en: "items", ar: "أصناف" },
  "Add to Order": { en: "Add to Order", ar: "أضف للطلب" },
  "Cal": { en: "Cal", ar: "سعرة" },
  
  // Footer
  "Explore": { en: "Explore", ar: "استكشف" },
  "Company": { en: "Company", ar: "الشركة" },
  "Stay Hungry": { en: "Stay Hungry", ar: "ابق جائعاً" },
  "Get the App": { en: "Get the App", ar: "احصل على التطبيق" },
  "Our Story": { en: "Our Story", ar: "قصتنا" },
  "Careers": { en: "Careers", ar: "وظائف" },
  "Contact Us": { en: "Contact Us", ar: "اتصل بنا" },
  "Privacy Policy": { en: "Privacy Policy", ar: "سياسة الخصوصية" },
  "Terms of Service": { en: "Terms of Service", ar: "شروط الخدمة" },
  "Crispy. Juicy. Crafted Fresh Every Day. We're on a mission to serve the best chicken in town with bold flavors and premium ingredients.": {
    en: "Crispy. Juicy. Crafted Fresh Every Day. We're on a mission to serve the best chicken in town with bold flavors and premium ingredients.",
    ar: "مقرمش. طري. مُحضر طازجاً كل يوم. رسالتنا هي تقديم أفضل دجاج في المدينة بنكهات مبتكرة وتتبيله مميزة."
  },
  "Join our newsletter for exclusive deals, new menu drops, and more.": {
    en: "Join our newsletter for exclusive deals, new menu drops, and more.",
    ar: "اشترك في النشرة الإخبارية للحصول على عروض حصرية، وأحدث الإضافات للمنيو والمزيد."
  },
  "footer_desc": {
    en: "Join our newsletter for exclusive deals, new menu drops, and more.",
    ar: "اشترك في النشرة الإخبارية للحصول على عروض حصرية والمزيد."
  },
  "Email address": { en: "Email address", ar: "البريد الإلكتروني" },
  "Subscribe": { en: "Subscribe", ar: "اشترك" },
  "All rights reserved.": { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  
  // Locations
  "Find a Branch": { en: "Find a Branch", ar: "ابحث عن فرع" },
  "loc_desc": {
    en: "Hot, crispy chicken is closer than you think. Find your nearest Chickin Worx for pickup or delivery.",
    ar: "الدجاج المقرمش أقرب مما تعتقد. ابحث عن أقرب فرع لتشيكن وركس."
  },
  "Directions": { en: "Directions", ar: "الاتجاهات" },
  "Order Here": { en: "Order Here", ar: "اطلب من هنا" }
};

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][lang] || key;
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
