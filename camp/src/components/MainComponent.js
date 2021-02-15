import React, { Component } from 'react'
import AboutComponent from '../pages/about/AboutComponent.js'
import ContactComponent from '../pages/contact/ContactComponent.js'
import FooterComponent from './FooterComponent.js'
import HeaderComponent from './HeaderComponent.js'
import HomeComponent from './HomeComponent.js'
import {BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'
import ShopComponent from '../pages/shop/ShopComponent'

function MainComponent(){

    return (
        <div>

            
            <Router>
            <HeaderComponent />

            <Switch>
                <Route exact path="/home" component={HomeComponent} />
                <Route exact path="/about" component={AboutComponent} />
                <Route exact path="/contact" component={ContactComponent} />
                <Route exact path="/shop" component={ShopComponent} />
            </Switch>

            </Router>
            <FooterComponent />
        </div>
    )
}


export default MainComponent

