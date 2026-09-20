import React from 'react';
import { useApp } from '../context/AppContext';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { 
  Sparkles, 
  Flame, 
  CalendarDays, 
  ShoppingBag, 
  Star, 
  Clock, 
  MapPin, 
  ChevronRight, 
  ChefHat, 
  Award 
} from 'lucide-react';

export const Hero = () => {
  const { setActiveTab, setIsReservationOpen } = useApp();

  return (
    <div className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-25">
        <div className="absolute top-10 left-10 w-96 h-96 bg-amber-600/30 rounded-full blur-[120px]"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-orange-700/20 rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Royal Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Bhubaneswar's Premier Authentic Mandi Destination</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-cinzel text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
                AN ANOKHI DAWAT <br />
                <span className="gold-gradient-text">OF ROYAL FLAVORS</span>
              </h1>
              <p className="font-playfair italic text-lg sm:text-xl text-amber-200/80">
                "Where Yemeni pit-steamed Mandi meets Awadhi charcoal royal firecraft"
              </p>
            </div>

            {/* Description */}
            <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Step into <span className="text-amber-400 font-semibold">Banjaraa</span> along the Cuttack-Puri Bypass. Savor falling-off-the-bone mutton shanks, fragrant Zafrani saffron rice, melt-in-mouth Galouti kebabs, and dine in our lavish <span className="text-amber-300 font-medium">Arabian Majlis floor cushions</span>.
            </p>

            {/* Quick Badges / Stats Bar */}
            <div className="grid grid-cols-3 gap-3 py-3 max-w-lg mx-auto lg:mx-0">
              <div className="glass-card rounded-xl p-3 text-center border border-amber-500/20">
                <div className="flex items-center justify-center gap-1 text-amber-400 font-bold text-lg">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>{RESTAURANT_INFO.rating}</span>
                </div>
                <div className="text-[11px] text-stone-400 mt-0.5">{RESTAURANT_INFO.reviewCount} Reviews</div>
              </div>

              <div className="glass-card rounded-xl p-3 text-center border border-amber-500/20">
                <div className="flex items-center justify-center gap-1 text-amber-400 font-bold text-lg">
                  <Flame className="w-4 h-4 text-orange-500" />
                  <span>Pit-Smoked</span>
                </div>
                <div className="text-[11px] text-stone-400 mt-0.5">Wood-Fired Mandi</div>
              </div>

              <div className="glass-card rounded-xl p-3 text-center border border-amber-500/20">
                <div className="flex items-center justify-center gap-1 text-amber-400 font-bold text-lg">
                  <ChefHat className="w-4 h-4 text-amber-400" />
                  <span>Majlis</span>
                </div>
                <div className="text-[11px] text-stone-400 mt-0.5">Arabian Rug Dining</div>
              </div>
            </div>

            {/* Primary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => setActiveTab('menu')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-base shadow-xl shadow-amber-600/30 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Order Royal Feast</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsReservationOpen(true)}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-stone-900/90 hover:bg-stone-800 text-amber-400 border border-amber-500/50 hover:border-amber-400 font-bold text-base flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-amber-500/10"
              >
                <CalendarDays className="w-5 h-5 text-amber-400" />
                <span>Book Majlis Table</span>
              </button>

              <button
                onClick={() => setActiveTab('mandi-builder')}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-amber-950/40 hover:bg-amber-900/50 text-amber-300 border border-amber-600/40 font-semibold text-sm flex items-center justify-center gap-2 transition-all"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Custom Platter Builder</span>
              </button>
            </div>

            {/* Promo Tag */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs text-stone-400">
              <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-mono font-bold border border-amber-500/30">
                BANJARAA50
              </span>
              <span>Use code for 20% OFF on online delivery orders above ₹499</span>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Dish Showcase Card with Arch styling */}
              <div className="relative glass-panel-gold rounded-3xl overflow-hidden p-3 shadow-2xl border-2 border-amber-500/30 glow-gold">
                <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=900&auto=format&fit=crop&q=80"
                    alt="Banjaraa Signature Chicken Juicy Mandi Platter"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent"></div>
                  
                  {/* Floating Dish Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-stone-950/85 backdrop-blur-md rounded-xl p-4 border border-amber-500/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">Signature Masterpiece</span>
                        <h4 className="font-cinzel text-lg font-bold text-white">Grand Mix Dawat Mandi</h4>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-stone-400 line-through">₹999</span>
                        <div className="text-xl font-extrabold text-amber-400">₹849</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2 pt-2 border-t border-stone-800 text-xs text-stone-300">
                      <span className="text-amber-400 font-semibold">Includes:</span> Mutton Shank + Chicken Al Fahm + Zafrani Rice + Marak Broth
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Mini Highlight Card */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 glass-panel p-3.5 rounded-2xl border border-amber-500/40 shadow-xl max-w-xs animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Flame className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Charcoal Tandoor Active</div>
                  <div className="text-[11px] text-stone-400">Mutton Galouti & Cheese Kebabs fresh off the grill</div>
                </div>
              </div>

              {/* Floating Location Card */}
              <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 glass-panel px-3 py-1.5 rounded-full border border-amber-500/30 text-xs text-amber-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Meherpalli, Bypass Rd</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
