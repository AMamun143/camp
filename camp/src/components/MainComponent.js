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
import Cart from '../pages/cart/Cart'
import Products from "../pages/shop/index";
import {
  productData,
  productDataThree,
  productDataTwo,
} from "../pages/shop/Data";

function MainComponent() {
  return (
    <div>
      <Router>
        <HeaderComponent />

        <Switch>
          <Route exact path="/home" component={HomeComponent} />
          <Route exact path="/about" component={AboutComponent} />
          <Route exact path="/contact" component={ContactComponent} />
          
          <Route
            exact
            path="/shop"
            render={() => (
              <>
                <Products heading="BACKPACKS" data={productData} />
                <Products heading="SLEEPINGBAGS" data={productDataTwo} />
                <Products heading="TENTS" data={productDataThree} />{" "}
              </>
            )}
          />
          <Route exact path='/cart' component={Cart} />
        </Switch>
      </Router>
      <FooterComponent />
    </div>
  );
}

export default MainComponent;