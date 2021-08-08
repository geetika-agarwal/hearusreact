import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom'

export const FooterSectionContainer = styled(Container)`
    margin-top: 2.5rem;
    height: 100%;
`

export const FooterSectionRow = styled(Row)`
    margin: 1rem 5rem;
`

export const FooterSectionCol = styled(Col)`
    margin-top: 2rem;
    overflow-y: hidden;
    padding-bottom: 10px;
`

export const FooterLink = styled(LinkR)`
    text-decoration: none;
    cursor: pointer;
    color: #5f5f5f;
    margin-left: 0.8rem;
    line-height: 2.5rem;

    &:hover {
        color: gray;
    }
`

export const FooterLinkS = styled(LinkS)`
text-decoration: none;
cursor: pointer;
color: #5f5f5f;
margin-left: 0.8rem;
line-height: 2.5rem;

&:hover {
    color: gray;
}
`

export const SocialLink = styled.a`
    justify-content: space-between;
    margin:  0.5rem;
    background-color: #254547;

    padding: 0.5rem;
    border-radius: 50px;
    color: #fff;
    font-size: 1rem;

    &:hover {
        color: white;
    }
`