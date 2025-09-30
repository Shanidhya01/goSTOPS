import React from 'react'
import { MapPin, Users, Map } from 'lucide-react';

export default function PropertyInfo() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
      {/* Left: Title, Address, Badges, Description */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Bengaluru, HSR Silk Board</h1>
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <MapPin className="w-5 h-5" />
          <span>754/L-185, HSR Layout, Sector 6, behind Silkboard bus stand, Outer Ring road, Bengaluru - 560102</span>
        </div>
        <div className="flex gap-3 mb-4">
          <span className="flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-base font-medium">
            <Users className="w-5 h-5" />
            Booked by 200+ this week
          </span>
          <span className="flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-base font-medium">
            <Map className="w-5 h-5" />
            Perfect for Stay Near HSR Startup Scene
          </span>
        </div>
        <p className="text-gray-700 text-base max-w-2xl">
          Nestled in HSR layout near Silk Board Junction, goSTOPS Bengaluru HSR offers convenient access to Bengaluru’s tech parks, dining, shopping, and nightlife, making it a perfect spot for explorers looking to experience the city's dynamic culture and modern vibes.
        </p>
      </div>
      {/* Right: Price & Button */}
      <div className="flex flex-col items-end mt-6 md:mt-0 min-w-[220px]">
        <span className="text-sm text-gray-500 mb-1">Starting from</span>
        <span className="text-4xl font-bold text-gray-900 mb-4">₹517.86</span>
        <button className="bg-pink-500 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-pink-600 transition shadow">
          Select Room
        </button>
      </div>
    </div>
  );
}
