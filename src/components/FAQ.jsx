import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQ = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'Can I get an early check-in?',
      answer: 'Early check-in is subject to availability. Please contact the property directly to inquire about early check-in options.'
    },
    {
      id: 2,
      question: 'Is there food available in the hostel?',
      answer: 'Breakfast is included with certain bookings. Additional meals can be arranged on request.'
    },
    {
      id: 3,
      question: 'Are guests/outsiders allowed?',
      answer: 'Non-resident visitors are not allowed beyond the reception/common areas for security reasons.'
    },
    { id: 4, 
      question: "Are there events at the hostel?", 
      answer: "Yes, we regularly host events and activities for guests." 
    },
    { id: 5, 
      question: "Are there discounts for long stays?", 
      answer: "Yes, we offer discounts for extended stays. Please contact reception for details." 
    },
    { id: 6, 
      question: "Is Wi-Fi available?", 
      answer: "Free Wi-Fi is available throughout the property." 
    },
    { id: 7, 
      question: "Do you have lockers for valuables?", 
      answer: "Yes, lockers are provided for all guests." 
    },
    { id: 8, 
      question: "Is the dorm safe?", 
      answer: "Our dorms are secure and monitored 24/7." 
    },
    { id: 9, 
      question: "Will my group/friends get the same dorm?", 
      answer: "We do our best to accommodate groups together. Please mention this during booking." 
    },
    { id: 10, 
      question: "Can I leave my luggage at the hostel after checkout until evening?", 
      answer: "Yes, we offer luggage storage for guests after checkout." 
    },
    { id: 11, 
      question: "Who do I contact if I have a query?", 
      answer: "You can contact our front desk or email us at info@gostops.com." 
    }
  ];

  return (
    <div className="bg-white rounded-lg p-6 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
      <div>
        {faqs.map((faq) => (
          <div key={faq.id}>
            <button
              onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
              className="w-full flex items-center justify-between py-6 text-[1.35rem] font-medium text-gray-900 focus:outline-none"
              style={{ background: 'none' }}
            >
              <span>{faq.question}</span>
              <span className="bg-gray-100 rounded-xl p-2">
                <ChevronDown 
                  className={`w-6 h-6 text-gray-600 transition-transform ${
                    expandedFAQ === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </span>
            </button>
            <hr className="border-gray-200" />
            {expandedFAQ === faq.id && (
              <div className="px-2 pb-6 text-gray-600 text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
