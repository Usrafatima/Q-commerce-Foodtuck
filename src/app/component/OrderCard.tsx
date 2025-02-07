import React, { useState } from "react";

const Card = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null; 
  return (
    <div className="relative max-w-xs overflow-hidden rounded-lg shadow-xl bg-white">
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 flex items-center justify-center p-2 text-black border-2 border-gray-300 rounded-lg w-8 h-8 transition duration-300 ease-in-out hover:bg-red-600 hover:border-red-600 hover:text-white"
      >
        ×
      </button>
      <div className="p-4 pt-3">
        <div className="flex justify-center items-center w-12 h-12 rounded-full bg-green-100 animate-pulse">
          <svg
            className="text-[#FF9F0D] w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 7L9.00004 18L3.99994 13"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="mt-3 text-center">
          <span className="text-green-800 font-semibold text-base leading-6">
            Order validated
          </span>
          <p className="mt-2 text-gray-600 text-sm leading-5">
            Thank you for your purchase. Your package will be delivered within 30 mins.
           
          </p>
        </div>
        <div className="mt-3 px-4">
          <button className="w-full py-2 text-white bg-[#FF9F0D] font-medium text-base leading-6 rounded-md shadow-sm hover:bg-green-600">
           Track my Package
          </button>
          <button className="w-full mt-3 py-2 text-gray-800 bg-white border border-gray-300 font-medium text-base leading-6 rounded-md shadow-sm hover:bg-gray-100">
           Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

