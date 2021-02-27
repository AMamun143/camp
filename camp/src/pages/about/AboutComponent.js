import React from 'react';
import styles from './AboutComponent.module.css';

function AboutComponent() {
    return (
        <div className="" id={styles.about}>
           <div className="row h-100">
               <div className="col h-100 p-5" id={styles.about_text}>
                    <h2 className="text-light">About Us</h2>
                    <p className="text-light">We are a diverse group, spread out along the East Coast of the US. We are all enrolled in the Nucamp Full Stack Bootcamp. We have decided to take o the task of creating a camping E-Commerce website using React. We plan on taking the project and using Node, Express, and Mongo DB for the back-end. Cheers!</p>
               </div>
               <div className="col">
                   
               </div>
           </div>
        </div>
    )
}

export default AboutComponent;
