import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Label } from "reactstrap";
import styles from "../contact/ContactComponent.module.css";
import globalStyles from '../../../src/assets/global-styles/bootstrap.min.module.css';
import cx from 'classnames';
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
      <div id={styles.contactPage}>
      <div className={globalStyles.container}>
        <div className={globalStyles.row}>
          <div className={cx(globalStyles['col-12'], globalStyles['col-md-6'], globalStyles['mt-5'], globalStyles['text-light'], globalStyles['pr-md-5'])}>
            <LocalForm onSubmit={(values) => this.handleContact(values)}>
              <div className={globalStyles['form-group']}>
              <Label htmlFor="firstName">First Name</Label>
                <Control.text
                  rows="6"
                  model=".firstName"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  className={cx(globalStyles['form-control'], styles.formcontrolBlack)}
                  validators={{
                    required,
                    minLength: minLength(2),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className={globalStyles["text-danger"]}
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
              <div className={globalStyles['form-group']}>
                <Label htmlFor="lastName">Last Name</Label>
                <Control.text
                  rows="6"
                  model=".lastName"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  className={cx(globalStyles['form-control'], styles.formcontrolBlack)}
                  validators={{
                    required,
                    minLength: minLength(2),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className={globalStyles["text-danger"]}
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
              <div className={globalStyles['form-group']}>
                <Label htmlFor="subject">Choose a Subject</Label>
                <Control.select
                  model=".subject"
                  name="subject"
                  className={cx(globalStyles['form-control'], styles.formcontrolBlack)}
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
                  className={globalStyles["text-danger"]}
                  model=".subject"
                  show="touched"
                  component="div"
                  messages={{
                    required: "Required"
                  }}
                  />
              </div>
              <div className={globalStyles['form-group']}>
                <Label htmlFor="message">Enter Your Message</Label>
                <Control.textarea
                  model=".message"
                  name="message"
                  id="message"
                  className={cx(globalStyles['form-control'], styles.formcontrolBlack)}
                  validators={{
                    required
                  }}
                  innerRef={(input) => (this.message = input)}
                />
                <Errors
                  className={globalStyles["text-danger"]}
                  model=".message"
                  show="touched"
                  component="div"
                  messages={{
                    required: "Required"
                  }}
                  />
              </div>
              <Button type="submit" value="submit" id={styles.sendBtn}>
                Send
              </Button>
            </LocalForm>
          </div>
          <div className={cx(globalStyles['col-12'], globalStyles['col-md-6'], globalStyles['text-light'], globalStyles['mt-5'], globalStyles['pl-md-5'], globalStyles['order-first'], globalStyles['order-md-last'])}>
          <h1>CONTACT</h1>
            <p>
              Have any questions? We'd love to hear from you. Get in touch if you have technical, account, or billing questions.
            </p>
            <a className={styles.contactLinks} href={"mailto:info@dj.com"}>info@dj.com</a><br/>
            <a className={styles.contactLinks} href={"tel:123-456-7890"}>123-456-7890</a>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default ContactComponent;
