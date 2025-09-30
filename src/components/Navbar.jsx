import React from 'react'
import { ChevronDown } from 'lucide-react'

export default function Navbar() {
  return (
    <div>
      <nav className="hidden md:flex space-x-6">
        <button className="flex items-center text-white hover:underline">
          Destinations <ChevronDown className="ml-1 w-4 h-4" />
        </button>
        <button className="text-white hover:underline">Workation</button>
        <button className="text-white hover:underline">Coliving</button>
        <button className="flex items-center text-white hover:underline">
          goSTOPS for Business <ChevronDown className="ml-1 w-4 h-4" />
        </button>
        <button className="flex items-center text-white hover:underline">
          Collaborate with Us <ChevronDown className="ml-1 w-4 h-4" />
        </button>
      </nav>
    </div>
  )
}
