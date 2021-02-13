import React, { Component } from "react";
import { MenuItems } from "../Navbar/MenuItems.js";
import "../Footer/Footer.css";
import Newsletter from '../Footer/Newsletter.js';

class Footer extends Component {


  render() {
    return (
        <div className="wrap">
        
    
      <nav className="FooterItems">
        <h1 className="footer-logo">
          <pre>CA</pre>MP
        </h1>
        <Newsletter />
        <ul className="footernav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className="pages" href={item.url}>
                  {item.title1}
                </a>
              </li>
            );
          })}
        </ul>
       
      </nav>
      </div>
    );
  }
}


export default Footer
