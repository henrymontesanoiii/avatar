// import React, { Component } from 'react';
import React from "react";
import ReactDOM from "react-dom";
import "../Modal.css";






const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <div className="container mt-4 ml-2"><br></br>

          {children}
          <br></br><br></br>
          <div className="row">
          
          </div>
        </div>
      </section>
    </div>
  );
};


const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<Modal />, container);
export default Modal;