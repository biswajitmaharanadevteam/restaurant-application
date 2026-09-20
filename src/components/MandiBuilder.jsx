import React, { useState } from 'react';
import { MANDI_BUILDER_OPTIONS } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { useApp } from '../context/AppContext';
import { 
  Sparkles, 
  Flame, 
  Plus, 
  Minus, 
  Check, 
  ShoppingBag, 
  Users, 
  Utensils, 
  Crown, 
  RotateCcw, 
  Drumstick, 
  Bone, 
  CircleDot, 
  Box 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const MandiBuilder = () => {
  const { addToCart } = useCart();
  const { showToast, setIsCartOpen } = useApp();

  // State
  const [selectedSize, setSelectedSize] = useState(MANDI_BUILDER_OPTIONS.sizes[1]); // Default 4-person Grand Thal
  const [selectedRice, setSelectedRice] = useState(MANDI_BUILDER_OPTIONS.riceBases[0]);
  const [proteins, setProteins] = useState({
    'juicy-chicken': 2,
    'mutton-shank': 1,
    'alfahm-chicken': 1,
    'galouti-kebab': 0,
    'paneer-angara': 0
  });
  const [selectedToppings, setSelectedToppings] = useState(['fried-nuts']);

  // Helpers
  const handleProteinCount = (id, delta) => {
    setProteins(prev => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const toggleTopping = (id) => {
    setSelectedToppings(prev => 
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  // Pricing calculation
  const basePrice = selectedSize.basePrice;
  const ricePrice = selectedRice.price;
  
  const proteinPrice = MANDI_BUILDER_OPTIONS.proteins.reduce((sum, p) => {
    const count = proteins[p.id] || 0;
    return sum + (count * p.pricePerPiece);
  }, 0);

  const toppingPrice = selectedToppings.reduce((sum, tId) => {
    const top = MANDI_BUILDER_OPTIONS.toppings.find(t => t.id === tId);
    return sum + (top ? top.price : 0);
  }, 0);

  const totalCalculatedPrice = basePrice + ricePrice + proteinPrice + toppingPrice;

  // Reset to default
  const handleReset = () => {
    setSelectedSize(MANDI_BUILDER_OPTIONS.sizes[1]);
    setSelectedRice(MANDI_BUILDER_OPTIONS.riceBases[0]);
    setProteins({
      'juicy-chicken': 2,
      'mutton-shank': 1,
      'alfahm-chicken': 1,
      'galouti-kebab': 0,
      'paneer-angara': 0
    });
    setSelectedToppings(['fried-nuts']);
    showToast("Reset platter to Chef's recommended 4-Person Grand Thal");
  };

  // Add custom platter to cart
  const handleAddCustomPlatter = () => {
    const proteinSummary = Object.entries(proteins)
      .filter(([_, count]) => count > 0)
      .map(([id, count]) => {
        const pObj = MANDI_BUILDER_OPTIONS.proteins.find(p => p.id === id);
        return `${count}x ${pObj.name.split('(')[0].trim()}`;
      }).join(', ');

    const customItem = {
      id: `custom-mandi-${Date.now()}`,
      name: `Custom Mandi: ${selectedSize.label}`,
      category: "mandi",
      veg: false,
      rating: 5.0,
      reviews: 1,
      badge: "Custom Crafted",
      description: `Bespoke Platter with ${selectedRice.name}, ${proteinSummary || 'No meat added'}, plus authentic dips & selected toppings.`,
      price: totalCalculatedPrice,
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800&auto=format&fit=crop&q=80",
      tags: ["Custom Mandi", selectedSize.serves, selectedRice.name]
    };

    addToCart(customItem, { size: selectedSize.label, price: totalCalculatedPrice });

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.5 }
      });
    } catch (e) {
      console.log(e);
    }

    showToast(`Added your Custom ${selectedSize.label} to cart! (₹${totalCalculatedPrice})`, 'success');
    setIsCartOpen(true);
  };

  return (
    <section id="mandi-builder" className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-b from-[#0e121d] via-[#0b0d14] to-[#0e121d]">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-amber-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Feast Creator</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Build Your <span className="gold-gradient-text">Royal Mandi Thal</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-light">
            Craft your own bespoke Arabian sharing feast. Choose your pit-steamed rice base, stack your favorite fall-off-the-bone meats, and lavish your platter with traditional accompaniments.
          </p>
        </div>

        {/* 2-Column Grid: Left Controls, Right Live Thal Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Builder Controls (Col 7) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* STEP 1: Select Thal Size */}
            <div className="glass-panel rounded-2xl p-5 sm:p-6 border border-amber-500/30">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-amber-500 text-stone-950 font-black text-xs flex items-center justify-center">
                    1
                  </span>
                  <h3 className="font-cinzel text-lg font-bold text-white">Select Platter Size & Capacity</h3>
                </div>
                <Users className="w-4 h-4 text-amber-400" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {MANDI_BUILDER_OPTIONS.sizes.map(size => {
                  const isSelected = selectedSize.id === size.id;
                  return (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size)}
                      className={`p-4 rounded-xl text-left border transition-all relative ${
                        isSelected 
                          ? 'bg-amber-500/20 border-amber-400 shadow-lg shadow-amber-500/10' 
                          : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:border-stone-700'
                      }`}
                    >
                      {size.popular && (
                        <span className="absolute -top-2.5 right-3 text-[9px] font-black px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 uppercase tracking-wider">
                          Most Loved
                        </span>
                      )}
                      <div className={`font-cinzel font-bold text-sm ${isSelected ? 'text-amber-300' : 'text-stone-200'}`}>
                        {size.label}
                      </div>
                      <div className="text-xs text-amber-400/90 font-medium mt-0.5">{size.serves}</div>
                      <div className="text-[11px] text-stone-400 mt-2 font-light">{size.desc}</div>
                      <div className="mt-3 text-sm font-extrabold text-white">₹{size.basePrice} base</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 2: Choose Rice Base */}
            <div className="glass-panel rounded-2xl p-5 sm:p-6 border border-amber-500/30">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-amber-500 text-stone-950 font-black text-xs flex items-center justify-center">
                    2
                  </span>
                  <h3 className="font-cinzel text-lg font-bold text-white">Choose Your Rice Bed</h3>
                </div>
                <Utensils className="w-4 h-4 text-amber-400" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {MANDI_BUILDER_OPTIONS.riceBases.map(rice => {
                  const isSelected = selectedRice.id === rice.id;
                  return (
                    <button
                      key={rice.id}
                      onClick={() => setSelectedRice(rice)}
                      className={`p-4 rounded-xl text-left border transition-all ${
                        isSelected 
                          ? 'bg-amber-500/20 border-amber-400 shadow-md shadow-amber-500/10' 
                          : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:border-stone-700'
                      }`}
                    >
                      <div className={`font-bold text-sm ${isSelected ? 'text-amber-300' : 'text-stone-200'}`}>
                        {rice.name}
                      </div>
                      <div className="text-[11px] text-stone-400 mt-1 leading-snug">{rice.desc}</div>
                      <div className="mt-2 text-xs font-semibold text-amber-400">
                        {rice.price === 0 ? 'Included' : `+ ₹${rice.price}`}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 3: Customize Meats & Skewers */}
            <div className="glass-panel rounded-2xl p-5 sm:p-6 border border-amber-500/30">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-amber-500 text-stone-950 font-black text-xs flex items-center justify-center">
                    3
                  </span>
                  <h3 className="font-cinzel text-lg font-bold text-white">Stack Your Proteins & Charcoal Grills</h3>
                </div>
                <Flame className="w-4 h-4 text-orange-500" />
              </div>

              <div className="space-y-3">
                {MANDI_BUILDER_OPTIONS.proteins.map(protein => {
                  const count = proteins[protein.id] || 0;
                  return (
                    <div 
                      key={protein.id}
                      className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 transition-colors ${
                        count > 0 
                          ? 'bg-stone-900 border-amber-500/40' 
                          : 'bg-stone-900/50 border-stone-800/80'
                      }`}
                    >
                      <div>
                        <div className="font-semibold text-sm text-stone-200 flex items-center gap-2">
                          <span>{protein.name}</span>
                          {count > 0 && (
                            <span className="text-[10px] px-2 py-0.2 rounded-full bg-amber-500 text-stone-950 font-bold">
                              {count} Selected
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-amber-400/90 font-medium mt-0.5">
                          +₹{protein.pricePerPiece} per piece / portion
                        </div>
                      </div>

                      <div className="flex items-center gap-2 bg-stone-950 border border-stone-800 rounded-lg p-1">
                        <button
                          onClick={() => handleProteinCount(protein.id, -1)}
                          disabled={count === 0}
                          className="p-1 rounded text-stone-400 hover:text-white disabled:opacity-30"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-white">{count}</span>
                        <button
                          onClick={() => handleProteinCount(protein.id, 1)}
                          className="p-1 rounded text-amber-400 hover:bg-amber-500 hover:text-stone-950 transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* STEP 4: Accompaniments & Royal Extras */}
            <div className="glass-panel rounded-2xl p-5 sm:p-6 border border-amber-500/30">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-amber-500 text-stone-950 font-black text-xs flex items-center justify-center">
                    4
                  </span>
                  <h3 className="font-cinzel text-lg font-bold text-white">Dips & Shahi Toppings</h3>
                </div>
                <Crown className="w-4 h-4 text-amber-400" />
              </div>

              {/* Complimentary Dips */}
              <div className="mb-4">
                <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider block mb-2">
                  Complimentary Unlimited With Every Platter:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {MANDI_BUILDER_OPTIONS.dips.map(dip => (
                    <div key={dip.id} className="p-2 rounded-lg bg-stone-900/80 border border-emerald-500/30 text-[11px] text-emerald-300 flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{dip.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extras */}
              <div>
                <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider block mb-2">
                  Add Extra Royal Garnishes:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {MANDI_BUILDER_OPTIONS.toppings.map(topping => {
                    const isChecked = selectedToppings.includes(topping.id);
                    return (
                      <button
                        key={topping.id}
                        onClick={() => toggleTopping(topping.id)}
                        className={`p-3 rounded-xl border text-left flex items-center justify-between text-xs transition-all ${
                          isChecked 
                            ? 'bg-amber-500/15 border-amber-400 text-amber-300 font-semibold' 
                            : 'bg-stone-900/50 border-stone-800 text-stone-400 hover:border-stone-700'
                        }`}
                      >
                        <span>{topping.name}</span>
                        <span className="font-bold text-white shrink-0 ml-2">+₹{topping.price}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT: Live Thal Preview & Summary Card (Col 5 - Sticky) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="glass-panel-gold rounded-3xl p-6 border-2 border-amber-500/40 shadow-2xl relative overflow-hidden">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-amber-500/30 pb-4">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-amber-400 font-bold">Your Crafted Feast</span>
                  <h3 className="font-cinzel text-xl font-bold text-white">{selectedSize.label}</h3>
                  <div className="text-xs text-stone-400">Serving {selectedSize.serves}</div>
                </div>
                <button
                  onClick={handleReset}
                  className="p-2 rounded-lg bg-stone-900/80 text-stone-400 hover:text-amber-400 border border-stone-800 transition-colors"
                  title="Reset to recommended defaults"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Graphic Brass Thal Visualizer */}
              <div className="my-6 relative flex items-center justify-center">
                <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-amber-950 via-stone-900 to-amber-900 p-3 shadow-inner border-4 border-amber-600/50 relative flex items-center justify-center overflow-hidden">
                  
                  {/* Outer Brass Pattern Rim */}
                  <div className="absolute inset-1 rounded-full border border-dashed border-amber-500/40"></div>

                  {/* Saffron Rice Center */}
                  <div className="w-48 h-48 sm:w-52 sm:h-52 rounded-full bg-gradient-to-br from-amber-400/30 via-orange-500/20 to-amber-600/30 flex flex-col items-center justify-center text-center p-4 border border-amber-400/30 shadow-lg">
                    <span className="font-cinzel text-xs font-bold text-amber-200">
                      {selectedRice.name}
                    </span>
                    <span className="text-[10px] text-stone-300 mt-1">Golden Saffron Fragrance</span>

                    {/* Meat Icons Stack */}
                    <div className="flex flex-wrap items-center justify-center gap-1.5 mt-2">
                      {Object.entries(proteins).map(([id, count]) => {
                        if (count === 0) return null;
                        return (
                          <span 
                            key={id} 
                            className="px-1.5 py-0.5 rounded bg-stone-950/80 text-amber-400 border border-amber-500/40 text-[9px] font-bold"
                          >
                            {count}x {id.split('-')[0].toUpperCase()}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Little floating dip bowls around rim */}
                  <div className="absolute top-2 w-6 h-6 rounded-full bg-red-600/80 border border-white/40 shadow text-[8px] flex items-center justify-center text-white" title="Tomato Dakoos">
                    🍅
                  </div>
                  <div className="absolute bottom-2 w-6 h-6 rounded-full bg-white/90 border border-stone-800 shadow text-[8px] flex items-center justify-center text-black" title="Garlic Toum">
                    🧄
                  </div>
                  <div className="absolute left-2 w-6 h-6 rounded-full bg-amber-700/90 border border-amber-400 shadow text-[8px] flex items-center justify-center text-white" title="Marak Broth">
                    🍲
                  </div>
                  <div className="absolute right-2 w-6 h-6 rounded-full bg-emerald-700/90 border border-emerald-400 shadow text-[8px] flex items-center justify-center text-white" title="Pickled Salad">
                    🥗
                  </div>
                </div>
              </div>

              {/* Price Breakdown List */}
              <div className="space-y-2 text-xs text-stone-300 py-3 border-y border-stone-800/80">
                <div className="flex justify-between">
                  <span>{selectedSize.label} Base:</span>
                  <span className="font-semibold text-white">₹{basePrice}</span>
                </div>
                {ricePrice > 0 && (
                  <div className="flex justify-between text-amber-300">
                    <span>{selectedRice.name}:</span>
                    <span>+₹{ricePrice}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Charcoal Proteins & Meats:</span>
                  <span className="font-semibold text-white">+₹{proteinPrice}</span>
                </div>
                {toppingPrice > 0 && (
                  <div className="flex justify-between">
                    <span>Extra Garnishes:</span>
                    <span className="font-semibold text-white">+₹{toppingPrice}</span>
                  </div>
                )}
                <div className="flex justify-between text-emerald-400">
                  <span>4 House Dips & Marak Soup:</span>
                  <span className="font-bold">FREE</span>
                </div>
              </div>

              {/* Grand Total Bar */}
              <div className="pt-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-stone-400 uppercase tracking-widest block">Total Thal Price</span>
                  <div className="text-3xl font-black font-cinzel text-amber-400">
                    ₹{totalCalculatedPrice}
                  </div>
                </div>

                <button
                  onClick={handleAddCustomPlatter}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black text-sm shadow-xl shadow-amber-500/20 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add Feast To Cart</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
