import React from "react";

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative max-h-[251px]  h-full bg-[#ffffff] rounded-[50px] max-w-[350px] drop-shadow-[0px 5px 31px rgba(0,0,0,0.35)] w-full">
       
        {children}
      </div>
    </div>
  );
};

export default Modal;
