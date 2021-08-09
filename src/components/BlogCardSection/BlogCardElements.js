import styled from 'styled-components'

export const BlogCardContainer = styled.div`
    width: 25rem;
    height: 30rem;
    border-radius: 50px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    margin: 10px auto;

    @media only screen and (max-width: 991px) {
        width: 20rem;
        height: 32rem;
    }
`

export const BlogCardImgContainer = styled.div`
    width: 25rem;
    height: 15rem;

    @media only screen and (max-width: 991px) {
        width: 20rem;
        height: 15rem;
    }
`

export const BlogCardImg = styled.img`
    width: 100%;
    height: 100%;
`

export const BlogCardTitle = styled.h4`
    padding: 7px 15px;
    text-align: left;
    color: #254547;
    font-weight: 900;
`

export const BlogCardContent = styled.p`
    color: #5f5f5f;
    padding: 0px 15px;
`

export const BlogCardReadmore = styled.p`
    color: gray;
    padding: 0px 15px;
`