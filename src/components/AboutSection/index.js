import React from 'react'
import { AboutSectionDescription, AboutSectionHeading, AboutSectionHeadingContainer } from './AboutElements'

const AboutSection = () => {
    return (
        <div id="about">
           <AboutSectionHeadingContainer>
                <AboutSectionHeading>About Us</AboutSectionHeading> 
                <p className="underline"></p>  
            </AboutSectionHeadingContainer> 
            <AboutSectionDescription>
            Hear Us is an online emotional support system where we connect those who need to be heard and those who are willing to help people. No matter who you are or where do you live or what you are going through, we are here to listen to you and care for you. We are on a mission to take care of the emotional needs of people and lead the world towards positive mental health.
            </AboutSectionDescription>
        </div>
    )
}

export default AboutSection
