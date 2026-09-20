import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { STAFF_ACCOUNTS } from '../data/staffCredentials';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isOrderTrackerOpen, setIsOrderTrackerOpen] = useState(false);
  
  // Staff Portal & Authentication State
  const [isStaffMode, setIsStaffMode] = useState(false);
  const [isStaffLoginOpen, setIsStaffLoginOpen] = useState(false);
  const [currentStaff, setCurrentStaff] = useState(() => {
    try {
      const saved = localStorage.getItem('banjaraa_current_staff');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [toast, setToast] = useState(null);

  // Stored reservations
  const [reservations, setReservations] = useState(() => {
    try {
      const saved = localStorage.getItem('banjaraa_reservations');
      return saved ? JSON.parse(saved) : [
        {
          id: "RES-7712",
          name: "Rajesh Mohanty",
          phone: "+91 98610 23456",
          guests: "5 Guests",
          date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
          timeSlot: "08:30 PM (Dinner)",
          seatingType: "Traditional Arabian Majlis",
          notes: "Anniversary celebration, prefer floor cushion seating near center",
          status: "confirmed",
          createdAt: new Date().toLocaleDateString()
        }
      ];
    } catch {
      return [];
    }
  });

  const [activeReservation, setActiveReservation] = useState(null);

  // Sold out items state (managed by staff)
  const [soldOutItems, setSoldOutItems] = useState(() => {
    try {
      const saved = localStorage.getItem('banjaraa_soldout');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('banjaraa_reservations', JSON.stringify(reservations));
  }, [reservations]);

  useEffect(() => {
    localStorage.setItem('banjaraa_soldout', JSON.stringify(soldOutItems));
  }, [soldOutItems]);

  useEffect(() => {
    if (currentStaff) {
      localStorage.setItem('banjaraa_current_staff', JSON.stringify(currentStaff));
    } else {
      localStorage.removeItem('banjaraa_current_staff');
    }
  }, [currentStaff]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // Staff Authentication Methods
  const openStaffPortal = () => {
    if (currentStaff) {
      setIsStaffMode(true);
    } else {
      setIsStaffLoginOpen(true);
    }
  };

  const loginStaff = (usernameOrEmailOrPin, password = '') => {
    const input = usernameOrEmailOrPin.trim().toLowerCase();
    const passInput = password.trim();

    // Check by PIN (e.g. 1130)
    let matched = STAFF_ACCOUNTS.find(acc => acc.pin === input);

    // Or check by username/email + password
    if (!matched) {
      matched = STAFF_ACCOUNTS.find(acc => 
        (acc.username.toLowerCase() === input || acc.email.toLowerCase() === input) &&
        (acc.password === passInput || !passInput)
      );
    }

    if (matched) {
      setCurrentStaff(matched);
      setIsStaffLoginOpen(false);
      setIsStaffMode(true);
      showToast(`Welcome back, ${matched.name} (${matched.role})!`, 'success');
      return { success: true, user: matched };
    }

    return { success: false, error: 'Invalid credentials or PIN. See quick demo credentials.' };
  };

  const logoutStaff = () => {
    setCurrentStaff(null);
    setIsStaffMode(false);
    showToast('Staff logged out successfully.');
  };

  const createReservation = (bookingData) => {
    const resId = `RES-${Math.floor(1000 + Math.random() * 9000)}`;
    const newRes = {
      ...bookingData,
      id: resId,
      status: "confirmed",
      createdAt: new Date().toLocaleDateString("en-IN")
    };

    setReservations(prev => [newRes, ...prev]);
    setActiveReservation(newRes);
    showToast(`Majlis Table Reserved! Booking ID: ${resId}`, 'success');

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.5 }
      });
    } catch (e) {
      console.log(e);
    }

    return newRes;
  };

  const updateReservationStatus = (resId, newStatus) => {
    setReservations(prev => prev.map(r => r.id === resId ? { ...r, status: newStatus } : r));
    showToast(`Reservation #${resId} status updated to ${newStatus}`);
  };

  const toggleItemStock = (itemId) => {
    setSoldOutItems(prev => {
      const isOut = prev.includes(itemId);
      const updated = isOut ? prev.filter(id => id !== itemId) : [...prev, itemId];
      showToast(isOut ? "Item marked as Available" : "Item marked as Sold Out", isOut ? "success" : "warning");
      return updated;
    });
  };

  return (
    <AppContext.Provider value={{
      activeTab,
      setActiveTab,
      isReservationOpen,
      setIsReservationOpen,
      isCartOpen,
      setIsCartOpen,
      isCheckoutOpen,
      setIsCheckoutOpen,
      isOrderTrackerOpen,
      setIsOrderTrackerOpen,
      isStaffMode,
      setIsStaffMode,
      isStaffLoginOpen,
      setIsStaffLoginOpen,
      currentStaff,
      openStaffPortal,
      loginStaff,
      logoutStaff,
      toast,
      showToast,
      reservations,
      activeReservation,
      setActiveReservation,
      createReservation,
      updateReservationStatus,
      soldOutItems,
      toggleItemStock
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
