import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom'

export const ListingsSearchContainer = styled.div`
    height: 100px;
    display: flex;
    margin-top: 80px;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000C30;

    /* @media screen and (max-width: 768px) {
        height: 1100px;
    } */

    @media screen and (max-width: 1000px) {
        height: 100px
    }
`;

export const ServicesContainerTop = styled.div`
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #0045AB;

    /* @media screen and (max-width: 768px) {
        height: 1100px;
    } */

    @media screen and (max-width: 1000px) {
        height: 20px;
    }
`;

export const ServicesContainer = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #0045AB;

    /* @media screen and (max-width: 768px) {
        height: 1100px;
    } */

    @media screen and (max-width: 1000px) {
        height: auto;
    }
`;

export const ServicesWrapper = styled.div`
    max-width: 2000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    /* @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    } */

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ServicesCard = styled.div`
    background: #fff;
    /* margin-top: 40px;
    margin-bottom: -30px; */
    /* display: flex; */
    flex-direction: column;
    justify-content: flex-start;
    /* align-items: center; */
    border-radius: 10px;
    max-height: 340px;
    padding: 25px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        /* cursor: pointer; */
    }
`;

export const ServicesCardStyles = styled.div`
    background: #fff;
    /* margin-top: 40px;
    margin-bottom: -30px; */
    /* display: flex; */
    flex-direction: column;
    justify-content: flex-start;
    /* align-items: center; */
    border-radius: 10px;
    max-height: 340px;
    padding: 25px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        /* cursor: pointer; */
    }
`;

export const ServicesIcon = styled.div`
    margin-bottom: 10px;
    float: right;
    /* top: 30px; */
    margin-top: -40px;
    margin-right: -10px;
`

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ServicesH2 = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;
    width: 80%;
`

export const ServicesP = styled.p`
    font-size: 1.0rem;
    text-align: left;
    width: 80%;
`

export const CostP = styled.p`
    font-size: 1.0rem;
    text-align: left;
    width: 80%;
    margin-top: 10px;
`

export const AddressP = styled.p`
    font-size: 1.0rem;
    text-align: left;
    width: 100%;
    margin-top: 10px;
`

export const ProgrammingLanguageIconCon = styled.div`
    font-size: 1.0rem;
    text-align: left;
    width: 80%;
    margin-top: 10px;
`


export const HelpThisDevBtn = styled(LinkRouter)`
    margin-bottom: 10px;
    float: right;
    margin-top: -60px;
    margin-right: -10px;
    border-radius: 50px;
    background: linear-gradient(90deg, #00F260, #43A1FF);
    white-space: nowrap;
    padding: 20px 24px;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    animation: pulseBtn 1.8s infinite;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: linear-gradient(90deg, #00F260, #43A1FF);
        color: #fff;
        box-shadow: 0 0px 25px #212121b0;
        animation: none;
        
    }

    @media screen and (max-width: 1000px) {
        margin-right: -10px;
    }

    @media screen and (max-width: 452px) {
        margin-right: -10px;
    }

    @-webkit-keyframes pulseBtn {
        0% {
            -webkit-box-shadow: 0 0 0 0 rgba(0, 242, 96, 1);
        }
        70% {
            -webkit-box-shadow: 0 0 0 15px rgba(0, 242, 96, 0);
        }
        100% {
            -webkit-box-shadow: 0 0 0 0 rgba(0, 242, 96, 0);
        }
    }
    @keyframes pulseBtn {
        0% {
            -moz-box-shadow: 0 0 0 0 rgba(0, 242, 96, 1);
            box-shadow: 0 0 0 0 rgba(0, 242, 96, 0.6);
        }
        70% {
            -moz-box-shadow: 0 0 0 15px rgba(0, 242, 96, 0);
            box-shadow: 0 0 0 15px rgba(0, 242, 96, 0);
        }
        100% {
            -moz-box-shadow: 0 0 0 0 rgba(0, 242, 96, 0);
            box-shadow: 0 0 0 0 rgba(0, 242, 96, 0);
        }
    }

`;

export const ProgrammingLanguageIcon = styled.img`
    height: 30px;
    width: 30px;
    margin-right: 10px;
`