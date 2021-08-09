import { FaGooglePlay } from 'react-icons/fa';
import styled from 'styled-components';

export const HeroContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: #F7F3F0;

    @media only screen and (max-width: 1400px) {
        height: 100%;
    }
`

export const DownloadBtn = styled.button`
    background: #254547;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    width: 15rem;
    height: 4rem;
    border-radius: 50px;
    margin-top: 30px;
    margin-bottom: 3rem;

    &:hover {
        background: #386b6e;
    }
`

export const SpanBtn = styled.span`
    background: transparent;
    color: #fff;
`

export const Btn = styled(FaGooglePlay)`
    display: inline-block;
    margin-right: 15px;
    font-size: 23px;
    margin-bottom: 5px;
`
export const Graphic = styled.img`
   animation-name : mymove;
  animation-iteration-count : infinite;
  animation-direction : alternate;
  animation-duration : 2s;
  width : 85%;
  margin-top: 13rem;
  margin-right: 2rem;

  @media screen and (max-width:991px) {
      animation: none;
      margin-top: 2rem;
      margin: auto;
  }
}


@keyframes mymove {
  from {transform: translateY(0px);}
  to {transform: translateY(10px);}
`

