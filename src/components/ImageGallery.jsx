import React from 'react';

function ImageGallery() {
  return (
    <div className="grid grid-cols-12 gap-2 mb-8">
      {/* Main Image */}
      <div className="col-span-12 md:col-span-8 relative">
        <div className="relative h-[420px] rounded-2xl overflow-hidden">
          <span className="absolute top-[-5px] left-[-5px] bg-[#ffdb0d] text-gray-900 px-3 py-1 rounded-full text-sm font-medium z-10 shadow">
            Popular for long-stays
          </span>
          <img
            src="/MainBuilding.webp"
            alt="Building exterior"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
      {/* Gallery Images */}
      <div className="col-span-12 md:col-span-4 grid grid-cols-2 grid-rows-2 gap-1 relative">
        <img
          src="/Reception.webp"
          alt="Reception area"
          className="rounded-2xl object-cover w-full h-[200px]"
        />
        <img
          src="/Workspace.webp"
          alt="Common workspace"
          className="rounded-2xl object-cover w-full h-[200px]"
        />
        <img
          src="/Lounge.webp"
          alt="Lounge area"
          className="rounded-2xl object-cover w-full h-[200px]"
        />
        <div className="relative w-full h-[200px]">
          <img
            src="/Corridor.webp"
            alt="Corridor"
            className="rounded-2xl object-cover w-full h-full"
          />
          <button className="absolute bottom-4 right-4 bg-white px-4 py-1 rounded-lg shadow flex items-center gap-2 font-medium text-gray-700 hover:bg-gray-50 transition">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <rect x="3" y="7" width="18" height="10" rx="2" stroke="#a1a1aa" strokeWidth="2"/>
              <circle cx="8" cy="12" r="2" stroke="#a1a1aa" strokeWidth="2"/>
            </svg>
            Gallery
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
