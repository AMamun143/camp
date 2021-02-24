import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Label } from "reactstrap";
import "./ContactComponent.css";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

class ContactComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      subject: "",
      touched: {
        fistName: false,
        lastName: false,
        subject: false
      },
    };
  }

  handleContact(values) {
    console.log(`Current state is: ` + JSON.stringify(values));
    alert(`Current state is: ` + JSON.stringify(values));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mt-5 text-light pr-md-5">
            <LocalForm onSubmit={(values) => this.handleContact(values)}>
              <div className="form-group">
              <Label htmlFor="firstName">First Name</Label>
                <Control.text
                  rows="6"
                  model=".firstName"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  className="form-control bg-black"
                  validators={{
                    required,
                    minLength: minLength(2),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".firstName"
                  show="touched"
                  component="div"
                  messages={{
                    required: "Required",
                    minLength: "Must be at least 2 characters.",
                    maxLength: "Must be 15 characters or less.",
                  }}
                />
              </div>
              <div className="form-group">
                <Label htmlFor="lastName">Last Name</Label>
                <Control.text
                  rows="6"
                  model=".lastName"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  className="form-control bg-black"
                  validators={{
                    required,
                    minLength: minLength(2),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".lastName"
                  show="touched"
                  component="div"
                  messages={{
                    required: "Required",
                    minLength: "Must be at least 2 characters.",
                    maxLength: "Must be 15 characters or less.",
                  }}
                />
              </div>
              <div className="form-group">
                <Label htmlFor="subject">Choose a Subject</Label>
                <Control.select
                  model=".subject"
                  name="subject"
                  className="form-control bg-black"
                  validators={{
                    required
                  }}
                  innerRef={(input) => (this.subject = input)}
                >
                  <option selected disabled>Subject</option>
                  <option>General</option>
                  <option>Shipping</option>
                  <option>Billing</option>
                  <option>Technical Support</option>
                  <option>Account</option>
                  <option>Other</option>
                </Control.select>
                <Errors
                  className="text-danger"
                  model=".subject"
                  show="touched"
                  component="div"
                  messages={{
                    required: "Required"
                  }}
                  />
              </div>
              <div className="form-group">
                <Label htmlFor="message">Enter Your Message</Label>
                <Control.textarea
                  model=".message"
                  name="message"
                  id="message"
                  className="form-control bg-black"
                  validators={{
                    required
                  }}
                  innerRef={(input) => (this.message = input)}
                />
                <Errors
                  className="text-danger"
                  model=".message"
                  show="touched"
                  component="div"
                  messages={{
                    required: "Required"
                  }}
                  />
              </div>
              <Button type="submit" value="submit" id="sendBtn">
                Send
              </Button>
            </LocalForm>
          </div>
          <div className="col-12 col-md-6 text-light mt-5 pl-md-5 order-first order-md-last">
          <h1>CONTACT</h1>
            <p>
              Have any questions? We'd love to hear from you. Get in touch if you have technical, account, or billing questions.
            </p>
            <a href={"mailto:info@djass.com"}>info@djass.com</a><br/>
            <a href={"tel:123-456-7890"}>123-456-7890</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactComponent;
