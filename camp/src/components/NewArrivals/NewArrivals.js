import React from 'react'
import '../NewArrivals/NewArrivals.css'
import { Link } from 'react-router-dom'


function NewArrivals() {
    return (
        <div class="wrapper">
        <div className="new-arrivals">
           
           <h2 className="large-text">NEW ARRIVALS</h2> 
           <Link to="/shop">
          <p>SHOP NOW</p>
          </Link>
        </div>
        <div className="photo">
          
        </div>
        </div>
    )
}

export default NewArrivals
