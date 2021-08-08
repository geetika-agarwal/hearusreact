import React from 'react'
import { Pyschologist2 } from '../components/ListingSection/Data'
import MultiPageFooterSection from '../components/MultiPageFooter'
import MultiPageNavBar from '../components/MultiPageNavBar'
import PyschologistComponent from '../components/PsychologistComponent'
import ScrolltoTop from '../components/ScrollToTop'

const ShivaniNaghnoor = () => {
    return (
        <>
            <ScrolltoTop />
            <MultiPageNavBar />
            <PyschologistComponent {...Pyschologist2}/>
            <MultiPageFooterSection />   
        </>
    )
}

export default ShivaniNaghnoor
