import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useCart } from '../context/CartContext';
import { MENU_ITEMS } from '../data/menuData';
import { 
  ShieldCheck, 
  ArrowLeft, 
  ShoppingBag, 
  CalendarDays, 
  Sliders, 
  CheckCircle2, 
  Clock, 
  Flame, 
  Bike, 
  AlertCircle, 
  TrendingUp, 
  User, 
  Phone,
  LogOut 
} from 'lucide-react';

export const StaffDashboard = () => {
  const { 
    setIsStaffMode, 
    reservations, 
    updateReservationStatus, 
    soldOutItems, 
    toggleItemStock, 
    showToast,
    currentStaff,
    logoutStaff 
  } = useApp();

  const { orderHistory, setOrderHistory } = useCart();

  const [activeStaffTab, setActiveStaffTab] = useState('orders'); // 'orders' | 'reservations' | 'menu'

  // Update order status
  const handleUpdateOrderStatus = (orderId, newStatus) => {
    setOrderHistory(prev => prev.map(order => {
      if (order.id === orderId) {
        return { ...order, status: newStatus };
      }
      return order;
    }));
    showToast(`Order #${orderId} status updated to: ${newStatus.toUpperCase()}`, 'success');
  };

  // Metrics
  const totalRevenue = orderHistory.reduce((sum, o) => sum + (o.grandTotal || 0), 0);
  const activeOrdersCount = orderHistory.filter(o => o.status !== 'delivered').length;
  const pendingReservationsCount = reservations.filter(r => r.status === 'confirmed').length;

  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-in fade-in">
      
      {/* Top Banner */}
      <div className="glass-panel-gold rounded-3xl p-6 border-2 border-amber-500/40 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500 text-stone-950 font-black flex items-center justify-center shadow-lg shadow-amber-500/30 overflow-hidden">
            {currentStaff?.avatar ? (
              <img src={currentStaff.avatar} alt={currentStaff.name} className="w-full h-full object-cover" />
            ) : (
              <ShieldCheck className="w-7 h-7" />
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                Banjaraa Staff & Kitchen Portal
              </h2>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500 text-stone-950 font-black uppercase tracking-wider">
                {currentStaff ? currentStaff.role : 'Authorized Staff'}
              </span>
            </div>
            <p className="text-xs text-stone-400 mt-0.5">
              Logged in as <span className="text-amber-300 font-semibold">{currentStaff?.name || 'Staff Member'}</span> • Shift Active
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setIsStaffMode(false)}
            className="px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-300 border border-amber-500/40 text-xs font-bold flex items-center gap-2 transition-all hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Storefront</span>
          </button>

          <button
            onClick={logoutStaff}
            className="px-3.5 py-2.5 rounded-xl bg-red-950/40 hover:bg-red-900/60 text-red-300 border border-red-500/30 text-xs font-bold flex items-center gap-1.5 transition-all"
            title="Sign out of staff portal"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Metrics Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="glass-panel rounded-2xl p-4 border border-amber-500/20">
          <span className="text-[11px] text-stone-400 uppercase tracking-wider block">Today's Revenue</span>
          <div className="text-2xl font-black font-cinzel text-amber-400 mt-1">₹{totalRevenue}</div>
          <span className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            <span>Live Counter & Online Sales</span>
          </span>
        </div>

        <div className="glass-panel rounded-2xl p-4 border border-amber-500/20">
          <span className="text-[11px] text-stone-400 uppercase tracking-wider block">Active Kitchen Orders</span>
          <div className="text-2xl font-black font-cinzel text-white mt-1">{activeOrdersCount} Orders</div>
          <span className="text-[10px] text-amber-400 mt-1 flex items-center gap-1">
            <Flame className="w-3 h-3 text-orange-500" />
            <span>Tandoor & Pit In Progress</span>
          </span>
        </div>

        <div className="glass-panel rounded-2xl p-4 border border-amber-500/20">
          <span className="text-[11px] text-stone-400 uppercase tracking-wider block">Upcoming Majlis Bookings</span>
          <div className="text-2xl font-black font-cinzel text-white mt-1">{pendingReservationsCount} Tables</div>
          <span className="text-[10px] text-stone-400 mt-1 flex items-center gap-1">
            <CalendarDays className="w-3 h-3 text-amber-400" />
            <span>Floor Seating Reserved</span>
          </span>
        </div>

        <div className="glass-panel rounded-2xl p-4 border border-amber-500/20">
          <span className="text-[11px] text-stone-400 uppercase tracking-wider block">Sold Out Items</span>
          <div className="text-2xl font-black font-cinzel text-white mt-1">{soldOutItems.length} Dishes</div>
          <span className="text-[10px] text-stone-400 mt-1">Stock status controlled below</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-stone-800 pb-2">
        <button
          onClick={() => setActiveStaffTab('orders')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
            activeStaffTab === 'orders' 
              ? 'bg-amber-500 text-stone-950 shadow-md' 
              : 'text-stone-400 hover:text-white bg-stone-900/60'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Live Orders Queue ({orderHistory.length})</span>
        </button>

        <button
          onClick={() => setActiveStaffTab('reservations')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
            activeStaffTab === 'reservations' 
              ? 'bg-amber-500 text-stone-950 shadow-md' 
              : 'text-stone-400 hover:text-white bg-stone-900/60'
          }`}
        >
          <CalendarDays className="w-4 h-4" />
          <span>Majlis Bookings ({reservations.length})</span>
        </button>

        <button
          onClick={() => setActiveStaffTab('menu')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
            activeStaffTab === 'menu' 
              ? 'bg-amber-500 text-stone-950 shadow-md' 
              : 'text-stone-400 hover:text-white bg-stone-900/60'
          }`}
        >
          <Sliders className="w-4 h-4" />
          <span>Menu Stock & Availability</span>
        </button>
      </div>

      {/* TAB 1: Live Orders Queue */}
      {activeStaffTab === 'orders' && (
        <div className="space-y-4">
          {orderHistory.length === 0 ? (
            <div className="glass-panel p-8 rounded-2xl text-center text-stone-400 text-sm">
              No orders placed yet. Place an order from the customer view to watch it arrive here in real-time!
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {orderHistory.map(order => (
                <div key={order.id} className="glass-card rounded-2xl p-5 border border-stone-800 space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-amber-400 text-sm">{order.id}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded uppercase font-bold bg-stone-800 text-stone-300">
                          {order.orderType}
                        </span>
                      </div>
                      <span className="text-[11px] text-stone-400">Placed: {order.placedAt || '12:30 PM'} • {order.date}</span>
                    </div>
                    
                    <div className="text-right">
                      <span className="text-[10px] text-stone-400 block">Total Bill</span>
                      <span className="font-cinzel text-lg font-black text-white">₹{order.grandTotal}</span>
                    </div>
                  </div>

                  {/* Customer Info */}
                  <div className="text-xs text-stone-300 space-y-1 bg-stone-900/50 p-3 rounded-xl border border-stone-800/80">
                    <div className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-amber-400" />
                      <span className="font-semibold text-white">{order.customerDetails?.name || 'Walk-in Guest'}</span>
                      <span className="text-stone-400">• {order.customerDetails?.phone || '+91 93372 05169'}</span>
                    </div>
                    {order.customerDetails?.address && (
                      <div className="text-[11px] text-stone-400">
                        📍 {order.customerDetails.address} ({order.deliveryZone || 'Expressway'})
                      </div>
                    )}
                  </div>

                  {/* Items List */}
                  <div className="space-y-1.5 text-xs text-stone-300">
                    <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">Feast Items:</span>
                    {order.items.map((item, i) => (
                      <div key={i} className="flex justify-between">
                        <span>{item.quantity}x {item.name} {item.selectedPortion ? `(${item.selectedPortion.size})` : ''}</span>
                        <span className="text-white font-medium">₹{item.currentPrice * item.quantity}</span>
                      </div>
                    ))}
                  </div>

                  {/* Kitchen Action Buttons */}
                  <div className="pt-3 border-t border-stone-800 flex items-center justify-between gap-2">
                    <span className="text-xs text-stone-400">
                      Status: <span className="font-bold text-amber-400 uppercase">{order.status || 'received'}</span>
                    </span>

                    <div className="flex gap-1.5">
                      <button
                        onClick={() => handleUpdateOrderStatus(order.id, 'preparing')}
                        className="px-2.5 py-1 rounded-lg bg-orange-600/30 hover:bg-orange-600/50 text-orange-300 border border-orange-500/40 text-[11px] font-semibold"
                      >
                        In Pit / Oven
                      </button>
                      <button
                        onClick={() => handleUpdateOrderStatus(order.id, 'dispatched')}
                        className="px-2.5 py-1 rounded-lg bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 border border-blue-500/40 text-[11px] font-semibold"
                      >
                        Dispatched
                      </button>
                      <button
                        onClick={() => handleUpdateOrderStatus(order.id, 'delivered')}
                        className="px-2.5 py-1 rounded-lg bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 border border-emerald-500/40 text-[11px] font-semibold"
                      >
                        Delivered ✓
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 2: Majlis Reservations */}
      {activeStaffTab === 'reservations' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reservations.map(res => (
              <div key={res.id} className="glass-card rounded-2xl p-5 border border-stone-800 space-y-3">
                <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                  <div>
                    <span className="font-mono font-bold text-amber-400 text-sm">{res.id}</span>
                    <h4 className="text-sm font-bold text-white mt-0.5">{res.name}</h4>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
                    res.status === 'confirmed' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-stone-800 text-stone-400'
                  }`}>
                    {res.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-stone-300">
                  <div>
                    <span className="text-stone-500 block">Date & Slot:</span>
                    <span className="font-semibold text-white">{res.date} • {res.timeSlot}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 block">Party Size:</span>
                    <span className="font-semibold text-white">{res.guests}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-stone-500 block">Reserved Area:</span>
                    <span className="font-semibold text-amber-400">{res.seatingType}</span>
                  </div>
                  {res.notes && (
                    <div className="col-span-2 text-[11px] text-stone-400 italic bg-stone-900/60 p-2 rounded-lg">
                      Note: "{res.notes}"
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-stone-800 flex justify-between items-center">
                  <span className="text-xs text-stone-400">Phone: {res.phone}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => updateReservationStatus(res.id, 'seated')}
                      className="text-xs px-3 py-1 rounded-lg bg-amber-500 text-stone-950 font-bold"
                    >
                      Seat Guests
                    </button>
                    <button
                      onClick={() => updateReservationStatus(res.id, 'completed')}
                      className="text-xs px-3 py-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300"
                    >
                      Complete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: Menu Item Stock Overrides */}
      {activeStaffTab === 'menu' && (
        <div className="glass-panel rounded-2xl p-6 border border-amber-500/30 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-cinzel text-lg font-bold text-white">Item Availability Control</h3>
              <p className="text-xs text-stone-400">Toggle items off if ingredients are depleted in the pit/tandoor.</p>
            </div>
            <span className="text-xs text-stone-400">Total Items: {MENU_ITEMS.length}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
            {MENU_ITEMS.map(item => {
              const isOut = soldOutItems.includes(item.id);
              return (
                <div 
                  key={item.id} 
                  className={`p-3 rounded-xl border flex items-center justify-between gap-3 ${
                    isOut ? 'bg-red-950/20 border-red-900/50' : 'bg-stone-900/60 border-stone-800'
                  }`}
                >
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-white truncate">{item.name}</div>
                    <div className="text-[10px] text-stone-400">{item.category} • ₹{item.price}</div>
                  </div>

                  <button
                    onClick={() => toggleItemStock(item.id)}
                    className={`shrink-0 text-[11px] px-2.5 py-1 rounded-lg font-bold transition-all ${
                      isOut 
                        ? 'bg-red-600 text-white shadow-md' 
                        : 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-600/50'
                    }`}
                  >
                    {isOut ? 'Sold Out' : 'In Stock'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
};
