import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function GettingHereSection() {
  const [expandedTransport, setExpandedTransport] = useState(null);

  const transportOptions = [
    { id: 'bus', label: 'By Bus', icon: '🚌' },
    { id: 'train', label: 'By Train', icon: '🚂' },
    { id: 'air', label: 'By Air', icon: '✈️' },
    { id: 'taxi', label: 'By Taxi', icon: '🚕' },
  ];

  const transportContent = {
    bus: "From Majestic Bus Station, take a BMTC bus heading towards HSR Layout or Silk Board Junction. This will cost you around ₹30-₹50. Once at Silk Board, take a short ride by auto-rickshaw or cab to HSR Layout.",
    train: "From Bengaluru City Railway Station (Majestic), take a taxi or an auto-rickshaw directly to HSR Layout, which is approximately 13 km away. Alternatively, you can use the Bengaluru Metro. Take the Green Line from Majestic to Yelachenahalli, then switch to an auto-rickshaw or cab to reach HSR Layout.",
    air: "From Kempegowda International Airport, take an airport taxi directly to HSR Layout, which is approximately 45 km away. This will cost you around ₹250. Alternatively, you can use ride-hailing services like Ola or Uber for a more convenient option directly to HSR Layout. This will cost you around ₹1000-1500.",
    taxi: "Alternatively, you can use ride-hailing services like Ola or Uber for a more convenient option directly to HSR Layout."
  };

  return (
    <div id="location-section" className="bg-white rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Getting Here</h2>
      <p className="text-gray-600 mb-6">
        754/L-185, HSR Layout, Sector 6, behind Silkboard bus stand, Outer Ring road, Bengaluru - 560102
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Map */}
        <div className="h-[300px] flex">
          <div className="rounded-lg overflow-hidden w-full h-full">
            <iframe
              title="GoStops Map"
              src="https://www.google.com/maps?q=goSTOPS+Bengaluru,+HSR+Silk+Board&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        {/* Transport options */}
        <div className="h-[300px] overflow-y-auto flex flex-col">
          {transportOptions.map((option) => (
            <div key={option.id} className="rounded-lg mb-2 last:mb-0 flex flex-col">
              <button
                onClick={() => setExpandedTransport(expandedTransport === option.id ? null : option.id)}
                className="w-full flex items-center justify-between px-3 py-2 hover:bg-gray-50 transition"
                style={{ minHeight: '44px' }}
              >
                <div className="flex items-center gap-2">
                  <span className="bg-pink-100 text-pink-600 rounded-full w-7 h-7 flex items-center justify-center text-lg">
                    {option.icon}
                  </span>
                  <span className="font-medium text-gray-900 text-base">{option.label}</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform ${
                    expandedTransport === option.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedTransport === option.id && (
                <div className="px-3 pb-3 text-gray-600 max-h-32 overflow-y-auto text-sm">
                  <p>{transportContent[option.id]}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GettingHereSection;
