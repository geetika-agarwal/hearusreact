import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const ListingContainer = styled.div`
    margin-top: 50px;
`;

export const ListingHeading = styled.h1`
    text-align: center;
    margin-top: 100px;
    color: #254547;
    padding: 5px;
`

export const ListingSubHeading = styled.h2`
    text-align: center;
    margin: 30px 0 50px 0;
    padding: 5px;
    color: #696565;
`

export const PyschologistContainer = styled(Container)`
    background-color: #F7F3F0;
    border-radius: 50px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    padding: 10px;
    margin-bottom: 10px;

    @media screen and (max-width: 991px) {
        width: 80%;
    }
`;

export const PyschologistRow = styled(Row)`
    padding: 2rem;
`;

export const PyschologistColumn = styled(Col)``;

export const PyschologistImg = styled.img`
    width: 70%;
    border-radius: 50%;
    margin: 0 20px;  
`

export const PyschologistName = styled.h3`
    color: 254547;
    margin: 10px 10px 0 0;
`

export const PsychologistProfession = styled.span`
    font-size: 16px;
    color: #828282;
`

export const PyschologistHomeTown = styled.h5`
    margin-top: 10px;
`

export const Stars = styled.div`
    font-size: 20px;
`