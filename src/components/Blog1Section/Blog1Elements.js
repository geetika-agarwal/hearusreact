import styled from 'styled-components';

export const BlogBackground = styled.div`
    width: 100%;
    height: 400px;
    margin-top: 80px;
    margin-bottom: 2rem;
`

export const BlogBackgroundImg = styled.img`
    width: 100%;
    height: 100%;
`

export const BlogContent = styled.div`
    margin: 5rem auto 5rem auto;

    @media only screen and (max-width:991px) {
        padding: 10px;
    }
`

export const BlogHeading = styled.h2`
    padding: 0 5rem 10px 5rem;
    font-weight: 900;
    color: #254547;
    margin-bottom: 2rem;

    @media only screen and (max-width:991px) {
        padding: 0 10px;
    }
`

export const BlogParagraph = styled.p`
    padding: 0 10rem 0 10rem;
    line-height: 1.8;
    color: #5f5f5f;

    @media only screen and (max-width:991px) {
        padding: 0 25px;
    }
`

export const BlogSubheading = styled.h4`
    padding: 0 7.5rem 0 7.5rem;
    font-weight: 700;
    color: #1B0A42;
    margin-bottom: 1.5rem;

    @media only screen and (max-width:991px) {
        padding: 0 17px;
    }
`

export const BlogList = styled.ul`
    padding: 0 14rem 0 14rem;
    line-height: 1.8;
    color: #5f5f5f;

    @media only screen and (max-width:991px) {
        padding: 0 30px;
    }
`