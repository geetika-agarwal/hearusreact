import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarWrapper, SidebarLink, SideBtnWrap, SidebarRoute, SidebarMenu, SidebarLinkR } from './SideElements'

const SideBar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="hero" smooth={true} speed={500} spy={true} exact="true" delay={0} offset={-80} onClick={toggle}>
                        Home
                    </SidebarLink>

                    <SidebarLink to="services" smooth={true} speed={500} spy={true} exact="true" delay={0} offset={-80} onClick={toggle}>
                        Our Services
                    </SidebarLink>

                    <SidebarLink to="about" smooth={true} speed={500} spy={true} exact="true" delay={0} offset={-80}  onClick={toggle}>
                        About
                    </SidebarLink>

                    <SidebarLink to="faq" smooth={true} speed={500} spy={true} exact="true" delay={0} offset={-80}  onClick={toggle}>
                        FAQ
                    </SidebarLink>

                    <SidebarLinkR to="/blogs" onClick={toggle}>
                        Blogs
                    </SidebarLinkR>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/volunteer-as-listener">Volunteer as Listener</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SideBar
