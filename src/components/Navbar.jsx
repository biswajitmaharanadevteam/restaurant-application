import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { 
  ShoppingBag, 
  CalendarDays, 
  Menu as MenuIcon, 
  X, 
  Sparkles, 
  ShieldCheck, 
  PhoneCall, 
  Flame, 
  Clock, 
  MapPin 
} from 'lucide-react';

export const Navbar = () => {
  const { 
    activeTab, 
    setActiveTab, 
    setIsReservationOpen, 
    setIsCartOpen, 
    isStaffMode, 
    openStaffPortal, 
    currentStaff 
  } = useApp();
  const { totalItemsCount, grandTotal } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Royal Menu' },
    { id: 'mandi-builder', label: 'Feast Builder', badge: 'Interactive' },
    { id: 'story', label: 'Majlis & Story' },
    { id: 'reviews', label: 'Guest Reviews' },
    { id: 'contact', label: 'Visit Us' }
  ];

  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Banner Announcement */}
      <header className="sticky top-0 z-40 w-full">
        <div className="bg-gradient-to-r from-stone-950 via-amber-950 to-stone-950 border-b border-amber-900/40 text-xs py-1.5 px-4 text-stone-300">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
            <div className="flex items-center space-x-3">
              <span className="flex items-center text-amber-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping mr-2"></span>
                Open Now • 11:30 AM – 11:30 PM
              </span>
              <span className="hidden sm:inline text-stone-500">|</span>
              <span className="hidden sm:flex items-center text-stone-300">
                <MapPin className="w-3.5 h-3.5 text-amber-500 mr-1" />
                Cuttack-Puri Bypass, Bhubaneswar
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <a 
                href={`tel:${RESTAURANT_INFO.phone}`} 
                className="flex items-center hover:text-amber-400 transition-colors font-medium"
              >
                <PhoneCall className="w-3 h-3 text-amber-500 mr-1" />
                {RESTAURANT_INFO.phone}
              </a>
              <button
                onClick={openStaffPortal}
                className={`text-[11px] px-2.5 py-1 rounded-lg border transition-all flex items-center gap-1.5 ${
                  isStaffMode 
                    ? 'bg-amber-500 text-stone-950 font-bold border-amber-400' 
                    : 'text-stone-300 border-stone-800 bg-stone-900/60 hover:border-amber-500/60 hover:text-amber-300'
                }`}
                title="Staff & Kitchen Management Portal"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>{currentStaff ? `${currentStaff.name.split(' ')[0]} (${currentStaff.role.split(' ')[0]})` : 'Staff Login'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <nav className="glass-panel border-b border-amber-500/20 px-4 lg:px-8 py-3.5">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Brand Logo */}
            <div 
              onClick={() => handleNavClick('home')} 
              className="cursor-pointer flex items-center gap-3 group"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 via-orange-600 to-amber-800 flex items-center justify-center shadow-lg shadow-amber-900/40 border border-amber-300/30 group-hover:scale-105 transition-transform">
                <Flame className="w-6 h-6 text-stone-950 fill-stone-950" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="font-cinzel text-xl sm:text-2xl font-black tracking-widest gold-gradient-text">
                    BANJARAA
                  </span>
                </div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-amber-400/90 font-medium">
                  Ek Anokhi Dawat • ଭୁବନେଶ୍ୱର
                </div>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive = activeTab === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                      isActive 
                        ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30 shadow-inner' 
                        : 'text-stone-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                    {link.badge && (
                      <span className="text-[10px] px-1.5 py-0.2 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-bold rounded-full animate-pulse">
                        {link.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right CTAs */}
            <div className="flex items-center space-x-2.5 sm:space-x-3">
              {/* Table Booking CTA */}
              <button
                onClick={() => setIsReservationOpen(true)}
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-amber-400 border border-amber-500/40 text-sm font-semibold transition-all hover:border-amber-400 shadow-md hover:shadow-amber-500/10"
              >
                <CalendarDays className="w-4 h-4 text-amber-500" />
                <span>Book Majlis</span>
              </button>

              {/* Cart Drawer Trigger */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative flex items-center gap-2.5 px-3.5 sm:px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="relative">
                  <ShoppingBag className="w-4 h-4" />
                  {totalItemsCount > 0 && (
                    <span className="absolute -top-2.5 -right-2.5 bg-red-600 text-white text-[10px] font-black rounded-full w-4 h-4 flex items-center justify-center ring-2 ring-stone-950 animate-bounce">
                      {totalItemsCount}
                    </span>
                  )}
                </div>
                <span className="hidden md:inline">Cart</span>
                {totalItemsCount > 0 && (
                  <span className="bg-stone-950/20 px-1.5 py-0.5 rounded text-xs font-black">
                    ₹{grandTotal}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-stone-400 hover:text-amber-400 hover:bg-stone-900 border border-stone-800"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-3 pt-3 border-t border-stone-800/80 space-y-1.5 pb-2 animate-in slide-in-from-top duration-200">
              {navLinks.map((link) => {
                const isActive = activeTab === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between ${
                      isActive 
                        ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30' 
                        : 'text-stone-300 hover:text-white hover:bg-stone-900'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="text-[10px] px-2 py-0.5 bg-amber-500 text-stone-950 font-bold rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </button>
                );
              })}

              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setIsReservationOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-stone-900 text-amber-400 border border-amber-500/40 text-sm font-semibold"
                >
                  <CalendarDays className="w-4 h-4" />
                  <span>Reserve Arabian Majlis / Table</span>
                </button>
                <div className="flex items-center justify-between px-3 py-2 bg-stone-900/60 rounded-lg text-xs text-stone-400">
                  <span>Staff Portal ({currentStaff ? currentStaff.role.split(' ')[0] : 'Locked'})</span>
                  <button
                    onClick={() => {
                      openStaffPortal();
                      setMobileMenuOpen(false);
                    }}
                    className="px-3 py-1 rounded text-xs font-semibold bg-amber-500 text-black"
                  >
                    {isStaffMode ? 'Open Dashboard' : 'Staff Login'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};
