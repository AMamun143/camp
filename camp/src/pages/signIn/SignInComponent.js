import React from "react";
import Modal from "react-bootstrap/Modal";

import styled from "styled-components";
import "../signIn/Modal.css";

const ModalContent = styled.div`
  display: flex;
  z-index: 1000;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: white;
 
  button {
    padding: 5px 10px;
    height: 2rem;
    background: rgb(43, 42, 42);
    color: #fff;
    border: none;
    position: relative;
    bottom: 3rem;
  }
  label {
      font-size: 13px;
      position: relative;
      bottom: 2.5rem;
  }
  input {
      position: relative;
      bottom: 3rem;
      height: 2rem;
  }
`;



const LoginModal = (props) => {
  return (
    <div className="modal">
      <Modal show={props.modalOpen} onHide={props.handleModalOpen}>
        <Modal.Header closeButton className="close">
          
        </Modal.Header>
        <ModalContent>
         

          <label for="email1" class="form-label">
            Email:
          </label>
          <input
            type="email"
            class="form-control"
            id="email1"
            placeholder=""
          ></input>
                    <label for="email1" class="form-label">
            Password
          </label>
          <input
            type="email"
            class="form-control"
            id="email1"
            placeholder=""
          ></input>
          
          <button>SIGN IN</button>
        </ModalContent>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default LoginModal;