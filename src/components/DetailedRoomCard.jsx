import React, { useState } from 'react';
import { User, ChevronDown } from 'lucide-react';

function DetailedRoomCard({
  room,
  onAddRoom,
  showCalendar,
  onCalendarToggle,
  includeBreakfast,
  onBreakfastToggle
}) {
  const [showAllAmenities, setShowAllAmenities] = useState(false);

  const visibleAmenities = room.amenities.slice(0, 5);
  const hiddenAmenities = room.amenities.slice(5);

  // Calculate price with breakfast
  const price = includeBreakfast
    ? (room.priceWithBreakfast || room.price + 100) // fallback if not provided
    : room.price;

  return (
    <div id="rooms-section" className="bg-white rounded-2xl shadow mb-8 overflow-hidden w-full">
      <div className="flex flex-col md:flex-row">
        {/* Room Image */}
        <div className="md:w-[260px] w-full h-[180px] md:h-auto flex-shrink-0 relative">
          <img
            src={room.image}
            alt={room.title}
            className="object-cover w-full h-full rounded-t-2xl md:rounded-l-2xl md:rounded-t-none"
          />
          {room.imageCount && (
            <span className="absolute bottom-3 right-3 bg-white/80 text-gray-900 px-3 py-1 rounded-lg text-sm font-medium shadow">
              1/{room.imageCount}
            </span>
          )}
        </div>
        {/* Room Details */}
        <div className="flex-1 p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1 leading-snug">{room.title}</h3>
              <div className="flex items-center gap-2 text-gray-600 mb-3 mt-2">
                <User className="w-5 h-5" />
                <span className="text-base">× {room.adults} Adult{room.adults > 1 ? 's' : ''}</span>
              </div>
            </div>
            <div className="text-right min-w-[120px]">
              <div className="text-3xl font-bold text-gray-900 leading-none">₹{price}</div>
              <div className="text-gray-400 line-through text-base">₹{room.originalPrice}<span className="text-xs">/night</span></div>
              <div className="bg-green-400 text-gray-900 px-2 py-1 rounded font-semibold text-xs mt-2 inline-block">
                'GO10' Applied
              </div>
            </div>
          </div>
          {/* Amenities Pills & Dropdown */}
          <div className="flex flex-wrap gap-2 mt-4 mb-4">
            {(showAllAmenities ? room.amenities : visibleAmenities).map((amenity, idx) => (
              <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-base font-normal">
                {amenity}
              </span>
            ))}
            {hiddenAmenities.length > 0 && !showAllAmenities && (
              <button
                type="button"
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-base font-normal cursor-pointer flex items-center"
                onClick={() => setShowAllAmenities(true)}
              >
                +{hiddenAmenities.length} more <ChevronDown className="w-4 h-4 ml-1" />
              </button>
            )}
            {hiddenAmenities.length > 0 && showAllAmenities && (
              <button
                type="button"
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-base font-normal cursor-pointer flex items-center"
                onClick={() => setShowAllAmenities(false)}
              >
                Show less <ChevronDown className="w-4 h-4 ml-1 rotate-180" />
              </button>
            )}
          </div>
          <hr className="border-gray-200 mb-4" />
          <div className="flex items-center justify-between">
            <button
              className={`text-pink-600 font-semibold text-base flex items-center gap-1 ${showCalendar ? 'text-pink-700' : ''}`}
              onClick={onCalendarToggle}
            >
              Availability calendar <ChevronDown className={`w-4 h-4 transition-transform ${showCalendar ? 'rotate-180' : ''}`} />
            </button>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-gray-700 text-base cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-gray-300"
                  checked={includeBreakfast}
                  onChange={onBreakfastToggle}
                />
                Include Breakfast
              </label>
              <button
                className="bg-pink-500 text-white px-6 py-2 rounded-lg font-semibold text-base hover:bg-pink-600 transition shadow"
                onClick={() => onAddRoom(room)}
              >
                {room.type === 'bed' ? 'Add Bed' : 'Add Room'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailedRoomCard;