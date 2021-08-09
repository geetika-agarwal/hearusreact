import React from 'react'
import { BlogCardContainer, BlogCardContent, BlogCardImg, BlogCardImgContainer, BlogCardReadmore, BlogCardTitle } from './BlogCardElements'

const BlogCard = ({img, title, content}) => {
    return (
        <>
            <BlogCardContainer>
                <BlogCardImgContainer>
                    <BlogCardImg src={img} alt="blog img" /> 
                </BlogCardImgContainer>    
                <BlogCardTitle>{title}</BlogCardTitle>
                <BlogCardContent>{content}</BlogCardContent>
                <BlogCardReadmore>Read More...</BlogCardReadmore>
            </BlogCardContainer>  
        </>
    )
}

export default BlogCard