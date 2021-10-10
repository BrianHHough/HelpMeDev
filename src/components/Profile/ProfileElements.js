import styled from 'styled-components'



export const ProfileContainer = styled.div`
background: #0c0c0c;
display: flex;
position: relative;
justify-content: center;
margin-top: 80px;
align-items: center;
padding: 0 30px;
height: 850px;
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
/* margin-top: 80px; */
width: 100%;
height: 100%;
overflow: hidden;
background: #000C30;
`


export const SignOutBtn = styled.nav`
    display: flex;
    align-items: center;

    /* @media screen and (max-width: 768px) {
        display: none;
    } */
`;


export const NavBtnLinkSignOut = styled.div`
    border-radius: 50px;
    background: linear-gradient(90deg, #00F260, #43A1FF);
    white-space: nowrap;
    padding: 10px 22px;
    float: center;
    width: 20%;
    margin-left: 40%;
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
    font-size: 40px;
    text-align: center;
    margin-bottom: 3px;

    @media screen and (max-width: 768px) {
        font-size: 35px;
    }

    @media screen and (max-width: 480px) {
        font-size: 30px;
    }
`

export const HeroH1Gradient = styled.h1`
   
    color: #fff;
    font-size: 40px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 35px;
    }

    @media screen and (max-width: 480px) {
        font-size: 30px;
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    margin-bottom: 10px;
    color: #fff;
    font-size: 18px;
    line-height: 1.5;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 22px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`



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
    margin-top: 20px;
    margin-bottom: 8px;
    font-size: 20px;
    color: #fff;
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    margin-left: 10px;
    border-color: 2px #fff;
    border-radius: 4px;
    color: white;
    background-color: #000C30;
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
    padding: 10px 22px;
    border: none;
    border-radius: 50px;
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

export const FormButtonSignOut = styled.button`
    background: linear-gradient(90deg, #5b5b5b, #b8b8b8);
    padding: 10px 22px;
    border: none;
    border-radius: 50px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: linear-gradient(90deg, #5b5b5b, #b8b8b8);
        color: #fff;
        box-shadow: 0 0px 25px rgba(255, 255, 255, .7);
        animation: none;
    }
`;