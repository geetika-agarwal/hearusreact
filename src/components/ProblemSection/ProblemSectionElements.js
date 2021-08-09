import { Container } from 'react-bootstrap';
import styled from 'styled-components';

export const ProblemSectionContainer = styled(Container)`
    width: 100%;
    background: #FFFFFF;
`

export const ProblemHeading = styled.h2`
    font-weight: bolder;
    text-align: center;
    margin: 1rem;
    margin-top: 3rem;
    color: #1B0A42;

    @media all and (max-width: 991px) {
        font-size: 40px;
    }
`

export const CardFrontContainer = styled.div`
    width: 100%;
    height: 100%;
    background: #3B665F;
    align-items: center;
    justify-content: center;
    margin: auto;
    border-radius: 50px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
`

export const CardImage = styled.img`
   position: relative;
    width: 50%;
    margin: auto;
    left: 4.5rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
`

export const CardText = styled.h5`
    text-align: center;
    color: #fff;
`

export const CardBackContainer = styled.div`
    width: 300px;
    height: 300px;
    background: #fff;
    color: #5f5f5f;
    border-radius: 50px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
`

export const CardContext = styled.p`
    margin-top: 2rem;
    justify-content: center;
    text-align: center;
    padding: 2rem;
`


