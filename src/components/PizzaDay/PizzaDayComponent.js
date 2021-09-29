import styled from "styled-components";
import {HeroBtn} from "./../../components/Hero/HeroComponents"
import ImgBgPizzDay from "./../../images/featured3.jpg"

export const PizzaDayContainer = styled.div`
background: linear-gradient(to left, rgba(0, 0 ,0 ,0.7),
rgba(0, 0 ,0 ,0.3)
)
,url(${ImgBgPizzDay});  
height:100%;
background-position: center;
background-size:cover;
  )
`

export const PizzaDayWrapper = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
padding: 8em;
`

export const PizzaDayHeading = styled.h1`
color:#e9ba23;
font-size:3em;
text-align:center;
`

export const PizzaDayCaption = styled.p`
font-size:1em;
color: #fff;
text-align:center;
`

export const PizzaDayButton = styled(HeroBtn)`
`