import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Download } from 'lucide-react'
import TabBar from './TabBar'

function Header() {

  useEffect(() => {
    const handleScroll = () => {
      const pricingSection = document.getElementById('room-types-pricing')
      if (pricingSection) {
        const rect = pricingSection.getBoundingClientRect()
        setShowTabBar(rect.top <= 0)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full bg-[#919191] z-50 shadow h-[80px] flex items-center">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <div className="text-3xl font-bold flex items-center space-x-1">
            <span className="text-yellow-400">go</span>
            <span className="text-pink-500">ST</span>
            <span className="text-blue-500">O</span>
            <span className="text-orange-500">P</span>
            <span className="text-purple-500">S</span>
          </div>
          <Navbar />
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-white rounded-full flex items-center px-5 py-2 shadow text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition">
            <Download className="w-5 h-5 mr-2" />
            Download App
          </button>
          <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition">
            Login
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
