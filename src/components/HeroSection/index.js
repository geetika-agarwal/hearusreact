import React from 'react'
import { Btn, DownloadBtn, Graphic, HeroContainer, SpanBtn } from './HeroElements'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import graphic from '../../images/heading-graphic.svg';

const HeroSection = () => {
    return (
        <HeroContainer id="hero">
            <Container>
                <Row>
                    <Col id="hero-heading" xs={12} lg={6}>
                    <h1>Feeling Low? Need someone to talk to?</h1>
                    <h2>Talk to our Trained Empathatic Listeners anonymously and let out your negative thoughts</h2>

                    <a href="https://play.google.com/store/apps/details?id=me.hearus.app">
                    <DownloadBtn>
                        <SpanBtn><Btn /> Download the App</SpanBtn>
                    </DownloadBtn>
                    </a>
                    </Col>
                    <Col xs={12} lg={6} id="hero-image">
                        <Graphic src={graphic}/>
                    </Col>
                </Row>
            </Container>

        </HeroContainer>
    )
}

export default HeroSection
