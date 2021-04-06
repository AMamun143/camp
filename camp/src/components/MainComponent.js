import React from "react";
import AboutComponent from "../pages/about/AboutComponent.js";
import ContactComponent from "../pages/contact/ContactComponent.js";
import FooterComponent from "./FooterComponent.js";
import HeaderComponent from "./HeaderComponent.js";
import HomeComponent from "./HomeComponent.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

import Products from "../pages/cart/Products";
import Cart from "../pages/cart/Cart";
import Section from "../pages/cart/Section";
import { DataProvider } from "../pages/shop/Context";

function MainComponent() {
  return (
    <DataProvider>
      <div>
        <Router>
          <HeaderComponent />

          <Switch>
            <Route exact path="/home" component={HomeComponent} />
            <Route exact path="/about" component={AboutComponent} />
            <Route exact path="/contact" component={ContactComponent} />
            <Route exact path="/shop" component={Products} />
          </Switch>
          <Section />
          <FooterComponent />
        </Router>
      </div>
    </DataProvider>
  );
}

export default MainComponent;
