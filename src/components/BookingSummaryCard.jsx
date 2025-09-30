import React from "react";

const BookingSummaryCard = () => (
  <div className="bg-white rounded-2xl shadow px-8 py-8 mb-8 sticky top-[88px] z-20">
    <h2 className="text-2xl font-bold text-gray-900 mb-3">Summary</h2>
    <div className="w-full flex justify-center mb-6">
      {/* Illustration */}
      <div className="relative">
        <svg width="260" height="160" viewBox="0 0 260 160" fill="none">
          <rect x="30" y="80" width="200" height="40" rx="8" fill="#F3F4F6"/>
          <rect x="90" y="60" width="80" height="60" rx="12" fill="#fff" stroke="#A1A1AA" strokeWidth="2"/>
          <rect x="90" y="60" width="80" height="20" rx="6" fill="#FDE7EF"/>
          <circle cx="130" cy="100" r="24" fill="#FDE7EF" />
          <text x="130" y="108" textAnchor="middle" fontSize="28" fill="#E6007A" fontFamily="sans-serif">🛏️</text>
          <circle cx="150" cy="120" r="10" fill="#E6007A" />
          <text x="150" y="125" textAnchor="middle" fontSize="16" fill="#fff" fontFamily="sans-serif">✓</text>
          <text x="60" y="70" fontSize="18" fill="#E6007A">+</text>
          <text x="200" y="70" fontSize="18" fill="#E6007A">+</text>
          <text x="80" y="50" fontSize="18" fill="#E6007A">+</text>
          <text x="180" y="50" fontSize="18" fill="#E6007A">+</text>
          <text x="120" y="40" fontSize="18" fill="#E6007A">+</text>
        </svg>
      </div>
    </div>
    <p className="text-gray-500 text-center w-full">
      Select a bed to get your stay summary here.
    </p>
  </div>
);

export default BookingSummaryCard;