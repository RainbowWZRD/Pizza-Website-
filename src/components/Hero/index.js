import React, {useState} from 'react'
import {HeroContainer, 
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP,
    HeroBtn } from "./HeroComponents"
import Navbar from '../navbar'
import Sidebar from '../Sidebar'

function Hero() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HeroContainer>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
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
