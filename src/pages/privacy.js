import React from 'react'
import MultiPageFooterSection from '../components/MultiPageFooter'
import MultiPageNavBar from '../components/MultiPageNavBar'
import PrivacySection from '../components/PrivacySection'
import ScrolltoTop from '../components/ScrollToTop'

const Privacy = () => {
    return (
        <>
            <ScrolltoTop />
            <MultiPageNavBar  />
            <PrivacySection />
            <MultiPageFooterSection />
        </>
    )
}

export default Privacy
