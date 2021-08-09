import React  from 'react'
import logo from '../../images/logo.png'
import { MultiNavLinkR, MultiPageNav, MultiPageNavBtn, MultiPageNavBtnLink, MultiPageNavLogoLink, MultiPageNavMenu } from './MultiPageNavBarElements';

const MultiPageNavBar = () => {

    return (
        <>
        <MultiPageNav>
            <MultiPageNavLogoLink >
            <img src={logo} className="multinavlogo" alt="logo" />
                <h1 className="multinavheading" >Hear Us</h1>
            </MultiPageNavLogoLink>    
            <MultiPageNavMenu>
                <MultiNavLinkR to="/">Home</MultiNavLinkR>
                <MultiNavLinkR to="/blogs" activeClassName="selected">Blogs</MultiNavLinkR>
            </MultiPageNavMenu>
            <MultiPageNavBtn>
                <MultiPageNavBtnLink href="">
                    Volunteer as Listener
                </MultiPageNavBtnLink>
            </MultiPageNavBtn>
        </MultiPageNav>   
        </>
    )
}

export default MultiPageNavBar
