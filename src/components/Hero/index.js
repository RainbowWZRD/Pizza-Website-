import React from 'react'
import {HeroContainer, 
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP,
    HeroBtn } from "./HeroComponents"
import Navbar from '../navbar'

function Hero() {
    return (
        <HeroContainer>
        <Navbar />
        <HeroContent>
        <HeroItems>
        <HeroH1>Greatest Pizza Ever</HeroH1>
        <HeroP>Even if it's not vegan</HeroP>
        <HeroBtn>Order Pizza</HeroBtn>
        </HeroItems>
        </HeroContent>
        </HeroContainer>
    )
}

export default Hero
