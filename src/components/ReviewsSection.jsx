import React, { useState } from 'react';
import { REVIEWS, RATING_SUMMARY } from '../data/reviewsData';
import { useApp } from '../context/AppContext';
import { 
  Star, 
  ThumbsUp, 
  CheckCircle2, 
  MessageSquarePlus, 
  Sparkles, 
  Award, 
  Send 
} from 'lucide-react';

export const ReviewsSection = () => {
  const { showToast } = useApp();

  const [reviewsList, setReviewsList] = useState(REVIEWS);
  const [showReviewModal, setShowReviewModal] = useState(false);

  // New review form
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [dish, setDish] = useState('Chicken Juicy Mandi');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleLike = (id) => {
    setReviewsList(prev => prev.map(r => r.id === id ? { ...r, likes: r.likes + 1 } : r));
    showToast("Thank you for your feedback!");
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) {
      showToast("Please provide your name and review remarks", "warning");
      return;
    }

    const newRev = {
      id: Date.now(),
      name,
      location: location || "Bhubaneswar Foodie",
      rating: Number(rating),
      date: "Just now",
      dish,
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80",
      comment,
      verified: true,
      likes: 1
    };

    setReviewsList([newRev, ...reviewsList]);
    setShowReviewModal(false);
    setName('');
    setLocation('');
    setComment('');
    showToast("Review submitted successfully! Thank you for dining with Banjaraa.");
  };

  return (
    <section id="reviews" className="py-16 sm:py-24 relative bg-stone-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Customer Testimonials & Accolades</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white">
            Loved by <span className="gold-gradient-text">Food Lovers in Odisha</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-light">
            Read authentic stories from families, couples, and Mandi connoisseurs who gathered for a royal feast.
          </p>
        </div>

        {/* Rating Overview Dashboard */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-amber-500/30 mb-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Overall Score */}
            <div className="lg:col-span-4 text-center lg:border-r lg:border-stone-800 lg:pr-8 space-y-2">
              <div className="font-cinzel text-5xl sm:text-6xl font-black gold-gradient-text">
                {RATING_SUMMARY.overall}
              </div>
              <div className="flex items-center justify-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <div className="text-sm font-semibold text-stone-200">
                Based on {RATING_SUMMARY.totalReviews} Verified Guest Reviews
              </div>
              <div className="text-xs text-stone-400">
                Google, Swiggy & In-Restaurant Majlis Feedback
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setShowReviewModal(true)}
                  className="px-4 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-bold transition-all inline-flex items-center gap-1.5"
                >
                  <MessageSquarePlus className="w-3.5 h-3.5" />
                  <span>Write Your Review</span>
                </button>
              </div>
            </div>

            {/* Breakdown Bars */}
            <div className="lg:col-span-4 space-y-2 border-b lg:border-b-0 lg:border-r lg:border-stone-800 pb-6 lg:pb-0 lg:pr-8">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block mb-3">Rating Breakdown</span>
              {RATING_SUMMARY.breakdown.map((b) => (
                <div key={b.stars} className="flex items-center gap-2 text-xs">
                  <span className="w-12 text-stone-300 font-semibold">{b.stars} Stars</span>
                  <div className="flex-1 h-2 bg-stone-900 rounded-full overflow-hidden border border-stone-800">
                    <div 
                      className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" 
                      style={{ width: `${b.percentage}%` }}
                    ></div>
                  </div>
                  <span className="w-10 text-right text-stone-400">{b.percentage}%</span>
                </div>
              ))}
            </div>

            {/* Aspect Scores */}
            <div className="lg:col-span-4 space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block mb-3">Guest Experience Metrics</span>
              {RATING_SUMMARY.aspects.map((asp, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs">
                  <span className="text-stone-300">{asp.name}</span>
                  <span className="font-bold text-amber-400 font-mono bg-stone-900 px-2 py-0.5 rounded border border-stone-800">
                    {asp.score}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsList.map(rev => (
            <div 
              key={rev.id}
              className="glass-card rounded-2xl p-6 border border-stone-800 flex flex-col justify-between space-y-4 hover:border-amber-500/30 transition-all hover:-translate-y-1"
            >
              <div className="space-y-3">
                {/* User Info */}
                <div className="flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-10 h-10 rounded-full object-cover border border-amber-500/40"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-white truncate flex items-center gap-1.5">
                      <span>{rev.name}</span>
                      {rev.verified && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" title="Verified Customer" />}
                    </h4>
                    <span className="text-[11px] text-stone-400 block truncate">{rev.location}</span>
                  </div>
                </div>

                {/* Stars & Date */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3.5 h-3.5 ${i < rev.rating ? 'fill-amber-400' : 'text-stone-700'}`} />
                    ))}
                  </div>
                  <span className="text-[10px] text-stone-500">{rev.date}</span>
                </div>

                {/* Dish Tag */}
                <div className="text-[11px] px-2.5 py-1 rounded-md bg-stone-900 border border-stone-800 text-amber-300 font-medium inline-block">
                  Savor: {rev.dish}
                </div>

                {/* Comment */}
                <p className="text-xs text-stone-300 leading-relaxed font-light italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Card Footer: Helpful Likes */}
              <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-400">
                <span className="text-[10px] text-stone-500">Majlis Guest</span>
                <button
                  onClick={() => handleLike(rev.id)}
                  className="flex items-center gap-1.5 hover:text-amber-400 transition-colors p-1"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>{rev.likes} Helpful</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Write Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="glass-panel border border-amber-500/40 rounded-3xl max-w-md w-full p-6 space-y-4 bg-[#0d101a] shadow-2xl">
            <h3 className="font-cinzel text-xl font-bold text-white">Share Your Dawat Experience</h3>
            <form onSubmit={handleAddReview} className="space-y-3">
              <div>
                <label className="block text-xs text-stone-400 mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="e.g. Ananya Das"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white focus:border-amber-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs text-stone-400 mb-1">Your Area (Bhubaneswar / Cuttack)</label>
                <input
                  type="text"
                  placeholder="e.g. Saheed Nagar, Bhubaneswar"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs text-stone-400 mb-1">Delicacy Savored</label>
                <input
                  type="text"
                  placeholder="e.g. Mutton Juicy Mandi & Cheese Kebab"
                  value={dish}
                  onChange={(e) => setDish(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs text-stone-400 mb-1">Rating</label>
                <select
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white focus:border-amber-500 focus:outline-none"
                >
                  <option value={5}>5 Stars - Pure Royal Perfection</option>
                  <option value={4}>4 Stars - Very Delicious Feast</option>
                  <option value={3}>3 Stars - Decent</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-stone-400 mb-1">Your Review</label>
                <textarea
                  rows={3}
                  placeholder="Tell others about the meat tenderness, rice spices, or the Majlis seating..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white focus:border-amber-500 focus:outline-none"
                  required
                ></textarea>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowReviewModal(false)}
                  className="flex-1 py-2 rounded-xl bg-stone-900 text-stone-400 text-xs hover:bg-stone-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-bold text-xs shadow-md"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
