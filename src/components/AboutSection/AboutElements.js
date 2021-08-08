import styled from "styled-components";

export const AboutSectionHeadingContainer = styled.div`
    background-color:#FFFFFF;
    margin-top: 2.5rem; 
    text-align: center;
`

export const AboutSectionHeading = styled.h2`
    font-weight: bolder;
    color: #1B0A42;
    margin-bottom: 1rem;
`

export const AboutSectionDescription = styled.h4`
    margin: 3rem 10rem 5rem 10rem;
    color: #5f5f5f;
    line-height: 2.3rem;
    text-align: center;

    @media screen and (max-width: 991px) {
        text-align: justify;
        margin: 2rem;
    }
`
