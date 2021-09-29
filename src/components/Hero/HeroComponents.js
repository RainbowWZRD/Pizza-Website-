import styled from "styled-components";
import ImgBg from "../../images/pizza-3.jpg"

export const HeroContainer = styled.div`
background: linear-gradient(to right, rgba(0, 0, 0, 0.7), 
rgba(0,0,0,0.1)),
url(${ImgBg});  

height:100vh;
background-position: center;
background-size:cover;
  )
`

export const HeroContent = styled.div`
height:calc(100vh - 80px);
max-height: 100%;
width:100vw;
padding:0rem calc((100vw - 1300px) /2);
`

export const HeroItems = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
height:100vh;
max-height:100%;
padding:0 2rem;
width:650px;
text-transfrom:uppercase;
line-heigh: 1;
font-weight:bold;
`

export const HeroH1 = styled.h1`
color: white;
font-weight:800;
`

export const HeroP = styled.p`
color: white;
font-weight:400;
`
