import React, { Component } from "react";
import { DataContext } from "../shop/Context";
import { Link } from "react-router-dom";
import styles from "../cart/Cart.css";

export class Cart extends Component {
  static contextType = DataContext;

  componentDidMount() {
    this.context.getTotal();
  }

  render() {
    const btn = { backgroundColor: "black", color: "white" };
    const { cart, increase, reduction, removeProduct, total } = this.context;
    if (cart.length === 0) {
      return (
        <h2 className="nothing" style={{ textAlign: "center" }}>
<<<<<<< HEAD
          Your cart is empty. Start shopping and let the adventure begin...
=======
          Nothings Product
>>>>>>> 18c5692a1506fe8c6886c3a87bcfedad176a176a
        </h2>
      );
    } else {
      return (
        <>
          <div className="container">
            <div className="cart_wrapper">
              {cart.map((item) => (
                <div className="details cart" key={item._id}>
                  <img src={item.src} alt="" />
                  <div className="box">
                    <div className="row">
                      <h2>{item.title}</h2>
                      <span>${item.price * item.count}</span>
                    </div>
<<<<<<< HEAD

=======
>>>>>>> 18c5692a1506fe8c6886c3a87bcfedad176a176a
                    <p>{item.description}</p>
                    <p>color: {item.colors}</p>
                    <div className={styles.amount}>
                      <button
<<<<<<< HEAD
=======
                        bsStyle=""
                        bsClass="btn"
                        style={btn}
>>>>>>> 18c5692a1506fe8c6886c3a87bcfedad176a176a
                        className={styles.count}
                        onClick={() => reduction(item._id)}
                      >
                        {" "}
                        -{" "}
                      </button>
<<<<<<< HEAD
                      <span id="itemCount">{item.count}</span>
                      <button
=======
                      <span className="item-count">{item.count}</span>
                      <button
                        bsStyle=""
                        bsClass="btn"
                        style={btn}
>>>>>>> 18c5692a1506fe8c6886c3a87bcfedad176a176a
                        className={styles.count}
                        onClick={() => increase(item._id)}
                      >
                        {" "}
                        +{" "}
                      </button>
                    </div>
                  </div>
                  <div
                    className="delete"
                    onClick={() => removeProduct(item._id)}
                  >
                    X
                  </div>
                </div>
              ))}
              <div className="total">
                <Link to="/payment">Payment</Link>
                <h3>Total: ${total}</h3>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

export default Cart;
