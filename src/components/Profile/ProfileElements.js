import styled from 'styled-components'



export const ProfileContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
/* margin-top: 80px; */
align-items: center;
padding: 0 30px;
height: calc(100vh);
position: relative;
z-index: 1;
`

export const ProfileBackground = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
background: #000C30;
`
export const ProfileInnerCon = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
margin-top: 80px;
width: 100%;
height: 100%;
overflow: hidden;
background: #000C30;
`


export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;


export const NavBtnLinkSignOut = styled.div`
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

`;

export const HeroH1 = styled.h1`
     margin-top: 40px;
    color: #fff;
    font-size: 28px;
    text-align: center;
    margin-bottom: 3px;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const HeroH1Gradient = styled.h1`
   
    color: #fff;
    font-size: 28px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`
