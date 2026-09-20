import React from 'react';
import { useApp } from '../context/AppContext';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { 
  Flame, 
  MapPin, 
  PhoneCall, 
  Clock, 
  Mail, 
  Heart, 
  Sparkles, 
  CalendarDays, 
  ShieldCheck 
} from 'lucide-react';

export const Footer = () => {
  const { setActiveTab, setIsReservationOpen, setIsStaffMode } = useApp();

  const handleNav = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 border-t border-amber-500/20 text-stone-400 text-xs relative overflow-hidden">
      
      {/* Top Gold Border Glow */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-orange-600 to-amber-800 flex items-center justify-center text-stone-950 font-bold shadow-lg shadow-amber-900/40">
                <Flame className="w-5 h-5 fill-stone-950" />
              </div>
              <div>
                <span className="font-cinzel text-xl font-black gold-gradient-text tracking-widest block">
                  BANJARAA
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-amber-400/90 font-medium">
                  Ek Anokhi Dawat • ଭୁବନେଶ୍ୱର
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-xs leading-relaxed font-light">
              Bhubaneswar's premier culinary haven for pit-steamed Yemeni Mandi, Awadhi tandoors, and royal Arabian Majlis floor dining along the Cuttack-Puri Bypass Expressway.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.instagram.com/explore/tags/banjaraabhubaneswar/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-stone-900 hover:bg-amber-500 hover:text-stone-950 border border-stone-800 flex items-center justify-center text-stone-400 transition-colors"
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-stone-900 hover:bg-amber-500 hover:text-stone-950 border border-stone-800 flex items-center justify-center text-stone-400 transition-colors"
                title="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <button
                onClick={() => setIsReservationOpen(true)}
                className="px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px] font-semibold hover:bg-amber-500/30 flex items-center gap-1"
              >
                <CalendarDays className="w-3.5 h-3.5 text-amber-400" />
                <span>Reserve Majlis</span>
              </button>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-amber-400 transition-colors">
                  Home Dawat
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('menu')} className="hover:text-amber-400 transition-colors">
                  Royal Menu
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('mandi-builder')} className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <span>Feast Builder</span>
                  <span className="text-[9px] px-1 py-0.2 rounded bg-amber-500 text-stone-950 font-bold">New</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('story')} className="hover:text-amber-400 transition-colors">
                  Majlis & Heritage
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('reviews')} className="hover:text-amber-400 transition-colors">
                  Guest Reviews
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-amber-400 transition-colors">
                  Expressway Location
                </button>
              </li>
            </ul>
          </div>

          {/* Signatures (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
              Specialties
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>Chicken & Mutton Juicy Mandi</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>Charcoal Al Fahm Barbeque</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>Awadhi Mutton Galouti Kebab</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>Royal Cheese Kebab (Molten)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>Gulabo Special Shahi Platter</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>Mohabbat Ka Sharbat with Watermelon</span>
              </li>
            </ul>
          </div>

          {/* Address & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
              Bhubaneswar Hub
            </h4>
            <p className="text-stone-300 leading-relaxed">
              {RESTAURANT_INFO.address.line1}, <br />
              {RESTAURANT_INFO.address.line2}, <br />
              Bhubaneswar, Odisha 751002
            </p>
            <div className="space-y-1 pt-1">
              <a 
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="flex items-center gap-1.5 text-amber-400 font-bold hover:underline"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{RESTAURANT_INFO.phone}</span>
              </a>
              <div className="flex items-center gap-1.5 text-stone-400">
                <Clock className="w-3.5 h-3.5 text-amber-500" />
                <span>11:30 AM – 11:30 PM (Daily)</span>
              </div>
            </div>
            <div className="pt-2">
              <button
                onClick={() => setIsStaffMode(true)}
                className="text-[11px] text-stone-500 hover:text-amber-400 flex items-center gap-1 underline"
              >
                <ShieldCheck className="w-3 h-3" />
                <span>Staff / Kitchen Login</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Banjaraa - Ek Anokhi Dawat. All rights reserved. • Halal Certified Kitchen.
          </div>
          <div className="flex items-center gap-1 text-stone-400">
            <span>Crafted with royal perfection in Bhubaneswar</span>
            <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          </div>
        </div>

      </div>
    </footer>
  );
};
