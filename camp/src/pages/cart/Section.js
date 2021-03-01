import React, { Component } from "react";
import Cart from "../cart/Cart";
import { Route } from "react-router-dom";
import Payment from "../cart/Payment";
import Products from "../cart/Products";
import styles from "../cart/Cart.css";

export class Section extends Component {
  render() {
    return (
      <>
      <section>
        <Route exact path="/cart" component={Cart} />
        <Route path="/product" component={Products} exact />
        <Route path="/payment" component={Payment} exact />
      </section>
 
      </>
    );
  }
}

export default Section;
