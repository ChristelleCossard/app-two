
import React from 'react';
//import './Modal.css';
import Button3 from './Button3';

const Modal = ({ children, modalText, toggleModal }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-box">
        <h2>Hey, I'm modal !</h2>
        {children}
        {modalText}
        <Button3
          rounded={true}
          color="#ff4757"
          label="Click me!"
          toggleModal={toggleModal}
        />
      </div>
    </div>
  );
}

export default Modal;