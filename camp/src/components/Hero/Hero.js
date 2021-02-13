import React from 'react'
import '../Hero/Hero.css';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className="hero">
           <h1 className="header">PLAN YOUR ADVENTURE</h1> 
           <Link to="/shop">
           <h3 className="shop">SHOP NOW</h3>
           
           
          
           <div className="arrow">
           <i class="fas fa-chevron-down" />
           </div>
           </Link>
          
          
        </div>
    )
}

export default Hero
