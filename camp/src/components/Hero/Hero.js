import React from 'react'
import styles from '../Hero/Hero.module.css';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <>
        <Link to="/shop">
        <div className={styles.hero}>
           
           <h1 className={styles.header}>PLAN YOUR ADVENTURE</h1> 
           
           <h3 className={styles.shop}>SHOP NOW</h3>
           
           
           <div className={styles.arrow}>
          
           <i class="fas fa-chevron-down" />
          
           </div>
         
        </div>
        </Link>
        </>
    )
}

export default Hero
