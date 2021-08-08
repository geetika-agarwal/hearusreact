import React from 'react'
import { Pyschologist1 } from '../components/ListingSection/Data'
import MultiPageFooterSection from '../components/MultiPageFooter'
import MultiPageNavBar from '../components/MultiPageNavBar'
import PyschologistComponent from '../components/PsychologistComponent'
import ScrolltoTop from '../components/ScrollToTop'

const PalakKaur = () => {
    return (
        <>
            <ScrolltoTop />
            <MultiPageNavBar />
            <PyschologistComponent {...Pyschologist1} />
            <MultiPageFooterSection />   
        </>
    )
}

export default PalakKaur
