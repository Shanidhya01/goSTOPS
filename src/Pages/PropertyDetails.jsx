import React, { useState, useEffect } from 'react';
import { MapPin, Users, Download, MessageCircle, ChevronDown, Calendar, User, Plus, X, Headphones, Home, Wind, Droplet, CheckCircle, Key, Train, Box, Shirt, Wifi, Briefcase, Gamepad2 } from 'lucide-react';
import RoomTypesSection from '../components/RoomTypesSection';
import AmenitiesSection from '../components/AmenitiesSection';
import BookingSummaryCard from '../components/BookingSummaryCard';
import AmenitiesModal from '../components/AmenitiesModal';
import GettingHereSection from '../components/GettingHereSection';
import GuidelinesSection from '../components/GuidelinesSection';
import FAQ from '../components/FAQ';
import BookingInfoBar from '../components/BookingInfoBar';
import TabBar from '../components/TabBar';

const PropertyDetails = () => {
  const [showTabBar, setShowTabBar] = useState(false);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [showAmenitiesModal, setShowAmenitiesModal] = useState(false);

  const bookingDetails = {
    dates: '29 Oct - 30 Oct (1 night)',
    guests: '0'
  };

  useEffect(() => {
    const handleScroll = () => {
      const pricingSection = document.getElementById('room-types-pricing');
      if (pricingSection) {
        const rect = pricingSection.getBoundingClientRect();
        setShowTabBar(rect.top <= 0);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddRoom = (room) => {
    setSelectedRooms([...selectedRooms, room]);
    console.log('Added room:', room);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* TabBar appears at top when scrolled past pricing */}
      {showTabBar && <TabBar />}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main content */}
          <div className="col-span-1 lg:col-span-8">
            {/* Add this ID for scroll tracking */}
            <h2 id="room-types-pricing" className="text-2xl font-bold mb-8"></h2>
            <RoomTypesSection onRoomAdd={handleAddRoom} />
            <AmenitiesSection onViewAll={() => setShowAmenitiesModal(true)} />
            <GettingHereSection />
            <GuidelinesSection />
            <FAQ />
          </div>
          {/* Sidebar */}
          <div className="col-span-1 lg:col-span-4">
            <BookingInfoBar bookingDetails={bookingDetails} />
            <BookingSummaryCard />
          </div>
        </div>
      </main>
      <AmenitiesModal isOpen={showAmenitiesModal} onClose={() => setShowAmenitiesModal(false)} />
    </div>
  );
};

export default PropertyDetails;