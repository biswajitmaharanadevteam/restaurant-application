import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { MandiBuilder } from './components/MandiBuilder';
import { AmbianceStory } from './components/AmbianceStory';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderTracker } from './components/OrderTracker';
import { StaffDashboard } from './components/StaffDashboard';
import { StaffLoginModal } from './components/StaffLoginModal';
import { PhoneCall, CalendarDays, ShoppingBag, Sparkles, CheckCircle2, AlertTriangle } from 'lucide-react';
import { RESTAURANT_INFO } from './data/restaurantData';

const MainLayout = () => {
  const { activeTab, isStaffMode, toast, setIsReservationOpen, setIsCartOpen } = useApp();
  const { totalItemsCount } = useCart();

  return (
    <div className="min-h-screen bg-[#0b0d14] text-stone-100 flex flex-col justify-between selection:bg-amber-500 selection:text-black">
      
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {isStaffMode ? (
          <StaffDashboard />
        ) : (
          <>
            {/* If user navigated directly to specific tab */}
            {activeTab === 'home' && (
              <>
                <Hero />
                <MenuSection />
                <MandiBuilder />
                <AmbianceStory />
                <ReviewsSection />
                <LocationContact />
              </>
            )}

            {activeTab === 'menu' && (
              <div className="pt-6">
                <MenuSection />
              </div>
            )}

            {activeTab === 'mandi-builder' && (
              <div className="pt-6">
                <MandiBuilder />
              </div>
            )}

            {activeTab === 'story' && (
              <div className="pt-6">
                <AmbianceStory />
                <ReviewsSection />
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="pt-6">
                <ReviewsSection />
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="pt-6">
                <LocationContact />
              </div>
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <ReservationModal />
      <CartDrawer />
      <CheckoutModal />
      <OrderTracker />
      <StaffLoginModal />

      {/* Mobile Floating Action Sticky Bar */}
      {!isStaffMode && (
        <div className="lg:hidden fixed bottom-4 left-4 right-4 z-40 flex items-center justify-between gap-2.5 glass-panel-gold p-2.5 rounded-2xl border border-amber-500/50 shadow-2xl">
          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            className="flex-1 py-2.5 rounded-xl bg-stone-900 border border-stone-800 text-stone-200 text-xs font-bold flex items-center justify-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
            <span>Call</span>
          </a>

          <button
            onClick={() => setIsReservationOpen(true)}
            className="flex-1 py-2.5 rounded-xl bg-stone-900 border border-amber-500/40 text-amber-400 text-xs font-bold flex items-center justify-center gap-1.5"
          >
            <CalendarDays className="w-3.5 h-3.5" />
            <span>Book Majlis</span>
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/30"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Cart ({totalItemsCount})</span>
          </button>
        </div>
      )}

      {/* Global Toast Notification */}
      {toast && (
        <div className="fixed bottom-20 sm:bottom-8 right-4 sm:right-8 z-50 animate-in slide-in-from-bottom-5 duration-300">
          <div className="glass-panel-gold border border-amber-400/60 rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-3 text-xs sm:text-sm text-stone-100 max-w-sm">
            {toast.type === 'warning' ? (
              <AlertTriangle className="w-5 h-5 text-orange-400 shrink-0" />
            ) : (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            )}
            <span className="font-medium">{toast.message}</span>
          </div>
        </div>
      )}

    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <CartProvider>
        <MainLayout />
      </CartProvider>
    </AppProvider>
  );
}

export default App;
