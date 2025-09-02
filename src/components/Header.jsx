import React from "react";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full bg-gray-900 text-white font-bold text-lg py-3 flex justify-center items-center shadow-md z-50 gap-2">
      {/* Black square box with white heart */}
      <span className="w-8 h-8 flex justify-center items-center bg-black text-white rounded-sm">
        ❤️
      </span>
      BhumikaPandey
    </div>
  );
}
