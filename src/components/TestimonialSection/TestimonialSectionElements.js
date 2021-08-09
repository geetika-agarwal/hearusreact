import styled from 'styled-components';

export const TestimonialSectionContainer = styled.div`
    background-color:#f7f3f0;
    padding: 2rem;
`

export const TestimonialHeadingContainer = styled.div`
    margin-bottom: 1rem;
    text-align: center;
    margin-top: 10px;
`

export const TestimonialHeading = styled.h2`
    font-weight: bolder;
`

export const TestimonialContainer = styled.div`
    width: 100%;
    height: 65vh;

    @media only screen and (max-width: 991px) {
        height: 100%;
        margin: auto;
    }
`

export const Testimony = styled.div`
    background-color:#fff;
    margin: 0 2rem;
    height: 260px;  
    width: 90%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    border-radius: 50px;
    margin-bottom: 1rem;

    @media screen and (max-width: 991px) {
        height: 100%;
        margin: 5px auto;
        margin-bottom: 2rem;
    }
`

export const TestimonyHeading = styled.h4`
    margin-top: 1rem;   
    padding: 0 2rem;
    font-weight: bolder;
`

export const TestimonyContent = styled.p`
    padding: 1rem 4rem;
`
