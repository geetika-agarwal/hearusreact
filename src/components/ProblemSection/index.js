import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import {CardBackContainer, CardContext, CardFrontContainer, CardImage, CardText, ProblemHeading, ProblemSectionContainer } from './ProblemSectionElements';
import Flippy , {FrontSide, BackSide } from 'react-flippy';
import card1 from'../../images/card-1.svg'
import card2 from '../../images/card-2.svg'
import card3 from '../../images/card-3.svg'


const ProblemSection = () => {

    return (
        <>
            <ProblemSectionContainer>
                <ProblemHeading>The Problem</ProblemHeading>
                    <p className="underline"></p>
            </ProblemSectionContainer>
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <Flippy flipOnHover={true} flipDirection="horizontal">
                            <FrontSide>
                                <CardFrontContainer>
                                    <CardImage src={card1} alt="card-1" />
                                    <CardText>Uncomfortable in Sharing Feelings with known ones</CardText>
                                </CardFrontContainer>
                            </FrontSide>
                            <BackSide>
                                <CardBackContainer>
                                    <CardContext>Often there arises some thoughts which we aren't comfortable sharing, even with our closest ones.</CardContext>
                                </CardBackContainer>
                            </BackSide>
                        </Flippy>
                    </Col>

                    <Col xs={12} md={6} lg={4}>
                    <Flippy flipOnHover={true} flipDirection="horizontal">
                            <FrontSide>
                                <CardFrontContainer>
                                    <CardImage src={card2} alt="card-2" />
                                    <CardText>Fear of Being Judged</CardText>
                                </CardFrontContainer>
                            </FrontSide>
                            <BackSide>
                                <CardBackContainer>
                                    <CardContext>Occasionally it must have happened that you were going to say something sensitive and suddenly the fear of being judged pops in your head. Thus, you stop yourself from sharing your thoughts.</CardContext>
                                </CardBackContainer>
                            </BackSide>
                        </Flippy>
                    </Col>

                    <Col xs={12} md={6} lg={4}>
                    <Flippy flipOnHover={true} flipDirection="horizontal">
                            <FrontSide>
                                <CardFrontContainer>
                                    <CardImage src={card3} alt="card-3" />
                                    <CardText>Feeling Frustrated & Anxious</CardText>
                                </CardFrontContainer>
                            </FrontSide>
                            <BackSide>
                                <CardBackContainer>
                                    <CardContext>Ever felt like you are not able to perform just because you feel that you are in a bed full of thoughts and you need to clear your mind?</CardContext>
                                </CardBackContainer>
                            </BackSide>
                        </Flippy>
                    </Col>
                </Row>
            </Container>
        </>     
    )
}

export default ProblemSection
