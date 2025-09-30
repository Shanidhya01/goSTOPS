import React, { useState } from 'react';
import { MapPin, Users, Download, MessageCircle, ChevronDown } from 'lucide-react';
import ImageGallery from '../components/ImageGallery';
import PropertyInfo from '../components/PropertyInfo';
import Header from '../components/Header';

const Home = () => {

  return (
    <div className="min-h-screen bg-gray-50 mt-[80px]">
      <Header />
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ImageGallery />
        <PropertyInfo />
      </main>
    </div>
  );
};

export default Home;