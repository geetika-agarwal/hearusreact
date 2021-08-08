import React from 'react'
import { Pyschologist5 } from '../components/ListingSection/Data'
import MultiPageFooterSection from '../components/MultiPageFooter'
import MultiPageNavBar from '../components/MultiPageNavBar'
import PyschologistComponent from '../components/PsychologistComponent'
import ScrolltoTop from '../components/ScrollToTop'

const PallabiSen = () => {
    return (
        <>
            <ScrolltoTop />
            <MultiPageNavBar />
            <PyschologistComponent {...Pyschologist5}/>
            <MultiPageFooterSection />   
        </>
    )
}

export default PallabiSen;