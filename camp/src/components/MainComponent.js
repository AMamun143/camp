import React, { Component } from 'react'
import AboutComponent from '/Users/mac/Desktop/groupproject/camp/camp/src/pages/about/AboutComponent.js'
import ContactComponent from '/Users/mac/Desktop/groupproject/camp/camp/src/pages/contact/ContactComponent.js'
import FooterComponent from '/Users/mac/Desktop/groupproject/camp/camp/src/components/FooterComponent.js'
import HeaderComponent from '/Users/mac/Desktop/groupproject/camp/camp/src/components/HeaderComponent.js'
import HomeComponent from '/Users/mac/Desktop/groupproject/camp/camp/src/components/HomeComponent.js'
import {BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'
import ShopComponent from '/Users/mac/Desktop/groupproject/camp/camp/src/pages/shop/ShopComponent.js'


function MainComponent(){

    return (
        <div>
     

            
            <Router>
            <Link to="/home">home</Link> 
            <Link to="/about">about</Link>
            <Link to="/contact">contact</Link>
            <Link to="/shop">shop</Link>

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

