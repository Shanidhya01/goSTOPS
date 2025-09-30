import React, { useState } from 'react';
import DetailedRoomCard from './DetailedRoomCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const calendarDataDorm = [
  { date: 'Wed, 29 Oct', price: '₹517.86', units: 80 },
  { date: 'Thu, 30 Oct', price: '₹513', units: 81 },
  { date: 'Fri, 31 Oct', price: '₹497.34', units: 99 },
  { date: 'Sat, 1 Nov', price: '₹618.84', units: 100 },
  { date: 'Sun, 2 Nov', price: '₹612.9', units: 100 },
  { date: 'Mon, 3 Nov', price: '₹625.32', units: 100 },
  { date: 'Tue, 4 Nov', price: '₹631.8', units: 100 },
];

const calendarDataDeluxe = [
  { date: 'Wed, 29 Oct', price: '₹2200', units: 10 },
  { date: 'Thu, 30 Oct', price: '₹2150', units: 10 },
  { date: 'Fri, 31 Oct', price: '₹2100', units: 10 },
  { date: 'Sat, 1 Nov', price: '₹2300', units: 10 },
  { date: 'Sun, 2 Nov', price: '₹2250', units: 10 },
  { date: 'Mon, 3 Nov', price: '₹2400', units: 10 },
  { date: 'Tue, 4 Nov', price: '₹2450', units: 10 },
];

function RoomTypesSection({ onRoomAdd }) {
  const [calendarRoomId, setCalendarRoomId] = useState(null);
  const [breakfastRooms, setBreakfastRooms] = useState({});

  const rooms = [
    {
      id: 1,
      title: "Bed in 4 Bed Mixed AC Dormitory Room with Ensuite Bathroom",
      image: "/bed4.jpg",
      imageCount: 8,
      price: 517.86,
      originalPrice: 959,
      adults: 1,
      amenities: [
        'Laundry (Subject to Availability)',
        'Shared or Ensuite Bathroom (As per room category reserved)',
        'Air Conditioned',
        'Free Breakfast (As per rate reserved)',
        'Vehicle on Hire (Extra Charges)',
        'WiFi',
        'Common Kitchen',
        'Lockers',
        '24/7 Security'
      ],
      type: "bed"
    },
    {
      id: 2,
      title: "Deluxe Private Room",
      image: "/ac.jpg",
      imageCount: 8,
      price: 2200, // Increased price for deluxe
      originalPrice: 3200, // Increased original price for deluxe
      adults: 2,
      amenities: [
        'Laundry (Subject to Availability)',
        'Shared or Ensuite Bathroom (As per room category reserved)',
        'Air Conditioned',
        'Free Breakfast (As per rate reserved)',
        'Vehicle on Hire (Extra Charges)',
        'WiFi',
        'Private Bathroom',
        'TV',
        'Mini Fridge'
      ],
      type: "room"
    }
  ];

  const handleCalendarToggle = (roomId) => {
    setCalendarRoomId(calendarRoomId === roomId ? null : roomId);
  };

  const handleBreakfastToggle = (roomId) => {
    setBreakfastRooms(prev => ({
      ...prev,
      [roomId]: !prev[roomId]
    }));
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Room types & Pricing</h2>
      <div className="space-y-8"> {/* Use space-y for vertical spacing */}
        {rooms.map((room) => (
          <React.Fragment key={room.id}>
            <DetailedRoomCard
              room={room}
              onAddRoom={onRoomAdd}
              showCalendar={calendarRoomId === room.id}
              onCalendarToggle={() => handleCalendarToggle(room.id)}
              includeBreakfast={!!breakfastRooms[room.id]}
              onBreakfastToggle={() => handleBreakfastToggle(room.id)}
            />
            {calendarRoomId === room.id && (
              <div className="w-full bg-[#fafbfc] rounded-2xl shadow-lg border mt-[-16px] mb-8 px-0 py-8 flex flex-col">
                <div className="flex items-center justify-between px-6 mb-0">
                  <button className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center">
                    <ChevronLeft className="w-6 h-6 text-gray-400" />
                  </button>
                  <button className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center">
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  </button>
                </div>
                <div className="flex justify-between items-end px-6">
                  {(room.type === "bed" ? calendarDataDorm : calendarDataDeluxe).map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center flex-1">
                      <div className="text-gray-700 text-base font-medium mb-1">{item.date}</div>
                      <div className="text-pink-600 text-xl font-semibold mb-1">{item.price}</div>
                      <div className="text-gray-700 text-sm">{item.units} units</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default RoomTypesSection;
