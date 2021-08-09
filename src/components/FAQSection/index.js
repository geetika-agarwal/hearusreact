import React from 'react';
import Faq from 'react-faq-component';
import { FAQHeading, FAQHeadingcontainer, FAQSectionContainer } from './FAQSectionElements';

const data = {
    rows: [
        {
            title: 'What is Hear Us?',
            content: 'Hear Us is an online emotional support system where you can talk to trained empathetic listeners without being judged and can book therapy sessions with professional psychologists.'
        }, 
        {
            title: 'How can we talk to the listeners?',
            content: 'Download the Hear Us app by clicking on the Download the App button on the homepage and click on Connect to Listener on the app after logging in.'
        },
        {
            title: 'Who are the listeners?',
            content: 'The listeners are trained volunteer who are under the supervision of psychologists. The listener majorly belongs from the psychology background.'
        },
        {
            title: 'Can I become a listener even if I am not from a psychology background?',
            content: 'Absolutely, If you have the passion to help others you can become a listener after undergoing training sessions with psychologist.'
        },
        {
            title: 'What is the procedure to apply as a listener?',
            content: 'Click on the "Volunteer as Listener" button on the homepage and fill out the form in which some basic questions will be asked.'
        },
        {
            title: 'How to book therapy session with psychologist?',
            content: 'i) Download the Hear Us app <Br> ii) Login and click on Book a Session <Br>  iii) Choose a psychologist of your choice<Br> iv) Select your preferred date and time <Br> v) Make the payment'
        },
        {
            title: 'What are the charges for the listener and psychologist?',
            content: 'The listener service is totally free of cost. However, the therapy sessions are paid. The rates may differ for different psychologists.'
        }
    ]
}

const FAQSection = () => {
    return (
        <FAQSectionContainer id="faq">
            <FAQHeadingcontainer>
                <FAQHeading>F. A. Q</FAQHeading>
                <p className="underline"></p>
            </FAQHeadingcontainer>
            <Faq data={data} />
        </FAQSectionContainer>
    )
}

export default FAQSection
