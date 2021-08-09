import React from 'react';
import {Nav, NavLogoLink, NavLink, NavMenu, Bars, NavBtn, NavBtnLink, NavLinkR} from './NavbarElements';
import logo from '../../images/logo.png';
import {animateScroll as scroll} from'react-scroll'; 

const Navbar = ({toggle}) => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
          <Nav>
            <NavLogoLink to="/" onClick={toggleHome}>
                <img src={logo} alt="logo" style={{height: "60px", marginRight: "20px", marginTop: "4px"}}/>
                <h1 style={{color: "#254547", fontSize: "2.1rem", fontWeight: "bolder", marginBottom: "12px"}}>Hear Us</h1>
            </NavLogoLink>
            <Bars onClick={toggle}/>
            <NavMenu>
                <NavLink to="hero" smooth={true} speed={500} spy={true} exact="true" delay={0} offset={-80}>
                    Home
                </NavLink>
                <NavLink to="services" smooth={true} speed={500} spy={true} exact="true" delay={0} offset={-80} >
                    Our Services
                </NavLink>
                <NavLink to="about" smooth={true} speed={500} spy={true} exact="true"  delay={0} offset={-80} >
                    About Us
                </NavLink>
                <NavLink to="faq" smooth={true} speed={500} spy={true} exact="true" delay={0} offset={-80}>
                    FAQ
                </NavLink>
                <NavLinkR to="/blogs">
                    Blogs
                </NavLinkR>
            </NavMenu>
            <NavBtn>
                <NavBtnLink href="">
                    Volunteer as Listener
                </NavBtnLink>
            </NavBtn>
          </Nav>  
        </>
    )
}

export default Navbar
