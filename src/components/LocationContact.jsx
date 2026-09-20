import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { 
  MapPin, 
  PhoneCall, 
  Clock, 
  MessageCircle, 
  Navigation, 
  Car, 
  Wifi, 
  Sparkles, 
  ShieldCheck, 
  ExternalLink 
} from 'lucide-react';

export const LocationContact = () => {
  const handleOpenMaps = () => {
    window.open("https://maps.google.com/?q=Banjaraa+-+ek+anokhi+dawat+Bhubaneswar", "_blank");
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=Hello%20Banjaraa%2C%20I%20would%20like%20to%20inquire%20about%20a%20table%20reservation%20or%20menu%20order.`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Visit Us In Bhubaneswar</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white">
            Find Us on <span className="gold-gradient-text">Cuttack-Puri Bypass</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-light">
            Conveniently situated along the Bhubaneswar bypass expressway with ample free valet parking and tranquil Majlis dining halls.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Info Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Address & Hours Glass Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-amber-500/30 space-y-6 shadow-2xl">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Restaurant Address</h4>
                  <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                    {RESTAURANT_INFO.address.line1}, <br />
                    {RESTAURANT_INFO.address.line2}, <br />
                    {RESTAURANT_INFO.address.city}, {RESTAURANT_INFO.address.state} - {RESTAURANT_INFO.address.pincode}
                  </p>
                  <div className="text-[11px] text-amber-400/90 font-medium mt-1">
                    Landmark: {RESTAURANT_INFO.address.landmark}
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-stone-800">
                <div className="w-11 h-11 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Dining & Delivery Hours</h4>
                  <p className="text-xs text-stone-300 mt-1">
                    {RESTAURANT_INFO.operatingHours.days}
                  </p>
                  <div className="text-xs font-bold text-emerald-400 mt-0.5">
                    {RESTAURANT_INFO.operatingHours.display} (Non-stop service)
                  </div>
                </div>
              </div>

              {/* Phone Contacts */}
              <div className="flex items-start gap-4 pt-4 border-t border-stone-800">
                <div className="w-11 h-11 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Direct Hotline & Inquiries</h4>
                  <a 
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="text-sm font-bold text-amber-400 hover:text-amber-300 block mt-1"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                  <span className="text-[11px] text-stone-400">Available for takeaway, table bookings & bulk dawats</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={handleOpenMaps}
                  className="py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all hover:scale-105 active:scale-95"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </button>

                <button
                  onClick={handleWhatsApp}
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </button>
              </div>

            </div>

            {/* Guest Amenities Bar */}
            <div className="glass-card rounded-2xl p-4 border border-stone-800 grid grid-cols-3 gap-2 text-center text-[11px] text-stone-400">
              <div className="p-2">
                <Car className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                <span>Valet Parking</span>
              </div>
              <div className="p-2">
                <Wifi className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                <span>Guest Wi-Fi</span>
              </div>
              <div className="p-2">
                <Sparkles className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                <span>AC Majlis Hall</span>
              </div>
            </div>

          </div>

          {/* Right Map Visualizer (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl overflow-hidden border border-amber-500/30 h-full min-h-[420px] shadow-2xl relative flex flex-col">
              
              {/* Map Header Overlay */}
              <div className="p-4 bg-stone-950/90 border-b border-stone-800 flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-xs font-bold text-white">Live Location Map • Bhubaneswar</span>
                </div>
                <button
                  onClick={handleOpenMaps}
                  className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 font-semibold"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>

              {/* Map Frame */}
              <div className="flex-1 relative bg-stone-900">
                <iframe
                  title="Banjaraa - Ek Anokhi Dawat Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119767.24584282362!2d85.76722883441584!3d20.29605872886737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909e46f6634ad%3A0x18bc369f1f75f38f!2sBanjaraa%20-%20ek%20anokhi%20dawat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(120%)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[380px]"
                ></iframe>

                {/* Floating Location Card on Map */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-stone-950/90 backdrop-blur-md p-3.5 rounded-2xl border border-amber-500/40 shadow-xl pointer-events-none">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs font-cinzel">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Banjaraa - Ek Anokhi Dawat</span>
                  </div>
                  <p className="text-[11px] text-stone-300 mt-1">
                    Plot No. 1051/2758, Meherpalli, Cuttack-Puri Bypass, Bhubaneswar
                  </p>
                  <div className="text-[10px] text-emerald-400 mt-1 font-semibold">
                    ✓ Open 11:30 AM to 11:30 PM Everyday
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
