import React from 'react'
import Hero from './Hero/Hero.js'
import Promo from './Promo/Promo.js'
import NewArrivals from './NewArrivals/NewArrivals.js'
import TripleImageComponent from './TripleImage/TripleImage.js'


function HomeComponent() {
    return (
        <>
            <Hero />
            <Promo />
            <NewArrivals />
            <TripleImageComponent />
        </>
    )
}

export default HomeComponent
