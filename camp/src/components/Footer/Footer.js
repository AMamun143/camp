import React, { Component } from "react";
import { MenuItems } from "../Navbar/MenuItems.js";
import styles from "../Footer/Footer.module.css";
import Newsletter from "../Footer/Newsletter.js";

class Footer extends Component {
  render() {
    return (
      <div className={styles.wrap}>
        <nav className={styles.FooterItems}>
          <h1 className={styles.flogo}>
            <pre className={styles.ca}>CA</pre>MP
          </h1>
          <Newsletter />
          <ul className={styles.footernav_menu}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={styles.pages} href={item.url}>
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

export default Footer;
