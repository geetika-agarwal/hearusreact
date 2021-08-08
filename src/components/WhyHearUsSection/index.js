import React from 'react';
import Zoom from 'react-reveal/Zoom';
import box1 from '../../images/box-1.svg';
import { CardContent, CardImage, CardImageContainer, CardText, WhyHearUsCard, WhyHearUsCol, WhyHearUsContainer, WhyHearUsHeading, WhyHearUsHeadingSection, WhyHearUsRow, WhyHearUsSection } from './WhyHearUsElements';
import box2 from '../../images/box-2.svg';
import box3 from '../../images/box-3.svg';

const WhyHearUs = () => {
    return (
        <WhyHearUsSection>
            <WhyHearUsHeadingSection>
                <WhyHearUsHeading>Why Hear Us?</WhyHearUsHeading>
                <p className="underline"></p>
            </WhyHearUsHeadingSection>
            <WhyHearUsContainer>
                <Zoom>
                <WhyHearUsRow>
                    
                        <WhyHearUsCol sm={12} md={6} lg={4}>
                            <WhyHearUsCard>
                                <CardImageContainer>
                                <CardImage src={box1} alt="Box 1 image" />
                                </CardImageContainer>
                                <CardText>24/7 Available Listeners</CardText> 
                                <CardContent>Our trained empathetic listeners are here to listen to you, anytime of the day.</CardContent>
                            </WhyHearUsCard>
                        </WhyHearUsCol>
                        <WhyHearUsCol sm={12} md={6} lg={4}>
                            <WhyHearUsCard>
                            <CardImageContainer>
                                <CardImage src={box2} alt="Box 2 image" />
                                </CardImageContainer>                                <CardText>Completely Anonymous</CardText> 
                                <CardContent>Is there even a fear of being judged if your identity is kept anonymous?</CardContent>
                            </WhyHearUsCard>
                        </WhyHearUsCol>
                        <WhyHearUsCol sm={12} md={6} lg={4}>
                            <WhyHearUsCard>
                            <CardImageContainer>
                                <CardImage src={box3} alt="Box 3 image" />
                                </CardImageContainer>                                <CardText>Affordable Therapy</CardText> 
                                <CardContent>Book a therapy session with professional psychologist at the most affordable rates.</CardContent>
                            </WhyHearUsCard>
                        </WhyHearUsCol>
                
                </WhyHearUsRow>
                </Zoom>
            </WhyHearUsContainer>
        </WhyHearUsSection>
    )
}

export default WhyHearUs
