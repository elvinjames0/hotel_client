import React from "react";

const Modal = ({ setIsModal, isModal }) => {
  return (
    <>
      <div
        onClick={() => setIsModal(false)}
        className={isModal ? "modal-overlay" : "hidden"}
      ></div>
    </>
  );
};

export default Modal;
