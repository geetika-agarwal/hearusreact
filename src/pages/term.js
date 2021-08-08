import React from 'react'
import MultiPageFooterSection from '../components/MultiPageFooter'
import MultiPageNavBar from '../components/MultiPageNavBar'
import ScrolltoTop from '../components/ScrollToTop'
import TermsSection from '../components/TermsSection'

const Terms = () => {
    return (
        <>
            <ScrolltoTop />
            <MultiPageNavBar />
            <TermsSection />
            <MultiPageFooterSection />
        </>
    )
}

export default Terms
