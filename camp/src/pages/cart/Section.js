import React, { Component } from 'react'
import Products from '../cart/Products'
import Details from '../cart/Details'
import {Route} from "react-router-dom"
import Cart from '../cart/Cart'
import Payment from '../cart/Payment'



export class Section extends Component {
    render() {
        return (
            <section>
                    <Route path="/" component={Products} exact />
                    <Route path="/product" component={Products} exact  />
                    <Route path="/product/:id" component={Details} exact />
                    <Route path="/cart" component={Cart}  exact/>
                    <Route path="/payment" component={Payment} exact />
            </section>
        )
    }
}

export default Section
