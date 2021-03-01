import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <Modal.Header  className="bg-dark">
          <Modal.Title id="contained-modal-title-vcenter" className="text-white">Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
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
            <Button variant="dark" type="submit">
              Sign up
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer className="bg-dark">
        <Button onClick={this.props.onHide} variant="dark">
              Cancel
            </Button>
        </Modal.Footer>
      </Modal>
 
    );
  }
}
