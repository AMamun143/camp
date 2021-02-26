import React from 'react'
import AboutComponent from '../pages/about/AboutComponent.js'
import ContactComponent from '../pages/contact/ContactComponent.js'
import FooterComponent from './FooterComponent.js'
import HeaderComponent from './HeaderComponent.js'
import HomeComponent from './HomeComponent.js'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import ShopComponent from '../pages/shop/ShopComponent'
import NewArrivals from './NewArrivals/NewArrivals'
import Hero from './Hero/Hero'
import Cart from '/Users/mac/camp/camp/src/pages/cart/Cart.js'
import SleepingBags from '../pages/shop/SleepingBags.js'
import Tents from '../pages/shop/Tents.js'
import Backpacks from '../pages/shop/Backpacks.js'


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
                <Route exact path="/shop" component={NewArrivals} />
                <Route exact path="/shop" component={Hero} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/backpacks" component={Backpacks} />
                <Route exact path="/tents" component={Tents} />
                <Route exact path="/sleepingbags" component={SleepingBags} />
                
            

               
                <Redirect to='/home' />
                
            </Switch>
          
            
            </Router>
            <FooterComponent />
        </div>
    )
}


export default MainComponent

