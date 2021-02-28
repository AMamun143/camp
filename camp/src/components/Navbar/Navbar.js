import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Button } from "../Navbar/Button.js";
import "../Navbar/Navbar.css";
import { Link } from 'react-router-dom';
import LoginModal from '../../pages/signIn/SignInComponent'

class Navbar extends Component {
  state = { 
    clicked: false,
    modalOpen: false
   }

  handleClick = () => {
    
    this.setState({ clicked: !this.state.clicked })
  }
  handleModalOpen = () => {
    this.setState((prevState) => {
       return{
          modalOpen: !prevState.modalOpen
       }
    })
 }
  render() {
    return (
      <>
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
        <Button onClick={this.handleModalOpen} className="user">
        <i class="fas fa-user"></i>
        </Button>
        <Link to='/cart'>
        <Button className="cart">
        <i class="fas fa-shopping-cart"></i>
        </Button>
        </Link>
      </nav>
      <LoginModal
           modalOpen={this.state.modalOpen}
           handleModalOpen={this.handleModalOpen}
        />
      </>
    );
  }
}

export default Navbar;