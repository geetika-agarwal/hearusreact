import React from 'react'
import { PrivacySectionContainer, PrivacySectionContentContainer, PrivacySectionHeading, PrivacySectionHeadingContainer, PrivacySectionSubheading } from './PrivacySectionElements'

const PrivacySection = () => {
    return (
        <>
            <PrivacySectionContainer>
                <PrivacySectionHeadingContainer>
                    <PrivacySectionHeading>Privacy Policies</PrivacySectionHeading>
                </PrivacySectionHeadingContainer>
                <PrivacySectionContentContainer>
                    <PrivacySectionSubheading>SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?</PrivacySectionSubheading>
                    <p>When you book a session ( from psychologists ) or enroll in our mental wellness course from our platform, as part of the booking process, we collect the personal information you give us such as your name, contact number and email address.</p>
                    <p>When you browse our platform, we also automatically receive your computer’s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.</p>
                    <p>Email marketing : With your permission, we may send you emails about our service and other updates.</p>
                    <br />
                    <PrivacySectionSubheading>SECTION 2 - CONSENT</PrivacySectionSubheading>
                    <p><b>How do you get my consent?</b></p>
                    <p>When you provide us with personal information to complete a transaction, verify your credit card, for booking sessions ( with psychologists ) or enrolling in our courses, we imply that you consent to our collecting it and using it for that specific reason only.</p>
                    <p>If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.</p>
                    <br />
                    <p><b>How do I withdraw my consent?</b></p>
                    <p>If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, use or disclosure of your information, at anytime, by contacting us at <a href="mailto:hearus2021@gmail.com">hearus2021@gmail.com</a> or you can directly reach out to us by WhatsApp +91 8368828660.</p>
                    <br />
                    <PrivacySectionSubheading>SECTION 3 - DISCLOSURE</PrivacySectionSubheading>
                    <p>We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.</p>
                    <br />
                    <PrivacySectionSubheading>SECTION 4 - PAYMENT</PrivacySectionSubheading>
                    <p>We use Razorpay for processing payments. We/Razorpay do not store your card data on their servers. The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payment. Your purchase transaction data is only used as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is not saved.</p>
                    <p>Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover.</p>
                    <p>PCI-DSS requirements help ensure the secure handling of credit card information by our company and its service providers.</p>
                    <p>For more insight, you may also want to read terms and conditions of razorpay on <a href="https://razorpay.com">https://razorpay.com.</a></p>
                    <br />
                    <PrivacySectionSubheading>SECTION 5 - THIRD-PARTY SERVICES</PrivacySectionSubheading>
                    <p>In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us. However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions.</p>
                    <p>For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.</p>
                    <p>In particular, remember that certain providers may be located in or have facilities that are located a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.</p>
                    <p>Once you leave our company’s website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Service.</p>
                    <br />
                    <PrivacySectionSubheading>SECTION 6 - SECURITY</PrivacySectionSubheading>
                    <p>To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.</p>
                    <br />
                    <PrivacySectionSubheading>SECTION 7 - AGE OF CONSENT</PrivacySectionSubheading>
                    <p>By using this site, you represent that you are at least the age of majority in your state or province of residence, and you have given us your consent to allow any of your minor dependents to use this site.</p>
                    <br />
                    <PrivacySectionSubheading>SECTION 8 - CHANGES TO THIS PRIVACY POLICY</PrivacySectionSubheading>
                    <p>We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.</p>
                    <p>If our company is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to provide services to you.</p>
                    <br />
                    <PrivacySectionSubheading>QUESTIONS AND CONTACT INFORMATION</PrivacySectionSubheading>
                    <p>If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact our Privacy Compliance Officer at <a href="mailto:hearus2021@gmail.com">hearus2021@gmail.com</a>.</p>
                </PrivacySectionContentContainer>
            </PrivacySectionContainer>
        </>
    )
}

export default PrivacySection