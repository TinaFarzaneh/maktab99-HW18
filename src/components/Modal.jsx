import React from "react";
import { GrClose } from "react-icons/gr";

const Modal = ({ children, onClose }) => {
  return (
    <div className="bg-[#252525] flex flex-col gap-12 w-80 h-60 rounded-[20px] p-3 modal-cover">
      {children}
      <div className="modal-content">
        <GrClose onClick={onClose} />
        <div>
          <p>Designed by - Tina Farzaneh</p>
          <p>app version - 1.0.0</p>
        </div>
        <p className="text-center">Made by</p>
      </div>
    </div>
  );
};

export default Modal;
