import React, { useState } from 'react';
import { LogIn, LogOut } from 'lucide-react';

function GuidelinesSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div id="guidelines-section" className="bg-white rounded-lg p-6 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Guidelines</h2>
      
      {/* Check-in/out box */}
      <div className="flex gap-6 bg-gray-100 rounded-xl px-6 py-4 mb-6 w-fit">
        <div className="flex items-center gap-2">
          <LogIn className="w-5 h-5 text-gray-500" />
          <span className="text-gray-700 font-medium">Check in: <span className="font-bold text-gray-900">1:00 PM</span></span>
        </div>
        <div className="flex items-center gap-2">
          <LogOut className="w-5 h-5 text-gray-500" />
          <span className="text-gray-700 font-medium">Check out: <span className="font-bold text-gray-900">10:00 AM</span></span>
        </div>
      </div>

      {/* Guidelines list */}
      <ul className="mb-8">
        <li className="flex items-start gap-2 mb-2">
          <span className="mt-2 w-2 h-2 rounded-full bg-pink-500 inline-block"></span>
          <span className="text-gray-900 text-base">All guests must carry a Govt. photo ID (PAN card not accepted).</span>
        </li>
        <li className="flex items-start gap-2 mb-2">
          <span className="mt-2 w-2 h-2 rounded-full bg-pink-500 inline-block"></span>
          <span className="text-gray-900 text-base">Local IDs are not accepted.</span>
        </li>
        <li className="flex items-start gap-2 mb-2">
          <span className="mt-2 w-2 h-2 rounded-full bg-pink-500 inline-block"></span>
          <span className="text-gray-900 text-base">Non-resident visitors are not allowed beyond the reception/common areas.</span>
        </li>
        <li className="flex items-start gap-2 mb-2">
          <span className="mt-2 w-2 h-2 rounded-full bg-pink-500 inline-block"></span>
          <span className="text-gray-900 text-base">Cancellations/Modifications: Free up to 5 days (120 hours) before the standard check-in time.</span>
        </li>
        <li className="flex items-start gap-2 mb-2">
          <span className="mt-2 w-2 h-2 rounded-full bg-pink-500 inline-block"></span>
          <span className="text-gray-900 text-base">No-shows are charged 100% of the reservation.</span>
        </li>
        <li className="flex items-start gap-2 mb-2">
          <span className="mt-2 w-2 h-2 rounded-full bg-pink-500 inline-block"></span>
          <span className="text-gray-900 text-base">No refunds for early departures.</span>
        </li>
      </ul>

      {/* View all guidelines button */}
      <button
        className="bg-white rounded-xl px-6 py-4 text-gray-900 font-medium shadow hover:bg-gray-50 transition"
        onClick={() => setShowModal(true)}
      >
        View all guidelines
      </button>

      {/* Modal (unchanged) */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6 shadow-lg overflow-y-auto max-h-[80vh] relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">All Guidelines</h2>
            <div className="space-y-6 text-[14px] leading-[22px] text-gray-700">
              {/* Check In And Check Out */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Check In And Check Out</h3>
                <ul className="list-disc pl-5">
                  <li>Check-in: 1 PM onwards (early check-in free, subject to availability).</li>
                  <li>Early check-in confirmation only on the day of arrival.</li>
                  <li>Early check-in possible only after 7 AM; book previous night for earlier.</li>
                  <li>Check-out: before 10 AM. Late check-out not allowed.</li>
                  <li>Guests may use common areas, shared washrooms, and luggage storage before check-in/after check-out.</li>
                  <li>Valid ID required: Aadhaar, Driving License, Voter ID, or Passport.</li>
                  <li>Foreign guests must carry a passport with valid visa.</li>
                  <li>Local IDs not accepted (except goSTOPS Dehradun Maldevta & goSTOPS Alibaug).</li>
                  <li>Couple-friendly hostel (both guests must be 18+).</li>
                  <li>Non-resident guests not allowed beyond reception.</li>
                </ul>
              </div>
              {/* Reservation Policy */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Reservation Policy</h3>
                <ul className="list-disc pl-5">
                  <li>Full payment required at the time of booking.</li>
                  <li>Guests must be 18 years or older.</li>
                  <li>Foreign nationals not allowed at goSTOPS Gurugram and goSTOPS Bengaluru HSR (license restrictions).</li>
                  <li>Rates may change based on availability and season.</li>
                  <li>GST applies to all purchases at goSTOPS.</li>
                  <li>Verify your booking voucher for correct date, rate, and room type.</li>
                  <li>Choose the right dorm type: Mixed, Male Only, or Female Only.</li>
                  <li>Gender-based dorm rules apply. No refunds if rules are violated.</li>
                  <li>Private rooms accommodate max 2 guests; no extra beds.</li>
                  <li>Smartphone (iOS/Android) required for digital door locks at most locations (except Srinagar & Mumbai).</li>
                </ul>
              </div>
              {/* Foreign Guest Policy */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Foreign Guest Policy</h3>
                <ul className="list-disc pl-5">
                  <li>Foreign nationals must carry valid passport with visa.</li>
                  <li>goSTOPS Gurugram and Bengaluru HSR cannot host foreigners (license restrictions).</li>
                  <li>Citizens of Pakistan, China, Myanmar may require extra documentation.</li>
                </ul>
              </div>
              {/* Pet Policy */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Pet Policy</h3>
                <ul className="list-disc pl-5">
                  <li>Only cats and dogs allowed.</li>
                  <li>Pets allowed only in private rooms (₹500 + 18% GST/day).</li>
                  <li>Pets must not disturb other guests.</li>
                  <li>Owners responsible for their pets at all times.</li>
                </ul>
              </div>
              {/* Food And Beverage Policy */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Food And Beverage Policy</h3>
                <ul className="list-disc pl-5">
                  <li>Breakfast timing: 6:00 AM – 11:00 AM daily.</li>
                  <li>Breakfast served from the second day of booking onwards.</li>
                  <li>Example: Stay from 1st–2nd → breakfast on 2nd; Stay from 1st–3rd → breakfast on 2nd & 3rd.</li>
                  <li>Breakfast limited to combo menu options (no substitutions).</li>
                  <li>Breakfast is included in package, non-refundable.</li>
                </ul>
              </div>
              {/* Stay Policy */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Stay Policy</h3>
                <ul className="list-disc pl-5">
                  <li>Free Wi-Fi up to 2GB per user/day. Additional data available for purchase.</li>
                  <li>Silent hours: 10 PM – 8 AM.</li>
                  <li>No alcohol consumption at goSTOPS properties.</li>
                  <li>Smoking only in designated zones. All rooms are non-smoking.</li>
                  <li>Unlawful activities (gambling, prostitution, drugs, etc.) strictly prohibited.</li>
                  <li>No eating inside dorms or private rooms.</li>
                  <li>Limited vehicle parking, subject to availability.</li>
                  <li>Swimming pool available at selected locations (seasonal, use at own risk).</li>
                  <li>Common areas and entertainment cannot be restricted by guests.</li>
                  <li>Guests responsible for belongings stored in lockers. Hostel not liable for losses. Lost key penalty: ₹500.</li>
                  <li>Heaters available on request for private rooms (not in dorms).</li>
                  <li>Guests liable for property damage and charged accordingly.</li>
                  <li>goSTOPS reserves the right of admission.</li>
                  <li>24×7 Café available. No outside food/beverages allowed (except Srinagar & Mumbai).</li>
                  <li>Images are for representation only. Room setup may vary.</li>
                  <li>Firearms, ammunition, explosives, or weapons strictly prohibited.</li>
                </ul>
              </div>
              {/* Cancellation And Changes */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Cancellation And Changes</h3>
                <ul className="list-disc pl-5">
                  <li>Free cancellation/modification up to 5 days before check-in.</li>
                  <li>Example: Check-in Jan 8 → cancel until Jan 3, 11:59 PM.</li>
                  <li>No changes allowed after cut-off date.</li>
                  <li>For cancellations/modifications, email hello@gostops.com.</li>
                  <li>Bookings via OTAs (MMT, Booking.com, etc.) must be cancelled through them.</li>
                  <li>Refunds processed immediately but may take up to 10 days.</li>
                  <li>No-shows charged 100% of booking.</li>
                  <li>No refunds for early departures.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GuidelinesSection;
