import React from 'react'
import styles from '../Promo/Promo.module.css'


function Promo() {
    return (
        <div className={styles.promo}>
           <div className={styles.text}>50% OFF
           <span className={styles.collection}> ALL SUMMER COLLECTION</span>
           </div>
        </div>
    )
}

export default Promo
