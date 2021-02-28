import React from 'react'
import styles from '../NewArrivals/NewArrivals.module.css'
import { Link } from 'react-router-dom'


function NewArrivals() {
    return (
        <div class={styles.wrapper}>
        <div className={styles.new_arrivals}>
           
           <h2 className={styles.large_text}>NEW ARRIVALS</h2> 
           <Link className={styles.shop_link} to="/shop">
          <p className={styles.shop_now}>SHOP NOW</p>
          </Link>
        </div>
        <div className={styles.photo}>
          
        </div>
        </div>
    )
}

export default NewArrivals
