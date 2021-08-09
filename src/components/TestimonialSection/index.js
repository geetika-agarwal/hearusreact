import React from 'react'
import Slider from 'react-slick'; 
import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im';
import { TestimonialContainer, TestimonialHeading, TestimonialHeadingContainer, TestimonialSectionContainer, Testimony, TestimonyContent, TestimonyHeading } from './TestimonialSectionElements';

const TestimonialSection = () => {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnhover: true,

        responsive: [
            {
                breakpoint: 1190,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    pauseOnhover: true
                }
            }
        ]

    };

    return (
        <TestimonialSectionContainer>
            <TestimonialHeadingContainer>
                <TestimonialHeading>Testimonials</TestimonialHeading>
                <p className="underline"></p>
            </TestimonialHeadingContainer>
            <TestimonialContainer>
                <Slider {...settings}>
                    <div>
                    <Testimony>
                        <TestimonyHeading>Anonymous</TestimonyHeading>
                        <TestimonyContent><ImQuotesLeft />  I got an instant reply as soon I dropped a message to the listener. The conversation went like I was talking to a very good friend, there was not even a single moment where I felt like I was talking to a stranger. Excellent people!!
                  Thankyou for hearing me. <ImQuotesRight /></TestimonyContent>
                    </Testimony>
                    </div>

                    <div>
                    <Testimony>
                        <TestimonyHeading>Anonymous</TestimonyHeading>
                        <TestimonyContent><ImQuotesLeft />  I found this app via their Instagram page. They were putting up some amazing content there. I thought of giving their service a try. I got connected to a listener and then we started talking. I had some family issues which I needed
                  to tell someone and I finally got a person who understood how I felt.<ImQuotesRight /></TestimonyContent>
                    </Testimony>
                    </div>

                    <div>
                    <Testimony>
                        <TestimonyHeading>Anonymous</TestimonyHeading>
                        <TestimonyContent><ImQuotesLeft />  To be honest I am an introvert person, even if I want to I am not able to share my feelings. As Hear Us provided anonymous listeners so I tried them without hesitating. For the first time I felt so much satisfied after talking to
                  someone. That's a big achievement for an introvert like me.  <ImQuotesRight /></TestimonyContent>
                    </Testimony>
                    </div>

                    <div>
                    <Testimony>
                        <TestimonyHeading>Anonymous</TestimonyHeading>
                        <TestimonyContent><ImQuotesLeft /> Extremely impressed by the Hear Us app. The listeners are very competent and were able to discuss with great knowledge. This is a great resource for those suffer from anxiety , depression and other mental distresses.<ImQuotesRight /></TestimonyContent>
                    </Testimony>

                    </div>

                    <div>
                    <Testimony>
                        <TestimonyHeading>Anonymous</TestimonyHeading>
                        <TestimonyContent><ImQuotesLeft /> If you are feeling down , if your all time low is hitting this time and you might need someone on whom you can trust on and share your thoughts freely then give a try to it. You will not regret your decision.  <ImQuotesRight /></TestimonyContent>
                    </Testimony>
                    </div>

                </Slider>
            </TestimonialContainer>
        </TestimonialSectionContainer>
    )
}

export default TestimonialSection
