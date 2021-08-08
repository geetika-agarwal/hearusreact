import React from 'react'
import Blog1Section from '../components/Blog1Section'
import MultiPageFooterSection from '../components/MultiPageFooter'
import MultiPageNavBar from '../components/MultiPageNavBar'

const blog1 = () => {
    return (
        <>
            <MultiPageNavBar />

            <Blog1Section />

            <MultiPageFooterSection />   
        </>
    )
}

export default blog1
