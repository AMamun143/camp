import React from 'react'
import '../NewArrivals/NewArrivals.css'
import { Link } from 'react-router-dom';
import {ShopItem} from '/Users/mac/Desktop/groupproject/camp/camp/src/pages/shop/ShopItem.js';
import { NavItem } from 'reactstrap';


function NewArrivals() {
    return (
        <div class="wrapper">
        <div className="new-arrivals">
           <h2 className="large-text">NEW ARRIVALS</h2> 
           <Link to="/shop"> <a className="small-text" href={ShopItem.url}>SHOP NOW</a></Link>
          
        </div>
        <div className="photo">
          
        </div>
        </div>
    )
}

export default NewArrivals
