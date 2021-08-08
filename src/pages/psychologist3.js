import React from 'react'
import { Pyschologist3 } from '../components/ListingSection/Data'
import MultiPageFooterSection from '../components/MultiPageFooter'
import MultiPageNavBar from '../components/MultiPageNavBar'
import PyschologistComponent from '../components/PsychologistComponent'
import ScrolltoTop from '../components/ScrollToTop'

const AameyParekh = () => {
    return (
        <>
            <ScrolltoTop />
            <MultiPageNavBar />
            <PyschologistComponent {...Pyschologist3} />
            <MultiPageFooterSection />   
        </>
    )
}

export default AameyParekh
    