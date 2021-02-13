import React from 'react'
import '../Hero/Hero.css';

function Hero() {
    return (
        <div className="hero">
           <h1 className="header">PLAN YOUR ADVENTURE</h1> 
           <h3 className="shop">SHOP NOW</h3>
           <div className="arrow">
           <i class="fas fa-chevron-down"></i>
           </div>
        </div>
    )
}

export default Hero;
