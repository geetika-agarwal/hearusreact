import React from 'react'
import ListingElements from '../components/ListingSection'
import { Pyschologist1, Pyschologist2, Pyschologist3, Pyschologist4, Pyschologist5 } from '../components/ListingSection/Data'
import { ListingHeading, ListingSubHeading } from '../components/ListingSection/ListingSectionElements'
import MultiPageFooterSection from '../components/MultiPageFooter'
import MultiPageNavBar from '../components/MultiPageNavBar'
import ScrolltoTop from '../components/ScrollToTop'

const BookNow = () => {
    return (
        <>
            <ScrolltoTop />
            <MultiPageNavBar />
            <ListingHeading>Need any help?</ListingHeading>
            <ListingSubHeading>Don't Worry! Book a session with our Psycologist.</ListingSubHeading>
            <ListingElements {...Pyschologist1}/>
            <ListingElements {...Pyschologist2} />
            <ListingElements {...Pyschologist3} />
            <ListingElements {...Pyschologist4} />
            <ListingElements {...Pyschologist5} />
            <MultiPageFooterSection />
        </>
    )
}

export default BookNow
