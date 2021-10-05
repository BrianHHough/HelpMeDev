import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom'

export const Nav = styled.nav`
    background: #1C3691;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;
    animation: slowshift 3s infinite ease-in-out;
    -webkit-transition: background 2s; /* For Safari 3.0 to 6.0 */
    transition: background 2s; /* For modern browsers */

    @keyframes slowshift {
        /* from {background-color: #002E5C;}
        to {background-color: red;} */

        0% {
            /* transform: translate3d(0, 0, 0); */
            background: #1C3691;
        }
        50% {
            /* transform: translate3d(-50%, 0, 0); */
            background: #000C30;
        }  
    }

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
        position: fixed;
        width: 100%;
    }
`

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkRouter)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.5rem;
    }
`

export const MobileIcon = styled.div`
    display: none;
   
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 2rem;
        cursor: pointer;
        color: white;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkRouter)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:active {
        border-bottom: 3px solid #00F260;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkRouter)`
    border-radius: 50px;
    background: linear-gradient(90deg, #00F260, #43A1FF);
    white-space: nowrap;
    padding: 10px 22px;
    color: #002E5C;
    font-size: 16px;
    font-weight: 600;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    animation: pulse 1.8s infinite;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: linear-gradient(90deg, #00F260, #43A1FF);
        color: #010606;
        box-shadow: 0 0px 25px rgba(255, 255, 255, .7);
        animation: none;
    }

    @-webkit-keyframes pulse {
        0% {
            -webkit-box-shadow: 0 0 0 0 rgba(255,255,255, 0.6);
        }
        70% {
            -webkit-box-shadow: 0 0 0 15px rgba(255,255,255, 0);
        }
        100% {
            -webkit-box-shadow: 0 0 0 0 rgba(255,255,255, 0);
        }
    }
    @keyframes pulse {
        0% {
            -moz-box-shadow: 0 0 0 0 rgba(255,255,255, 0.6);
            box-shadow: 0 0 0 0 rgba(255,255,255, 0.4);
        }
        70% {
            -moz-box-shadow: 0 0 0 15px rgba(255,255,255, 0);
            box-shadow: 0 0 0 15px rgba(255,255,255, 0);
        }
        100% {
            -moz-box-shadow: 0 0 0 0 rgba(255,255,255, 0);
            box-shadow: 0 0 0 0 rgba(255,255,255, 0);
        }
    }

`
