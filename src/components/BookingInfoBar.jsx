import React from "react";
import { CalendarDays, Users } from "lucide-react";

const BookingInfoBar = ({ bookingDetails }) => (
  <div className="bg-white rounded-2xl shadow px-6 py-4 mb-4 sticky top-8 z-30 flex items-center justify-between">
    <div className="flex items-center gap-2 text-gray-700">
      <CalendarDays className="w-5 h-5" />
      <span className="font-medium">
        {bookingDetails?.dates || "29 Oct - 30 Oct (1 night)"}
      </span>
    </div>
    <div className="flex items-center gap-2 text-gray-700">
      <Users className="w-5 h-5" />
      <span className="font-medium">
        {bookingDetails?.guests || "0 guests"}
      </span>
    </div>
  </div>
);

export default BookingInfoBar;