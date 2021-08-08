import React, {useState} from 'react'
import AboutSection from '../components/AboutSection'
import FAQSection from '../components/FAQSection'
import FooterSection  from '../components/FooterSection'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import ProblemSection from '../components/ProblemSection'
import ScrolltoTop from '../components/ScrollToTop'
import ServiceSection from '../components/ServicesSection'
import SideBar from '../components/Sidebar'
import TestimonialSection from '../components/TestimonialSection'
import WhyHearUs from '../components/WhyHearUsSection'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>  
            <ScrolltoTop />
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>   
            <HeroSection id="hero"/>
            <ProblemSection />
            <ServiceSection id="services"/> 
            <AboutSection id="about"/>
            <WhyHearUs />
            <FAQSection id="faq" />
            <TestimonialSection />
            <FooterSection />
        </>
    )
}

export default Home
