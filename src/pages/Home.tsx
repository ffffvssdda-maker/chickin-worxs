import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Leaf, ShieldCheck, Clock, MapPin, Smartphone, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { menuItems } from '../data';

export default function Home() {
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
            className="w-full lg:w-1/2 flex flex-col gap-8 text-center lg:text-left z-10"
          >
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              <span className="bg-[#FF6B0015] bg-[#FF6B00]/10 text-[#FF6B00] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Freshly Crafted Daily</span>
              <span className="bg-[#00C85315] bg-[#00C853]/10 text-[#00C853] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Halal Certified</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[0.9] tracking-tight text-[#1A1A1A]">
              CHICKEN<br />
              DONE<span className="text-[#FF6B00]">RIGHT.</span>
            </h1>
            
            <p className="text-xl text-gray-500 leading-relaxed max-w-md mx-auto lg:mx-0">
              Crispy. Juicy. Crafted to perfection every single day with bold, innovative flavors.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="rounded-2xl">
                <Link to="/menu">Order Delivery</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl">
                <Link to="/menu">Explore Menu</Link>
              </Button>
            </div>
            
            {/* Trust indicators / Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-10 mt-4">
              <div className="flex flex-col">
                <p className="text-3xl font-extrabold text-[#1A1A1A]">12M+</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Meals Served</p>
              </div>
              <div className="w-px h-10 bg-gray-200 hidden sm:block"></div>
              <div className="flex flex-col">
                <p className="text-3xl font-extrabold text-[#1A1A1A]">4.9/5</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Average Rating</p>
              </div>
              <div className="w-px h-10 bg-gray-200 hidden md:block"></div>
              <div className="hidden md:flex flex-col">
                <p className="text-3xl font-extrabold text-[#1A1A1A]">150+</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Locations</p>
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
              
              <div className="absolute top-10 right-4 lg:right-10 glass p-5 rounded-3xl z-20 w-48 shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-xl">🔥</div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Trending</p>
                    <p className="text-xs font-bold text-[#1A1A1A]">The Buffalo Sando Big</p>
                  </div>
                </div>
                <div className="w-full bg-gray-100 h-1 rounded-full">
                  <div className="bg-[#FF6B00] h-1 rounded-full w-3/4"></div>
                </div>
              </div>

              <div className="absolute bottom-12 left-4 lg:left-[-20px] glass p-6 rounded-[32px] z-20 shadow-2xl flex items-center gap-4 border border-white">
                <div className="w-14 h-14 rounded-2xl bg-[#00C853] flex items-center justify-center text-white font-bold text-xl">✓</div>
                <div>
                  <p className="text-sm font-bold text-[#1A1A1A]">Quality Verified</p>
                  <p className="text-xs text-gray-500">Triple-inspected poultry</p>
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
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Customer" className="w-12 h-12 rounded-full border-2 border-[#FFC107]" />
              ))}
              <div className="w-12 h-12 rounded-full border-2 border-[#FFC107] bg-[#1A1A1A] flex items-center justify-center text-white text-xs font-bold w-12 h-12">+24k</div>
            </div>
            <div>
              <div className="flex text-[#1A1A1A] mb-1">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-[#1A1A1A] font-bold text-sm">4.9/5 from 24,296 reviews</p>
            </div>
          </div>
          
          <div className="hidden lg:flex w-px h-12 bg-black/10"></div>
          
          <p className="text-xl font-bold text-[#1A1A1A] heading-display">"The food was fresh and delicious, and the service was very fast. Yara was very friendly." — Adel Shaker</p>
        </div>
      </section>

      {/* SECTION 3 — FEATURED MENU */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-[#FF6B00] font-bold tracking-wider uppercase mb-2">Fan Favorites</h2>
              <h3 className="heading-display text-4xl md:text-5xl font-black text-[#1A1A1A]">Signature Menu</h3>
            </div>
            <Link to="/menu" className="hidden sm:flex text-[#FF6B00] font-bold items-center hover:text-[#E66000] transition-colors">
              See full menu <ChevronRight className="w-5 h-5 ml-1" />
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
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-[#1A1A1A] font-bold px-3 py-1 rounded-full shadow-sm">
                    EGP {item.price}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="heading-display text-xl font-bold text-[#1A1A1A]">{item.name}</h4>
                  </div>
                  <p className="text-zinc-500 text-sm mb-4 line-clamp-2">{item.description}</p>
                  <div className="flex items-center text-xs text-zinc-400 font-medium mb-6">
                    <Zap className="w-3 h-3 mr-1" /> {item.calories} Cal
                  </div>
                  <div className="mt-auto">
                    <Button className="w-full rounded-xl group relative overflow-hidden">
                      <span className="relative z-10 font-bold">Add to Order</span>
                      <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 sm:hidden flex justify-center">
            <Button asChild variant="outline" className="rounded-full w-full">
              <Link to="/menu">See full menu <ChevronRight className="w-5 h-5 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHY CHICKIN WORX */}
      <section className="py-24 bg-[#1A1A1A] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B00]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFC107]/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="heading-display text-4xl md:text-5xl font-black mb-4">No Compromises.</h2>
            <p className="text-zinc-400 text-lg">We obsess over the details so you can obsess over the taste.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: "Fresh Ingredients", desc: "Never frozen, hand-breaded daily right in our kitchens." },
              { icon: ShieldCheck, title: "Premium Chicken", desc: "100% real breast meat with no artificial fillers or hormones." },
              { icon: Zap, title: "Fast Delivery", desc: "Hot, crispy, and at your door before you even get hungry." },
              { icon: Star, title: "Bold Flavors", desc: "Proprietary spice blends you simply cannot find anywhere else." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-zinc-800/50 backdrop-blur border border-zinc-700/50 p-8 rounded-3xl"
              >
                <div className="w-14 h-14 bg-[#FF6B00] rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-[#FF6B00]/20">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h4 className="heading-display text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-zinc-400 line-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 & 8 — APP PROMO */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#FFC107] rounded-[3rem] overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
            <div className="absolute -right-20 -top-20 w-[600px] h-[600px] bg-white opacity-20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 relative z-10">
            <div className="p-12 lg:py-24 lg:pl-20 flex flex-col justify-center">
              <div className="inline-flex items-center space-x-2 bg-black/10 rounded-full px-4 py-1.5 mb-6 w-max">
                <Star className="w-4 h-4 text-[#1A1A1A]" />
                <span className="text-[#1A1A1A] text-sm font-bold tracking-wide uppercase">Rewards App</span>
              </div>
              <h2 className="heading-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#1A1A1A] leading-[1.1] mb-6">
                Earn Free Chicken. <br />Skip the Line.
              </h2>
              <p className="text-lg text-[#1A1A1A]/80 font-medium mb-10 max-w-lg">
                Download the Chickin Worx app today. Get a free spicy sandwich on your first order and earn points on every bite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#1A1A1A] text-white hover:bg-black rounded-xl h-14 px-8 flex gap-3 text-lg items-center text-left">
                  <Smartphone className="w-6 h-6" />
                  <div className="leading-tight">
                    <div className="text-[10px] font-normal opacity-80">Download on the</div>
                    <div className="font-bold">App Store</div>
                  </div>
                </Button>
                <Button className="bg-[#1A1A1A] text-white hover:bg-black rounded-xl h-14 px-8 flex gap-3 text-lg items-center text-left">
                  <Smartphone className="w-6 h-6" />
                  <div className="leading-tight">
                    <div className="text-[10px] font-normal opacity-80">GET IT ON</div>
                    <div className="font-bold">Google Play</div>
                  </div>
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:flex items-end justify-center pt-12 pr-12">
              <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2940&auto=format&fit=crop" alt="App Mockup" className="w-[300px] h-[500px] object-cover rounded-t-[2.5rem] border-8 border-white/40 shadow-2xl rotate-[-5deg] origin-bottom hover:rotate-0 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — FRANCHISE */}
      <section className="py-24 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1A1A1A] rounded-[2.5rem] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
            {/* Pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            
            <div className="lg:w-1/2 relative z-10 text-center lg:text-left">
              <h2 className="heading-display text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
                Bring Chickin Worx To Your City.
              </h2>
              <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                Join one of the fastest-growing fast-casual chains. Proven model, elite marketing support, and incredible unit economics.
              </p>
              <Button asChild size="lg" className="rounded-full bg-[#FF6B00] hover:bg-[#E66000] text-white">
                <Link to="/franchise">Request Franchise Info <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
            
            <div className="lg:w-1/2 relative z-10 grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur border border-white/10 p-6 rounded-2xl">
                <div className="text-[#FFC107] text-3xl heading-display font-black mb-2">EGP 100M+</div>
                <div className="text-white font-medium">Average Unit Volume</div>
              </div>
              <div className="bg-white/10 backdrop-blur border border-white/10 p-6 rounded-2xl">
                <div className="text-[#FFC107] text-3xl heading-display font-black mb-2">50+</div>
                <div className="text-white font-medium">Locations Nationwide</div>
              </div>
              <div className="bg-white/10 backdrop-blur border border-white/10 p-6 rounded-2xl">
                <div className="text-[#FFC107] text-3xl heading-display font-black mb-2">12 wks</div>
                <div className="text-white font-medium">Average Setup Time</div>
              </div>
              <div className="bg-white/10 backdrop-blur border border-white/10 p-6 rounded-2xl">
                <div className="text-[#FFC107] text-3xl heading-display font-black mb-2">Full</div>
                <div className="text-white font-medium">Turn-key Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12 — FINAL CTA */}
      <section className="py-32 bg-[#FF6B00] text-white text-center relative overflow-hidden pattern-dots">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="heading-display text-5xl md:text-7xl font-black mb-8 leading-[1.1]">
            Ready For Your Next Favorite Meal?
          </h2>
          <p className="text-xl md:text-2xl font-medium text-white/90 mb-10">
            Order online now for hot, fresh delivery or skip the line in-store.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full bg-[#1A1A1A] text-white hover:bg-black text-xl h-16 w-full sm:w-auto px-12 shadow-2xl">
              <Link to="/menu">Order Now</Link>
            </Button>
            <Button asChild size="lg" className="rounded-full bg-white text-[#FF6B00] hover:bg-zinc-100 text-xl h-16 w-full sm:w-auto px-12">
              <Link to="/locations">Find a Location</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
