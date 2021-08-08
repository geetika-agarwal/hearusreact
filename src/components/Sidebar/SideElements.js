import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import {Link as linkS} from 'react-scroll';
import {Link as linkR} from 'react-router-dom';
 
export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width:100%;
    height: 100%;
    background: #fff;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;

    opacity:${({isOpen}) => (isOpen ? '100%' : '0%')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    
`

export const CloseIcon = styled(FaTimes)`
    color: #000;
`

export const Icon = styled.div`
    position:absolute;
    top: 55px;
    right: 15px;
    bottom: 15px;
    padding: 10px 0;
    overflow-y: auto;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    font-size: 2rem;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #7a6960;
    background-color: #fff;
`

export const SidebarLink = styled(linkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #7a6960;
    background-color: #fff;
    cursor: pointer;

    &.active {
        color: #254547;
        font-weight: bolder;
    }

    &:hover {
        color: #254547;
        transition: 0.2s ease-in-out;
    }
`

export const SidebarLinkR = styled(linkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #7a6960;
    background-color: #fff;
    cursor: pointer;

    &:hover {
        color: #254547;
        transition: 0.2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    background-color: #fff;
`

export const SidebarRoute = styled(linkR) `
    border-radius: 50px;
    background: #254547;
    white-space: nowrap;
    padding: 16px 64px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: 0.2s ease-in-out;
        background: #386b6e;
        color: #fff;
    }
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    background-color: #fff;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`