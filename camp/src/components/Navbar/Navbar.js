import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Button } from "../Navbar/Button.js";
import '/Users/mac/Desktop/groupproject/camp/camp/src/components/Navbar/Button.css'
import "../Navbar/Navbar.css";

class Navbar extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <pre>CA</pre>MP
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
          ></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
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
        <Button className="user">
        <i class="fas fa-user"></i>
        </Button>
        <Button className="cart">
        <i class="fas fa-shopping-cart"></i>
        </Button>
      </nav>
    );
  }
}

export default Navbar;
