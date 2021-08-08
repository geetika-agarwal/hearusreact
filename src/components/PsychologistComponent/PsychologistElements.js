import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const PsycologistDetail = styled.div`
    margin-top: 150px;
`

export const PsycologistDetailContainer = styled(Container)`
    margin: 0 5rem 0 5rem;

    @media screen and (max-width: 991px) {
        margin: auto;
    }
`

export const PsycologistDetailRow = styled(Row)``

export const PsycologistDetailColumn = styled(Col)``

export const PsycologistDetailName = styled.h2`
    margin-top: 16px;
    color: #254547;

    @media screen and (max-width: 767px) {
        text-align: center;
    }
`

export const ImgWrap = styled.div`
    margin: auto;
    text-align: center;
`


export const PsycologistDetailImg = styled.img`
    width: 60%;
    border-radius: 50%;

    @media screen and (max-width: 767px) {
        width: 45%;
    }
`

export const PsycologistDetailProfession = styled.p`
    color: #828282;
    margin: 16px 0 0 0;

    @media screen and (max-width: 767px) {
        text-align: center;
    }
`

export const PsycologistDetailHomeTown = styled.h4`
    margin-top: 10px;
    color: #254547;

    @media screen and (max-width: 767px) {
        text-align: center;
    }
`

export const DetailStars = styled.div`
    font-size: 20px;

    @media screen and (max-width: 767px) {
        text-align: center;
    }
`

export const PsycologistDivide = styled.hr`
    color: #828282;
    width: 50%;
    margin:  50px auto;
`

export const PsycologistDetailAvailable = styled.h5`
    padding-bottom: 10px;
    margin-left: 30px;
    color: #5f5f5f;
`

export const BookNowBtnWrap = styled.div`
    width: 100%;
    text-align: center;
`

export const BookNowBtn = styled.button`
    color: #fff;
    background: #254547;
    outline: none;
    border: none;
    width: 200px;
    height: 50px;
    margin-top: 30px;
    border-radius: 50px;

    &:hover {
        background: #386b6e;
    }
`