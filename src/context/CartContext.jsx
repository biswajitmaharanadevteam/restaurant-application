import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const CartContext = createContext();

const COUPONS = {
  BANJARAA50: { code: "BANJARAA50", type: "percent", value: 20, maxDiscount: 150, minOrder: 499, desc: "20% off up to ₹150 on orders above ₹499" },
  MANDIROYAL: { code: "MANDIROYAL", type: "flat", value: 100, minOrder: 799, desc: "Flat ₹100 off on Grand Mandi orders above ₹799" },
  FIRSTDAWAT: { code: "FIRSTDAWAT", type: "percent", value: 15, maxDiscount: 200, minOrder: 399, desc: "15% off up to ₹200 for your first Dawat" }
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('banjaraa_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [orderType, setOrderType] = useState('delivery'); // 'delivery' | 'takeaway' | 'dinein'
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState('');
  const [deliveryZone, setDeliveryZone] = useState('Cuttack-Puri Bypass (Immediate)');
  const [deliveryAddress, setDeliveryAddress] = useState({
    street: '',
    houseNo: '',
    landmark: '',
    contactName: '',
    contactPhone: ''
  });

  const [orderHistory, setOrderHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('banjaraa_orders');
      return saved ? JSON.parse(saved) : [
        {
          id: "ORD-9824",
          date: new Date(Date.now() - 3600000 * 2).toLocaleDateString("en-IN", { day: 'numeric', month: 'short', year: 'numeric' }),
          items: [
            { name: "Chicken Juicy Mandi (Dawat Platter)", quantity: 1, price: 649 },
            { name: "Mohabbat Ka Sharbat", quantity: 2, price: 129 }
          ],
          subtotal: 907,
          grandTotal: 952,
          orderType: "delivery",
          status: "delivered",
          placedAt: "12:45 PM"
        }
      ];
    } catch {
      return [];
    }
  });

  const [activeOrder, setActiveOrder] = useState(null);

  // Sync cart to localStorage
  useEffect(() => {
    localStorage.setItem('banjaraa_cart', JSON.stringify(cart));
  }, [cart]);

  // Sync orders to localStorage
  useEffect(() => {
    localStorage.setItem('banjaraa_orders', JSON.stringify(orderHistory));
  }, [orderHistory]);

  const addToCart = (item, portion = null, customNotes = '') => {
    const portionKey = portion ? portion.size : 'Standard';
    const price = portion ? portion.price : item.price;
    const cartItemId = `${item.id}-${portionKey}`;

    setCart(prev => {
      const existing = prev.find(i => i.cartItemId === cartItemId);
      if (existing) {
        return prev.map(i => i.cartItemId === cartItemId ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, {
        ...item,
        cartItemId,
        selectedPortion: portion,
        currentPrice: price,
        customNotes,
        quantity: 1
      }];
    });
  };

  const updateQuantity = (cartItemId, delta) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.cartItemId === cartItemId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const removeFromCart = (cartItemId) => {
    setCart(prev => prev.filter(item => item.cartItemId !== cartItemId));
  };

  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
  };

  // Calculations
  const subtotal = cart.reduce((sum, item) => sum + (item.currentPrice * item.quantity), 0);
  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Coupon application logic
  const applyCoupon = (code) => {
    setCouponError('');
    const upper = code.trim().toUpperCase();
    const coupon = COUPONS[upper];
    if (!coupon) {
      setCouponError('Invalid coupon code. Try BANJARAA50 or MANDIROYAL');
      return false;
    }
    if (subtotal < coupon.minOrder) {
      setCouponError(`Min order of ₹${coupon.minOrder} required for ${upper}`);
      return false;
    }
    setAppliedCoupon(coupon);
    setCouponCode(upper);
    return true;
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode('');
    setCouponError('');
  };

  // Discount calculation
  let discountAmount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.type === 'percent') {
      const rawDiscount = (subtotal * appliedCoupon.value) / 100;
      discountAmount = Math.min(rawDiscount, appliedCoupon.maxDiscount || Infinity);
    } else if (appliedCoupon.type === 'flat') {
      discountAmount = appliedCoupon.value;
    }
  }

  // Delivery fee rules
  let deliveryFee = 0;
  if (orderType === 'delivery') {
    if (subtotal >= 499) {
      deliveryFee = 0; // Free delivery over 499
    } else {
      deliveryFee = deliveryZone.includes('Immediate') ? 29 : 49;
    }
  }

  const packagingFee = orderType === 'dinein' ? 0 : (subtotal > 0 ? 25 : 0);
  const discountedSubtotal = Math.max(0, subtotal - discountAmount);
  const gst = Math.round(discountedSubtotal * 0.05); // 5% Restaurant GST
  const grandTotal = Math.max(0, discountedSubtotal + deliveryFee + packagingFee + gst);

  // Place simulated order
  const placeOrder = (customerDetails, paymentMethod) => {
    const orderNumber = `BANJ-${Math.floor(1000 + Math.random() * 9000)}`;
    const now = new Date();
    const newOrder = {
      id: orderNumber,
      date: now.toLocaleDateString("en-IN", { day: 'numeric', month: 'short', year: 'numeric' }),
      placedAt: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      items: [...cart],
      subtotal,
      discount: discountAmount,
      deliveryFee,
      packagingFee,
      gst,
      grandTotal,
      orderType,
      deliveryZone,
      customerDetails,
      paymentMethod,
      status: "received", // received -> preparing -> in_pit -> out_for_delivery -> delivered
      estimatedTime: orderType === 'delivery' ? "35 - 45 mins" : "20 - 25 mins",
      createdAtTimestamp: Date.now()
    };

    setOrderHistory(prev => [newOrder, ...prev]);
    setActiveOrder(newOrder);
    clearCart();

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.log("Confetti triggered", e);
    }

    return newOrder;
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      totalItemsCount,
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
      availableCoupons: Object.values(COUPONS),
      deliveryZone,
      setDeliveryZone,
      deliveryAddress,
      setDeliveryAddress,
      orderHistory,
      setOrderHistory,
      activeOrder,
      setActiveOrder,
      placeOrder
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
