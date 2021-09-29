import React from 'react'
import {HeroContainer, 
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP } from "./HeroComponents"
import Navbar from '../navbar'

function Hero() {
    return (
        <HeroContainer>
        <Navbar />
        <HeroContent>
        <HeroItems>
        <HeroH1>Greatest Pizza Ever</HeroH1>
        <HeroP>Even if it's not vegan</HeroP>
        </HeroItems>
        </HeroContent>
        </HeroContainer>
    )
}

export default Hero
