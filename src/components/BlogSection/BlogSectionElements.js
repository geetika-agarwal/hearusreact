import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

export const BlogsSection = styled.div`
    margin-top: 80px;
`

export const BlogSectionHero = styled.div`
    height: 350px;
    background-color:#F7F3F0;
    text-align: center;
`

export const BlogSectionTitle = styled.h1`
    margin-top: 75px;
    font-weight: 900;
    padding: 10px;
    color: #254547;
`

export const BlogSectionSubTitle = styled.h2`
    padding: 10px;
`

export const BlogsContainer = styled(Container)`
    margin:  50px auto;
`

export const BlogsRow = styled(Row)`
    margin: 20px auto;
`

export const BlogColumn = styled(Col)`
    margin: 20px 0px;
`