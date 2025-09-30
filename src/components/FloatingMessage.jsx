import React from 'react'
import { MessageCircle, MessageSquare, MessageSquareDashed } from 'lucide-react'

export default function FloatingMessage() {
  return (
    <div>
      <button className="fixed bottom-8 right-8 bg-yellow-400 text-gray-900 p-4 rounded-full shadow-lg hover:bg-yellow-500 transition transform hover:scale-110">
        <MessageSquare className="w-6 h-6" />
      </button>
    </div>
  )
}
