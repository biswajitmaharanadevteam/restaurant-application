import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useApp } from '../context/AppContext';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Tag, 
  ArrowRight, 
  Bike, 
  Store, 
  Utensils, 
  Sparkles, 
  AlertCircle 
} from 'lucide-react';

export const CartDrawer = () => {
  const { 
    cart, 
    updateQuantity, 
    removeFromCart, 
    clearCart, 
    subtotal, 
    discountAmount, 
    deliveryFee, 
    packagingFee, 
    gst, 
    grandTotal, 
    orderType, 
    setOrderType, 
    couponCode, 
    appliedCoupon, 
    couponError, 
    applyCoupon, 
    removeCoupon, 
    availableCoupons 
  } = useCart();

  const { isCartOpen, setIsCartOpen, setIsCheckoutOpen } = useApp();
  const [inputCoupon, setInputCoupon] = useState('');

  if (!isCartOpen) return null;

  const handleApplyCoupon = (codeToApply) => {
    applyCoupon(codeToApply || inputCoupon);
    setInputCoupon('');
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        onClick={() => setIsCartOpen(false)} 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      ></div>

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md glass-panel border-l border-amber-500/30 bg-[#0c0f18] shadow-2xl flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="p-5 border-b border-stone-800 flex items-center justify-between bg-stone-950/60">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-cinzel text-lg font-bold text-white">Your Dawat Feast Cart</h3>
                <p className="text-xs text-stone-400">{cart.length} delicacies chosen</p>
              </div>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Order Type Toggle (Delivery vs Takeaway vs Dine-in) */}
          <div className="p-4 bg-stone-900/50 border-b border-stone-800">
            <div className="grid grid-cols-3 gap-2 bg-stone-950 p-1 rounded-xl border border-stone-800 text-xs">
              <button
                onClick={() => setOrderType('delivery')}
                className={`py-2 px-2 rounded-lg font-semibold flex items-center justify-center gap-1.5 transition-all ${
                  orderType === 'delivery' 
                    ? 'bg-amber-500 text-stone-950 shadow-md font-bold' 
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <Bike className="w-3.5 h-3.5" />
                <span>Delivery</span>
              </button>
              <button
                onClick={() => setOrderType('takeaway')}
                className={`py-2 px-2 rounded-lg font-semibold flex items-center justify-center gap-1.5 transition-all ${
                  orderType === 'takeaway' 
                    ? 'bg-amber-500 text-stone-950 shadow-md font-bold' 
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <Store className="w-3.5 h-3.5" />
                <span>Takeaway</span>
              </button>
              <button
                onClick={() => setOrderType('dinein')}
                className={`py-2 px-2 rounded-lg font-semibold flex items-center justify-center gap-1.5 transition-all ${
                  orderType === 'dinein' 
                    ? 'bg-amber-500 text-stone-950 shadow-md font-bold' 
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <Utensils className="w-3.5 h-3.5" />
                <span>At Table</span>
              </button>
            </div>
          </div>

          {/* Cart Items Scrollable Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 divide-y divide-stone-800/60">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-3">
                <ShoppingBag className="w-12 h-12 text-stone-700" />
                <h4 className="font-cinzel text-base font-bold text-stone-300">Your Cart is Empty</h4>
                <p className="text-xs text-stone-500 max-w-xs">
                  Add some pit-steamed Mandi platters or sizzling charcoal kebabs to begin your royal feast.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 text-xs px-4 py-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <>
                {cart.map(item => (
                  <div key={item.cartItemId} className="pt-3 first:pt-0 flex gap-3 items-center">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-16 h-16 rounded-xl object-cover border border-stone-800 shrink-0" 
                    />
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-white truncate">{item.name}</h4>
                      {item.selectedPortion && (
                        <div className="text-[11px] text-amber-400/90 font-medium">
                          Portion: {item.selectedPortion.size}
                        </div>
                      )}
                      <div className="text-xs font-bold text-amber-400 font-cinzel mt-1">
                        ₹{item.currentPrice * item.quantity}
                        <span className="text-[10px] text-stone-500 font-normal ml-1">
                          (₹{item.currentPrice} ea)
                        </span>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-1.5 bg-stone-900 border border-stone-800 rounded-lg p-1 shrink-0">
                      <button
                        onClick={() => updateQuantity(item.cartItemId, -1)}
                        className="p-1 text-stone-400 hover:text-white rounded"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-5 text-center text-xs font-bold text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.cartItemId, 1)}
                        className="p-1 text-amber-400 hover:text-white rounded"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeFromCart(item.cartItemId)}
                      className="p-1.5 text-stone-500 hover:text-red-400 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                {/* Free Delivery Bar */}
                {orderType === 'delivery' && (
                  <div className="pt-3">
                    {subtotal >= 499 ? (
                      <div className="p-2.5 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-[11px] text-emerald-300 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Congratulations! Free Delivery unlocked across Bhubaneswar.</span>
                      </div>
                    ) : (
                      <div className="p-2.5 rounded-xl bg-stone-900 border border-stone-800 text-[11px] text-stone-400 flex items-center justify-between">
                        <span>Add ₹{499 - subtotal} more for Free Delivery</span>
                        <span className="font-semibold text-amber-400">₹499 threshold</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Coupons Section */}
                <div className="pt-4 space-y-2">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" />
                      <input
                        type="text"
                        placeholder="Coupon (e.g. BANJARAA50)"
                        value={inputCoupon}
                        onChange={(e) => setInputCoupon(e.target.value)}
                        className="w-full pl-8 pr-2 py-2 bg-stone-900 border border-stone-800 rounded-xl text-xs text-white uppercase placeholder-stone-600 focus:border-amber-500 focus:outline-none"
                      />
                    </div>
                    <button
                      onClick={() => handleApplyCoupon()}
                      className="px-3.5 py-2 bg-stone-800 hover:bg-stone-700 text-amber-400 font-bold text-xs rounded-xl border border-stone-700 transition-colors"
                    >
                      Apply
                    </button>
                  </div>

                  {couponError && (
                    <div className="text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{couponError}</span>
                    </div>
                  )}

                  {appliedCoupon && (
                    <div className="p-2 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-between text-xs text-amber-300">
                      <div>
                        <span className="font-bold">{appliedCoupon.code}</span> applied! (Saved ₹{discountAmount})
                      </div>
                      <button onClick={removeCoupon} className="text-[10px] text-stone-400 hover:text-white underline">
                        Remove
                      </button>
                    </div>
                  )}

                  {/* Available Coupon Quick Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {availableCoupons.map(c => (
                      <button
                        key={c.code}
                        onClick={() => handleApplyCoupon(c.code)}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-stone-900/90 text-amber-400/90 border border-amber-500/30 hover:bg-amber-500/20"
                      >
                        {c.code}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer & Checkout Action */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-stone-800 bg-stone-950 space-y-3">
              {/* Cost Summary Breakdown */}
              <div className="space-y-1.5 text-xs text-stone-400">
                <div className="flex justify-between">
                  <span>Delicacies Subtotal:</span>
                  <span className="text-white font-semibold">₹{subtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Coupon Discount:</span>
                    <span className="font-bold">-₹{discountAmount}</span>
                  </div>
                )}
                {orderType === 'delivery' && (
                  <div className="flex justify-between">
                    <span>Delivery Partner Fee:</span>
                    <span className="text-white font-semibold">
                      {deliveryFee === 0 ? <span className="text-emerald-400 font-bold">FREE</span> : `₹${deliveryFee}`}
                    </span>
                  </div>
                )}
                {packagingFee > 0 && (
                  <div className="flex justify-between">
                    <span>Eco Dawat Packaging:</span>
                    <span className="text-white font-semibold">₹{packagingFee}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Restaurant GST (5%):</span>
                  <span className="text-white font-semibold">₹{gst}</span>
                </div>
              </div>

              {/* Grand Total */}
              <div className="pt-2 border-t border-stone-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider block">To Pay</span>
                  <div className="text-2xl font-black font-cinzel text-amber-400">
                    ₹{grandTotal}
                  </div>
                </div>

                <button
                  onClick={handleProceedToCheckout}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm shadow-xl shadow-amber-500/20 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
                >
                  <span>Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
