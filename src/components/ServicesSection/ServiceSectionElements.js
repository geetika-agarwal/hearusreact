import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const Service = styled.div`
    width: 100%;
    height: 100%;
    background-color:#f7f3f0;
    padding-bottom: 5rem;
`

export const ServiceSectionHeadingContainer = styled.div`
    margin-top: 4.5rem;
    text-align: center;
`

export const ServiceSectionHeading = styled.h2`
    font-weight: bolder;
    color: #1B0A42;
`

export const ServiceSectionSubheading = styled.h3`
    color: #b5b3b3;
    font-weight: bolder;
    margin-top: 1.3rem;
    margin-bottom: 15px;
`

export const ServiceContainer = styled(Container)`
    width: 100%;
    margin-top: 1rem;
`

export const ServiceRow = styled(Row)`
    width:100%;
    margin: auto;
    margin-top: 4rem;
`

export const ServiceImage = styled.img`
    width: 75%;
    margin: 0 0 0 5rem;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 991px) {
        margin-left: 2rem;
    }
`

export const ServiceCol = styled(Col)`
    justify-content: center;
    align-items: center;
`

export const ServiceDescription = styled.div`
    line-height: 1.8rem;

    @media all and (max-width: 991px) {
        text-align: center;
    }
`

export const ServiceTitle = styled.h3`
   margin-top: 1rem;
   font-weight: bolder;
`

export const ServiceContent = styled.p`
    margin-top: 3.5rem;
    margin-bottom: 3.5rem;
    color: #5f5f5f;
`

export const ButtonContainer = styled.div`
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    text-align: center;
`

export const ListenerButton = styled.button`
    white-space: nowrap;
    border: none;
    outline: none;
    background-color:#254547;
    color: #fff;
    height: 3.5rem;
    width: 15rem;
    border-radius: 50px;

    &:hover {
        background-color:#386b6e;
    }
`

export const BookButton = styled.button`
    white-space: nowrap;
    border: none;
    outline: none;
    background-color:#254547;
    color: #fff;
    height: 3.5rem;
    width: 15rem;
    border-radius: 50px;

    &:hover {
        background-color:#386b6e;
    }
`