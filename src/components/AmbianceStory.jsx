import React from 'react';
import { useApp } from '../context/AppContext';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { 
  Sparkles, 
  Flame, 
  Users, 
  Heart, 
  CalendarDays, 
  ShieldCheck, 
  Award, 
  CheckCircle 
} from 'lucide-react';

export const AmbianceStory = () => {
  const { setIsReservationOpen } = useApp();

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80",
      caption: "Yemeni Pit-Steamed Mutton Shank",
      tag: "Culinary Heritage"
    },
    {
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80",
      caption: "Royal Arabian Majlis Seating",
      tag: "Dining Atmosphere"
    },
    {
      url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
      caption: "Charcoal Awadhi Tandoor Stations",
      tag: "Master Kitchen"
    },
    {
      url: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80",
      caption: "Grand 6-Person Family Thal",
      tag: "Signature Dawat"
    }
  ];

  return (
    <section id="story" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Visuals */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-amber-500/20 h-64 sm:h-80">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&auto=format&fit=crop&q=80"
                    alt="Traditional Arabian Majlis Dining"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="glass-panel p-4 rounded-2xl border border-amber-500/30 text-center">
                  <span className="font-cinzel text-2xl font-bold text-amber-400">1,450+</span>
                  <div className="text-xs text-stone-400">Delighted Guests Every Month</div>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="glass-panel p-4 rounded-2xl border border-amber-500/30 text-center">
                  <span className="font-cinzel text-2xl font-bold text-amber-400">100%</span>
                  <div className="text-xs text-stone-400">Wood-Fire Charcoal Smoked</div>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-amber-500/20 h-64 sm:h-80">
                  <img
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?w=700&auto=format&fit=crop&q=80"
                    alt="Mandi Preparation in Charcoal Pit"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Our Philosophy & Heritage</span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              A Symphony of <span className="gold-gradient-text">Yemeni Traditions & Awadhi Fire</span>
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
              In Arabic culture, <span className="text-amber-300 font-semibold">"Mandi"</span> comes from the word <span className="italic">nada</span> (dew), representing the moist, melting texture of meat slow-cooked inside a subterranean oven called a <span className="text-amber-300 font-semibold">tannour</span>. As the embers glow underground, the juices and marrow drip continuously onto the bed of saffron basmati rice beneath.
            </p>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
              At <span className="text-amber-400 font-bold">Banjaraa - Ek Anokhi Dawat</span>, we brought this authentic culinary pilgrimage to Bhubaneswar on the Cuttack-Puri Bypass. We pair this with the royal refinement of Awadhi tandoors—creating Galouti kebabs that dissolve instantly, rich Nawabi kormas, and fragrant earthenware biryanis.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-stone-900/60 border border-stone-800 flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Halal & Fresh Cut</h4>
                  <p className="text-[11px] text-stone-400">Procured daily from certified hygienic farms.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-900/60 border border-stone-800 flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Subterranean Pit Cooking</h4>
                  <p className="text-[11px] text-stone-400">Zero artificial tenderizers; strictly wood fire.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setIsReservationOpen(true)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm shadow-xl shadow-amber-500/20 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                <CalendarDays className="w-4 h-4" />
                <span>Reserve An Arabian Majlis Experience</span>
              </button>
            </div>

          </div>

        </div>

        {/* Gallery Showcase */}
        <div className="mt-12 space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="font-cinzel text-2xl font-bold text-white">Experience The Ambiance</h3>
            <p className="text-stone-400 text-xs mt-1">Immerse yourself in Moroccan lanterns, Persian carpets, and the fragrant mist of pure ittar.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden h-60 border border-stone-800 shadow-lg">
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">{img.tag}</span>
                  <div className="text-xs font-bold text-white mt-0.5">{img.caption}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
