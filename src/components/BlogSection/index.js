import React from 'react'
import BlogCard from '../BlogCardSection'
import { BlogColumn, BlogsContainer, BlogSectionHero, BlogSectionSubTitle, BlogSectionTitle, BlogsRow, BlogsSection } from './BlogSectionElements'
import {blog1, blog2, blog3} from './Data';
import { Link } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';

const BlogSection = () => {
    return (
        <>
            <ScrollToTop />
            <BlogsSection>
                <BlogSectionHero>
                    <BlogSectionTitle>Blog Posts</BlogSectionTitle>
                    <BlogSectionSubTitle>Welcome to our blog section</BlogSectionSubTitle>
                </BlogSectionHero> 
                <BlogsContainer>
                    <BlogsRow>
                        <BlogColumn xs={12} md={6}> 
                            <Link to="/depressiondifferfromsadness" style={{textDecoration: "none"}}><BlogCard {...blog1} /></Link>
                        </BlogColumn>    
                        <BlogColumn xs={12} md={6}>
                            <Link to="/anxiety" style={{textDecoration: "none"}}><BlogCard {...blog2} /></Link>
                        </BlogColumn>
                    </BlogsRow>
                    <BlogsRow>
                        <BlogColumn xs={12} md={6}>
                            <Link to="/uncomfortabletalking" style={{textDecoration: "none"}}><BlogCard {...blog3} /></Link>
                        </BlogColumn>
                    </BlogsRow>    
                </BlogsContainer>   
            </BlogsSection>   
        </>
    )
}

export default BlogSection
