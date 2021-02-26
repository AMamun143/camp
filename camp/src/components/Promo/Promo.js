import React from 'react'
import '../Promo/Promo.css'
import { Link } from 'react-router-dom'

function Promo() {
    return (
        <div className="promo">
           <div className="text">50% OFF
           <span className="collection"> ALL SUMMER COLLECTION</span>
           </div>
           <div className="link-test">
            <Link to='/backpacks'>backpack</Link>
            <Link to='/tents'>tent</Link>
            <Link to='/sleepingbags'>sleepingbag</Link>
            </div>
        </div>
    )
}

export default Promo
