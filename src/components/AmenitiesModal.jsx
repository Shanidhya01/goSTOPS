import React from "react";
import { X, Headphones, Wind, Home, Droplet, Gamepad2, Shirt, CheckCircle, Key, Box, Train, Briefcase, Wifi } from "lucide-react";

const amenitiesList = {
  Other: [
    { icon: Headphones, name: "24/7 Front Desk" },
    { icon: Wind, name: "AC" },
    { icon: Home, name: "Common Area" },
    { icon: Droplet, name: "Ensuite Washroom" },
    { icon: Wind, name: "Fan" },
    { icon: Wind, name: "Geyser" },
    { icon: Home, name: "Home Theatre" },
    { icon: Gamepad2, name: "Indoor Games" },
    { icon: Shirt, name: "Laundry" },
    { icon: CheckCircle, name: "Linen" },
    { icon: Key, name: "Lockers" },
    { icon: Box, name: "Luggage Room" },
    { icon: Train, name: "Metro" },
    { icon: Shirt, name: "Towels" },
    { icon: Briefcase, name: "Wardrobe" },
    { icon: Wifi, name: "Wifi" },
  ],
};

const AmenitiesModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            Amenities you'll get
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="p-6">
          {Object.entries(amenitiesList).map(([category, items]) => (
            <div key={category} className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {items.map((amenity, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <amenity.icon className="w-5 h-5 text-gray-500" />
                    <span>{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AmenitiesModal;