import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Button } from "../Navbar/Button.js";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
import { SignInModal } from "../../pages/signIn/SignInComponent";
import {DataContext } from '../../pages/shop/Context'

class Navbar extends Component {
  static contextType = DataContext;
  state = {
    clicked: false,
    addModalShow: false,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const {cart} = this.context;
    let addModalClose = () => this.setState({ addModalShow: false });
    return (
      <>
        <nav className="NavbarItems">
          <h1 className="navbar-logo">
            <pre className="pre">CA</pre>MP
          </h1>
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="buttons">
            <Button
              onClick={() => this.setState({ addModalShow: true })}
              className="user"
            >
              <i class="fas fa-user"></i>
            </Button>
            <SignInModal
              show={this.state.addModalShow}
              onHide={addModalClose}
            />
           
            <Link to="/cart">
              <Button className="cart">
                <i class="fas fa-shopping-cart"></i>
              </Button>

            </Link>
            <span className="number">{cart.length}</span>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
