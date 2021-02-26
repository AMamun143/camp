import React, { Component } from 'react'
import AboutComponent from '../pages/about/AboutComponent.js'
import ContactComponent from '../pages/contact/ContactComponent.js'
import FooterComponent from './FooterComponent.js'
import HeaderComponent from './HeaderComponent.js'
import HomeComponent from './HomeComponent.js'
import {BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'
import ShopComponent from '../pages/shop/ShopComponent'
import SleepingBags from '../pages/shop/SleepingBags.js'
import Tents from '../pages/shop/Tents.js'
import Backpacks from '../pages/shop/Backpacks.js';
import Products from '../pages/Products';
import { productData, productDataThree, productDataTwo } from "../pages/Products/data";
import RenderProducts from '../pages/Products'


function MainComponent(){

    return (
        <div>

            
            <Router>
            <HeaderComponent />

            <Switch>
                <Route exact path="/home" component={HomeComponent} />
                <Route exact path="/about" component={AboutComponent} />
                <Route exact path="/contact" component={ContactComponent} />
                <Route exact path="/backpacks" component={Backpacks} />
                <Route exact path="/tents" component={Tents} />
                <Route exact path="/sleepingbags" component={SleepingBags} />
                <Route exact path='/shop' render={() => <Products heading='BACKPACKS' data={productData} />} />
                {/* <Products heading='BACKPACKS' data={this.props.productData} />
                <Products heading='TENTS' data={productDataTwo} />
                <Products heading='SLEEPINGBAGS' data={productDataThree} /> */}
            </Switch>

            </Router>
            <FooterComponent />
        </div>
    )
}


export default MainComponent

