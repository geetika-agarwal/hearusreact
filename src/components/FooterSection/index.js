import React from 'react'
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import {BsChevronRight} from 'react-icons/bs';
import { FooterLink, FooterLinkS, FooterSectionCol, FooterSectionContainer, FooterSectionRow, SocialLink } from './FooterSectionElements';
import {AiOutlineCopyrightCircle} from 'react-icons/ai';

const FooterSection = () => {
    return (
        <FooterSectionContainer>
            <FooterSectionRow>
                <FooterSectionCol xs={12} md={6} lg={4}>
                    <h2>Hear Us</h2>
                    <p>New Delhi</p>
                    <p><b>Phone</b>: +91 8368828660</p>
                    <p><b>Email</b>: info@hearus.me</p>
                </FooterSectionCol>
                <FooterSectionCol xs={12} md={6} lg={4}>
                    <h5><b>Useful Links</b></h5>
                    <FooterLinkS to="hero" smooth={true} speed={500} spy={true} exact="true" delay={0} offset={-80}><BsChevronRight />Home</FooterLinkS> <br />
                    <FooterLinkS to="about" smooth={true} speed={500} spy={true} exact="true" delay={0} offset={-80}><BsChevronRight />About Us</FooterLinkS> <br />
                    <FooterLinkS to="services" smooth={true} speed={500} spy={true} exact="true" delay={0} offset={-80}><BsChevronRight />Services</FooterLinkS> <br />
                    <FooterLink to="/blogs"><BsChevronRight />Blogs</FooterLink> <br />
                    <FooterLink to="/terms"><BsChevronRight />Terms</FooterLink> <br />
                    <FooterLink to="/privacy"><BsChevronRight />Privacy</FooterLink> <br />
                </FooterSectionCol>
                <FooterSectionCol xs={12} md={6} lg={4}>
                    <h5 style={{marginBottom: "2rem"}}><b>Social Media Links</b></h5>
                    <SocialLink href="https://api.whatsapp.com/message/N7VDQFACNUKGD1"><FaWhatsapp /></SocialLink>
                    <SocialLink href="https://www.instagram.com/thehearusapp/"><FaInstagram /></SocialLink>
                    <SocialLink href="https://www.linkedin.com/company/hearus/?originalSubdomain=in"><FaLinkedin /></SocialLink>
                </FooterSectionCol>
            </FooterSectionRow>
            <br />
            <br/>
            <br />
            <p><AiOutlineCopyrightCircle /> Copyright <b>Hear Us</b>. All Rights Reserved.</p>
        </FooterSectionContainer>
    )
}

export default FooterSection;
