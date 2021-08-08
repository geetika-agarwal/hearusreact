import React from 'react'
import BlogSection from '../components/BlogSection'
import MultiPageFooterSection from '../components/MultiPageFooter'
import MultiPageNavBar from '../components/MultiPageNavBar'


const BlogsSection = () => {

    return (
        <>
            <MultiPageNavBar /> 
            <BlogSection />
            <MultiPageFooterSection />
        </>
    )
}

export default BlogsSection