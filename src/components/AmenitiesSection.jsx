import React from 'react';
import { Headphones, AirVent, Sofa, Droplet, Thermometer, Tv2, Gamepad2, Shirt, Fan } from 'lucide-react';

const AmenitiesSection = ({ onViewAll }) => {
  const amenities = [
    { icon: Headphones, name: '24/7 Front Desk' },
    { icon: AirVent, name: 'AC' },
    { icon: Sofa, name: 'Common Area' },
    { icon: Droplet, name: 'Ensuite Washroom' },
    { icon: Fan, name: 'Fan' },
    { icon: Thermometer, name: 'Geyser' },
    { icon: Tv2, name: 'Home Theatre' },
    { icon: Gamepad2, name: 'Indoor Games' },
    { icon: Shirt, name: 'Laundry' }
  ];

  return (
    <div id="amenities-section" className="bg-white rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Amenities you'll get</h2>
      <div className="grid grid-cols-3 gap-4 mb-8">
        {amenities.map((amenity, idx) => (
          <div key={idx} className="flex items-center gap-3 text-gray-700">
            <amenity.icon className="w-6 h-6 text-gray-700" />
            <span className="text-base">{amenity.name}</span>
          </div>
        ))}
      </div>
      <button 
        onClick={onViewAll}
        className="bg-white rounded-xl px-6 py-4 text-gray-900 font-medium shadow hover:bg-gray-50 transition"
      >
        View all amenities
      </button>
    </div>
  );
};

export default AmenitiesSection;
