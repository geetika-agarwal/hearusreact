import React from 'react'
import { BookButton, ButtonContainer, ListenerButton, Service, ServiceCol, ServiceContainer, ServiceContent, ServiceDescription, ServiceImage, ServiceRow, ServiceSectionHeading, ServiceSectionHeadingContainer, ServiceSectionSubheading, ServiceTitle } from './ServiceSectionElements'
import service1 from '../../images/section-1.svg'
import service2 from '../../images/section-2.svg'
import { Link } from 'react-router-dom'

const ServiceSection = () => {
    return (
        <Service id="services">
            <ServiceSectionHeadingContainer>
                <ServiceSectionHeading>Our Services</ServiceSectionHeading>   
                <ServiceSectionSubheading>Check out the great services we offer</ServiceSectionSubheading> 
                <p className="underline"></p>
            </ServiceSectionHeadingContainer> 
            <ServiceContainer>
                <ServiceRow>
                    <ServiceCol xs={12} lg={6}>
                        <ServiceImage src={service1} alt="section 1 image" />
                    </ServiceCol>
                    <ServiceCol xs={12} lg={6}>
                        <ServiceDescription>
                        <ServiceTitle>Talk to trained empathetic listeners</ServiceTitle>
                        <ServiceContent>Chat anonymously with our listeners who are fully trained to listen to you empathetically and make you feel better. The best part is that we won't let you wait more than 2 minutes to start the conversation because you are our priority.</ServiceContent>
                        <ButtonContainer>
                        <a href="https://play.google.com/store/apps/details?id=me.hearus.app"><ListenerButton>Talk to a Listener</ListenerButton></a>
                        </ButtonContainer>
                        </ServiceDescription>
                    </ServiceCol>
                </ServiceRow> 
                <ServiceRow>
                    <ServiceCol xs={12} lg={6} className="service-order-2">
                        <ServiceDescription>
                        <ServiceTitle>Counselling from Professional Psychologists</ServiceTitle> 
                        <ServiceContent>Need more help? Book online therapy sessions with a psychologist of your choice from the palm of your hand at a very affordable price.</ServiceContent>   
                        <Link to="/booknow"><ButtonContainer><BookButton>Book Now</BookButton></ButtonContainer></Link>
                        </ServiceDescription>
                    </ServiceCol>    
                    <ServiceCol className="service-order" xs={12} lg={6}>
                        <ServiceImage src={service2} alt="service 2 image" />
                    </ServiceCol>
                </ServiceRow>   
            </ServiceContainer>  
        </Service>
    )
}

export default ServiceSection
