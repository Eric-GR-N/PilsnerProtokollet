import React, { useState, useEffect} from 'react'
import {Bar, NavButtonContainer, NavButtonLi, NavButtonLink, Burger, Beer, Logo, SlideMenuContainer, Menu, MenuItem, MenuLink} from './NavBarElements';



const NavBar = () => {
    const [open, setOpen] = useState(false);

    const handleMenu = (e)=>{
        e.preventDefault();
        setOpen(!open);
        console.log(open);
    };

    return (
        <Bar>
            <NavButtonContainer>
                <NavButtonLi>
                    <Logo>
                        <Beer />
                    </Logo>
                </NavButtonLi>

                <NavButtonLi>
                    <NavButtonLink
                    to="home"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={true}
                    >PilsnerProtokollet</NavButtonLink>
                </NavButtonLi>

                <NavButtonLi>
                    <Logo>
                        <Burger onClick={e => handleMenu(e)}/>
                    </Logo>
                </NavButtonLi>
            </NavButtonContainer>
            <SlideMenuContainer open={open}>
                <Menu>
                    <MenuItem>
                        <MenuLink
                        to="rating"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={true}
                        onClick={e => handleMenu(e)}
                        >
                        Betygsätt En Öl</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink                        
                        to="result"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={true}
                        onClick={e => handleMenu(e)}
                        >Topprankade Ölen</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink>Kom På Nått</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink>Kom På Nått</MenuLink>
                    </MenuItem>
                </Menu>
            </SlideMenuContainer>
        </Bar>
    )
}

export default NavBar
