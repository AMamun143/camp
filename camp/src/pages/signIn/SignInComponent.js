import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export class SignInModal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Modal
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <style type="text/css">
          {`
              .modal-header{
                background-color: black;
                border-top: 2px solid white;
                border-left: 2px solid white;
                border-right: 2px solid white;
              }
              
              `}
        </style>
        <Modal.Header variant="bg">
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="text-white"
          >
            Log In
          </Modal.Title>
        </Modal.Header>
        <style type="text/css">
          {`
              .modal-body{
                background-color: black;
               
                border-left: 2px solid white;
                border-right: 2px solid white;
              }
              
              `}
        </style>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="text-white">Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="text-white">Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" className="text-white" label="Save" />
            </Form.Group>
            <Button variant="dark" type="submit">
              Sign in
            </Button>
            <style type="text/css">
              {`
              .btn-dark{
                background-color: black;
                padding-right: 8px;
                padding-left: 8px;
                border: none;
              }
              .btn-dark:hover{
                background-color: white;
                color: black;
              }
              `}
            </style>
            <Button variant="dark" type="submit">
              Sign up
            </Button>
          </Form>
        </Modal.Body>
        <style type="text/css">
          {`
              .modal-footer{
                background-color: black;
                border-bottom: 2px solid white;
                border-left: 2px solid white;
                border-right: 2px solid white;
              }
              
              `}
        </style>
        <Modal.Footer>
          <Button onClick={this.props.onHide} variant="dark">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
