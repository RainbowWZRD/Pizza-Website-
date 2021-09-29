import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';
import {FaPizzaSlice} from "react-icons/fa"



export const Nav = styled.nav`
background: transparent;
height: 80px;
display:flex;
justify-content:center;
font-weight:800;
`

export const NavLink = styled(Link)`
color: #f2f2f2;
display:flex;
font-size:2rem;
align-items:center;
text-decoration:none;
cursor:pointer;

@media screen and (max-width: 400px) {
    position:abolsute;
    top:10px;
    left:25px;
}
`

export const NavIcon = styled.div`
display:block;
position:absolute;
top:0;
right:0;
cursor:pointer;
color:#f2f2f2;

p{
    transfrom: translate(-175%, 100%);
    font-weight:bold
}
`

export const Bars = styled(FaPizzaSlice)`
font-size:2rem;
transfrom:translate(-50%, -15%);
`

