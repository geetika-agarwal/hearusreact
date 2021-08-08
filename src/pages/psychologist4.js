import React from 'react'
import { Pyschologist4 } from '../components/ListingSection/Data'
import MultiPageFooterSection from '../components/MultiPageFooter'
import MultiPageNavBar from '../components/MultiPageNavBar'
import PyschologistComponent from '../components/PsychologistComponent'
import ScrolltoTop from '../components/ScrollToTop'

const ShristhiAsthana = () => {
    return (
        <>
            <ScrolltoTop />
            <MultiPageNavBar />
            <PyschologistComponent {...Pyschologist4} />
            <MultiPageFooterSection />   
        </>
    )
}

export default ShristhiAsthana