import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Col, FormFeedback } from "reactstrap";

import styles from "../Footer/Newsletter.module.css";

class Newsletter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      agree: false,
      touched: {
        email: false,
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate(email) {
    const errors = {
      email: "",
    };

    if (this.state.touched.email && !email.includes("@")) {
      errors.email = "Email should contain a @";
    }

    return errors;
  }

  handleBlur = (field) => () => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };
  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    console.log("Current state is: " + JSON.stringify(this.state));
    alert("Current state is: " + JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    const errors = this.validate(this.state.email);
    return (
      <div className={styles.newsletter}>
        <h2 className={styles.join}>JOIN OUR MAILING LIST</h2>
        <h5 className={styles.secondjoin}>AND NEVER MISS AN UPDATE</h5>
        <div className={styles.container}>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup row>
              <Col></Col>
              <Col xs={5}>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  invalid={errors.email}
                  onBlur={this.handleBlur("email")}
                  onChange={this.handleInputChange}
                />
              </Col>
              <FormFeedback>{errors.email}</FormFeedback>

              <Col></Col>
            </FormGroup>
          </Form>
        </div>

        <div className={styles.subscribe}>Subscribe</div>
      </div>
    );
  }
}

export default Newsletter;
