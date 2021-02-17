import React from 'react'
import '../Hero/Hero.css';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <>
        <Link to="/shop">
        <div className="hero">
           
           <h1 className="header">PLAN YOUR ADVENTURE</h1> 
           
           <h3 className="shop">SHOP NOW</h3>
           
           
           <div className="arrow">
          
           <i class="fas fa-chevron-down" />
          
           </div>
         
        </div>
        </Link>
        </>
    )
}

export default Hero
