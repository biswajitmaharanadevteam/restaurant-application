import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { 
  X, 
  CalendarDays, 
  Clock, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  User, 
  MessageSquare, 
  Crown, 
  Share2, 
  CalendarCheck 
} from 'lucide-react';

export const ReservationModal = () => {
  const { isReservationOpen, setIsReservationOpen, createReservation } = useApp();

  const [step, setStep] = useState('form'); // 'form' | 'confirmed'
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  // Form State
  const [seatingType, setSeatingType] = useState('Traditional Arabian Majlis');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [timeSlot, setTimeSlot] = useState('08:00 PM (Royal Dinner)');
  const [guests, setGuests] = useState('4 - 5 Guests');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [formError, setFormError] = useState('');

  if (!isReservationOpen) return null;

  const timeSlots = [
    { label: "12:30 PM (Lunch)", session: "lunch" },
    { label: "01:30 PM (Lunch)", session: "lunch" },
    { label: "02:30 PM (Late Lunch)", session: "lunch" },
    { label: "07:30 PM (Dinner)", session: "dinner" },
    { label: "08:30 PM (Peak Dinner)", session: "dinner" },
    { label: "09:30 PM (Dinner)", session: "dinner" },
    { label: "10:15 PM (Late Dinner)", session: "dinner" }
  ];

  const guestOptions = [
    "2 Guests (Couple)",
    "3 - 4 Guests (Small Group)",
    "5 - 6 Guests (Family Thal)",
    "7 - 8 Guests (Majlis Feast)",
    "10+ Guests (Celebration)"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    if (!name.trim()) {
      setFormError('Please enter your full name');
      return;
    }
    if (!phone.trim() || phone.trim().length < 10) {
      setFormError('Please enter a valid 10-digit mobile number');
      return;
    }

    const booking = createReservation({
      name,
      phone,
      date,
      timeSlot,
      guests,
      seatingType,
      notes
    });

    setConfirmedBooking(booking);
    setStep('confirmed');
  };

  const handleClose = () => {
    setIsReservationOpen(false);
    setStep('form');
  };

  const handleWhatsAppShare = () => {
    if (!confirmedBooking) return;
    const text = `Royal Majlis Reservation at Banjaraa - Ek Anokhi Dawat!\nBooking ID: ${confirmedBooking.id}\nDate: ${confirmedBooking.date}\nTime: ${confirmedBooking.timeSlot}\nGuests: ${confirmedBooking.guests}\nSeating: ${confirmedBooking.seatingType}\nLocation: Cuttack-Puri Bypass, Bhubaneswar`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="glass-panel border border-amber-500/40 rounded-3xl max-w-2xl w-full my-8 overflow-hidden shadow-2xl relative">
        
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 p-5 sm:p-6 border-b border-amber-500/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
              <CalendarDays className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-cinzel text-xl font-bold text-white">
                {step === 'form' ? 'Reserve Royal Majlis or Table' : 'Reservation Confirmed!'}
              </h3>
              <p className="text-xs text-amber-400/80">Banjaraa • Cuttack-Puri Bypass, Bhubaneswar</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-full bg-stone-900/80 text-stone-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            
            {formError && (
              <div className="p-3 bg-red-950/60 border border-red-500/50 rounded-xl text-xs text-red-300">
                {formError}
              </div>
            )}

            {/* 1. Seating Area Experience Selection */}
            <div>
              <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Choose Your Dining Experience</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {RESTAURANT_INFO.seatingTypes.map(seat => {
                  const isChosen = seatingType === seat.name;
                  return (
                    <div
                      key={seat.id}
                      onClick={() => setSeatingType(seat.name)}
                      className={`cursor-pointer p-3.5 rounded-xl border transition-all text-left relative ${
                        isChosen 
                          ? 'bg-amber-500/15 border-amber-400 shadow-md shadow-amber-500/10' 
                          : 'bg-stone-900/60 border-stone-800 hover:border-stone-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-bold ${isChosen ? 'text-amber-300' : 'text-stone-200'}`}>
                          {seat.name}
                        </span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-stone-800 text-stone-400">
                          {seat.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-stone-400 mt-1 line-clamp-2 leading-relaxed font-light">
                        {seat.desc}
                      </p>
                      <div className="text-[10px] text-amber-400/90 font-medium mt-2">
                        Capacity: {seat.capacity}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. Date, Time & Guests Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Date */}
              <div>
                <label className="block text-xs font-semibold text-stone-400 mb-1.5 flex items-center gap-1">
                  <CalendarDays className="w-3.5 h-3.5 text-amber-400" />
                  <span>Date</span>
                </label>
                <input
                  type="date"
                  value={date}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3 py-2.5 text-xs text-white focus:border-amber-500 focus:outline-none"
                  required
                />
              </div>

              {/* Time Slot */}
              <div>
                <label className="block text-xs font-semibold text-stone-400 mb-1.5 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Time Slot</span>
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3 py-2.5 text-xs text-white focus:border-amber-500 focus:outline-none"
                >
                  {timeSlots.map((ts, idx) => (
                    <option key={idx} value={ts.label}>{ts.label}</option>
                  ))}
                </select>
              </div>

              {/* Guests Count */}
              <div>
                <label className="block text-xs font-semibold text-stone-400 mb-1.5 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  <span>Guest Count</span>
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3 py-2.5 text-xs text-white focus:border-amber-500 focus:outline-none"
                >
                  {guestOptions.map((opt, idx) => (
                    <option key={idx} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* 3. Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-400 mb-1.5 flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-amber-400" />
                  <span>Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Debashis Patnaik"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-600 focus:border-amber-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-400 mb-1.5 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Mobile Phone Number</span>
                </label>
                <input
                  type="tel"
                  placeholder="+91 9XXXXXXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-600 focus:border-amber-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Notes / Special Occasions */}
            <div>
              <label className="block text-xs font-semibold text-stone-400 mb-1.5 flex items-center gap-1">
                <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                <span>Special Occasion or Preferences (Optional)</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Birthday celebration, anniversary cake, center floor seating..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-600 focus:border-amber-500 focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black text-sm shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 transition-all"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Confirm Arabian Majlis Reservation</span>
            </button>

          </form>
        ) : (
          /* Step 2: Confirmed Digital Pass */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h4 className="font-cinzel text-2xl font-bold text-white">Your Royal Table Awaits!</h4>
              <p className="text-sm text-stone-300">
                A confirmation SMS & WhatsApp reminder has been prepared for you.
              </p>
            </div>

            {/* Digital Pass Card */}
            <div className="glass-panel-gold rounded-2xl p-6 border-2 border-amber-500/40 text-left max-w-md mx-auto relative overflow-hidden shadow-xl">
              <div className="flex justify-between items-center border-b border-amber-500/30 pb-3 mb-4">
                <div>
                  <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest">Dawat Pass</span>
                  <div className="font-cinzel font-black text-lg text-white">Banjaraa Bhubaneswar</div>
                </div>
                <div className="text-right font-mono font-bold text-amber-400 text-sm bg-stone-950/80 px-2.5 py-1 rounded border border-amber-500/40">
                  {confirmedBooking?.id}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-stone-400 block">Guest Name</span>
                  <span className="font-semibold text-white">{confirmedBooking?.name}</span>
                </div>
                <div>
                  <span className="text-stone-400 block">Phone</span>
                  <span className="font-semibold text-white">{confirmedBooking?.phone}</span>
                </div>
                <div>
                  <span className="text-stone-400 block">Date & Time</span>
                  <span className="font-semibold text-amber-300">{confirmedBooking?.date} • {confirmedBooking?.timeSlot}</span>
                </div>
                <div>
                  <span className="text-stone-400 block">Party Size</span>
                  <span className="font-semibold text-white">{confirmedBooking?.guests}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-stone-400 block">Reserved Area</span>
                  <span className="font-semibold text-amber-400">{confirmedBooking?.seatingType}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-amber-500/20 flex items-center justify-between text-[11px] text-stone-400">
                <span>📍 Plot No. 1051/2758, Cuttack-Puri Bypass</span>
                <span className="text-emerald-400 font-bold">Confirmed ✓</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleWhatsAppShare}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md"
              >
                <Share2 className="w-4 h-4" />
                <span>Share Details to WhatsApp</span>
              </button>

              <button
                onClick={handleClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-300 border border-amber-500/30 text-xs font-semibold"
              >
                Back to Exploration
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
