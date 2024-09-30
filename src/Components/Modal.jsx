import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" 
     onClick={(event) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    }}>
      <div className="relative max-h-[251px] h-full bg-[#ffffff] rounded-[50px] max-w-[350px] drop-shadow-[0px 5px 31px rgba(0,0,0,0.35)] w-full">
        <button
          onClick={onClose}
          className="absolute top-3 right-5 text-black hover:text-gray-700"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
