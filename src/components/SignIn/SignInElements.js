import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    /* min-height: 692px; */
    height: 850px;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: none;
    background: linear-gradient(90deg,#00F260,#43A1FF);
    
`;

export const FormWrap = styled.div`
    height: 850px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        /* height: 80%; */
        height: 850px;
        margin-top: -40px;
    }
`;

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700; 
    font-size: 32px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;

export const Form = styled.form`
    background: linear-gradient(90deg, #000C30, #00185e);
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(1,1,1,0.9);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;


export const FormH1v2 = styled.h1`
    margin-top: 40px;
    margin-bottom: 20px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;

export const FormButtonMetaMask = styled.button`
    background: linear-gradient(90deg, #fa7e10, #e15600);
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    animation: pulse 1.8s infinite;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: linear-gradient(90deg, #fa7e10, #e15600);
        color: #fff;
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
`;

export const FormButton = styled.button`
    background: linear-gradient(90deg, #00F260, #43A1FF);
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    animation: pulse 1.8s infinite;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: linear-gradient(90deg, #00F260, #43A1FF);
        color: #fff;
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
`;

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
`;


export const HeroH1Gradient = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

