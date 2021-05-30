import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-scroll';
import {GiHamburgerMenu} from 'react-icons/gi';
import {FaBeer} from 'react-icons/fa';


export const Bar = styled.div`
position: fixed;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 10vh;
background-color: black;
z-index: 10;
`

export const NavButtonContainer = styled.ul`
justify-content: space-between;
display: flex;
height: 100%;
width: 90%;
`

export const NavButtonLi = styled.li`
align-items: center;
display: flex;
`

export const NavButtonLink = styled(Link)`
font-size: 1rem;
letter-spacing: 2px;
color: white;
font-family: "Sigmar One", cursive;
`

export const Burger = styled(GiHamburgerMenu)`
width: 25px;
height: 25px;
color: white;
`

export const Beer = styled(FaBeer)`
width: 25px;
height: 25px;
color: white;
`

export const Logo = styled(Link)`
`

export const SlideMenuContainer = styled.div`
position: absolute;
background-color: rgba(0,0,0,0.8);
height: 90vh;
width: 100%;
top: 10vh;
right: ${props => props.open ? '0%': '-100%'};
z-index: 10;
transition: 0.6s ease-in-out;
-webkit-transition: 0.6s ease-in-out;
overflow: hidden;
`

export const Menu = styled.ul`
position: relative;
justify-content: flex-start;
align-items: center;
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
`

export const MenuItem = styled(NavButtonLi)`
width: 100%;
height: 8%;
display: flex;
justify-content: center;
`

export const MenuLink = styled(Link)`
color: white;
font-family: "Sigmar One", cursive;
`