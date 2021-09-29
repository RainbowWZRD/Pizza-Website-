import React from 'react'
import {
    PizzaDayContainer,
    PizzaDayWrapper,
    PizzaDayHeading,
    PizzaDayCaption,
    PizzaDayButton
} from "./PizzaDayComponent"

const PizzaDay = ({src}) => {
    return (    
    <PizzaDayContainer>
        <PizzaDayWrapper>
                <PizzaDayHeading>Pizza of the day</PizzaDayHeading>
                <PizzaDayCaption>The pizza of the day is a vegan pizza</PizzaDayCaption>
                <PizzaDayButton onClick={() => window.open("https://github.com/RainbowWZRD")} >Click me</PizzaDayButton> 
        </PizzaDayWrapper>  
        </PizzaDayContainer>
        )
}

export default PizzaDay
