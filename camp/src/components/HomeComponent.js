import React from 'react'
import Hero from './Hero/Hero.js'
import Promo from './Promo/Promo.js'
import NewArrivals from './NewArrivals/NewArrivals.js'
import TripleImageComponent from '/Users/mac/Desktop/groupproject/camp/camp/src/components/TripleImage/TripleImage.js'

function HomeComponent() {
    return (
        <div>
            <Hero />
            <Promo />
            <NewArrivals />
            <TripleImageComponent />
        </div>
    )
}

export default HomeComponent
