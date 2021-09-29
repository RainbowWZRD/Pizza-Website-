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
text-transform:uppercase;
line-height: 1;
font-weight:900;

@media screen and (max-width : 650px){
    width:100%;
}
`

export const HeroH1 = styled.h1`
color: white;
font-size: clamp(2.5rem, 10vw, 5rem);
margint-bottom:1rem;
box-shadow: 5px 5px #e9ba23;
letter-spacing:2px;
`

export const HeroP = styled.p`
font-size: clamp(1rem, 5vw, 2.5rem);
margin-top: 1rem;
color: white;
font-weight:400;
`

export const HeroBtn = styled.button`
margin-top:1em;
padding: 1rem 4rem;
font-size:1em;
font-weight:bold;
color:#e9ba23;
background: #e31837;
border:none;
box-shadow: 3px 3px;
transition: 0.2sec ease-out;
cursor:pointer;

&:hover {
    box-shadow: 2px 2px;
    transition: 0.2sec ease-out;
    cursor:pointer;
}
`
