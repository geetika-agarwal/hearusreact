import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`
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
`

export const NavLogoLink = styled(LinkR)`
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
        width: 100%
    }
`   

export const NavLink = styled(LinkS)`
    color: #000;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    color: #4e4039;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #254547;
        font-weight: bolder;
    }

    &:hover {
        color: #254547;
        font-weight: bolder;
        cursor: pointer;
    }
`

export const NavLinkR = styled(LinkR)`
    color: #000;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    color: #4e4039;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #254547;
        font-weight: bolder;
    }

    &:hover {
        color: #254547;
        font-weight: bolder;
        cursor: pointer;
    }
`

export const Bars = styled(FaBars)`
    display: none ;

    @media all and (max-width: 1265px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size:1.8rem;
        cursor: pointer;
    }
`
 
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100vw;
    white-space: nowrap;

    @media all and (max-width: 1265px) {
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-left: 24px;

    justify-content: flex-start;
    width: 40vw;

    @media all and (max-width: 1265px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
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



