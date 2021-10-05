import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled (Link)`
    border-radius: 50px;
    height: 40px;
    background: ${({primary}) => (primary ? 'linear-gradient(90deg, #00F260, #43A1FF);' : 'linear-gradient(90deg, #00F260, #43A1FF);')};
    white-space: nowrap;
    padding: 24px 64px;
    padding: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    animation: pulse 1.8s infinite;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? 'linear-gradient(90deg, #00F260, #43A1FF);' : 'linear-gradient(90deg, #00F260, #43A1FF);')};
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

export const ButtonMetamask = styled (Link)`
    border-radius: 50px;
    height: 40px;
    background: ${({primary}) => (primary ? 'linear-gradient(90deg, #00F260, #43A1FF);' : 'linear-gradient(90deg, #00F260, #43A1FF);')};
    white-space: nowrap;
    padding: 24px 64px;
    padding: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    animation: pulse 1.8s infinite;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? 'linear-gradient(90deg, #00F260, #43A1FF);' : 'linear-gradient(90deg, #00F260, #43A1FF);')};
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