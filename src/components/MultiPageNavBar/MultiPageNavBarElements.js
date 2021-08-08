import styled from 'styled-components';
import {NavLink as linkR} from 'react-router-dom'
import {Link as link} from 'react-router-dom';

export const MultiPageNav = styled.nav`
    background: #fff;
    height: 80px;
    width: 100%;
    position: fixed;
    margin-top: 0px;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: flex-start;
    padding-right: 2rem;
    padding-left: 3rem;
    z-index: 10; 

    @media only screen and (max-width: 1265px) {
        padding: 5px;
    }
`

export const MultiPageNavLogoLink = styled(link)`
    color: #000;
    display: inline-flex;
    align-items: center;
    text-align: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    width: 50%;
    cursor: pointer;
    white-space: nowrap;
    color : #254547;

    &:active {
        color: #15cdfc;
    }

    @media only screen and (max-width:1265px) {
        width: 42%;
        white-space: nowrap;
        padding: 5px;
        overflow-y: hidden;
    }
`

export const MultiNavLinkR = styled(linkR)`

color: #000;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    color: #4e4039;
    height: 100%;
    cursor: pointer;
    font-weight: 300;

    &:hover {
        color: #254547;
        font-weight: bolder;
        cursor: pointer;
    }

    &.selected {
        font-weight: bolder;
        color: #254547;
    }
`

export const MultiPageNavMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100vw;
    white-space: nowrap;

    @media all and (max-width: 1265px) {
        width: 50%;
        margin-left: 0;
    }
`

export const MultiPageNavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-left: 24px;

    justify-content: flex-start;
    width: 40vw;

    @media all and (max-width: 1265px) {
        display: none;
    }
`

export const MultiPageNavBtnLink = styled(link)`
    border-radius: 50px;
    background: #254547;
    padding: 10px 25px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    white-space: nowrap;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #386b6e;
        color: #fff; 
    }
`