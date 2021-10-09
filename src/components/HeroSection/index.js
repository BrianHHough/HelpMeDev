import React, {useState} from 'react';
import '../../App.css'
import Video from '../../assets/developer-coding-video/Developer Codes.mp4';
import { HeroContainer, HeroBackground,VideoBackground, HeroContent, HeroH1, HeroH1Gradient, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, HeroDisclaimer, EmailButton} from './HeroElements';
import { Button, ButtonMetamask } from '../ButtonElements';
import { useHistory } from "react-router-dom"
import { useMoralis } from "react-moralis";
import MetaMaskImg from "../../assets/images/metamaskimgfilter.png";


const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const [hover2, setHover2] = useState(false);
    const history = useHistory();
    // const { authenticate, isAuthenticated, user } = useMoralis();
    const { authenticate } = useMoralis();
    // const { logout, isAuthenticating } = useMoralis();
    const { isAuthenticating } = useMoralis();

    const onHover = () => {
        setHover(!hover)
    }

    const onHover2 = () => {
        setHover2(!hover2)
    }

    const handleRouteSignUpForm = () => {
        history.push("/signupform")
    }


    return (
        <>
        <HeroContainer id="home">
            
            
            <HeroBackground>
                <VideoBackground 
                    autoPlay 
                    loop 
                    muted 
                    src={Video} 
                    type='video/mp4'
                    allowFullScreen
                    allowfullscreen='true'
                    playsInLine
                    controls={false}
                    >

                </VideoBackground>
            </HeroBackground>
            <HeroContent>
                <HeroH1>What Would You Pay,</HeroH1>
                <HeroH1Gradient className="H1Gradient">to Finish Your Side Project?</HeroH1Gradient>
                <HeroP>Sign up for a new account and get free dev help <br></br><b>(up to $2,000 USD)</b>* on HelpMeDev.</HeroP>
                <HeroDisclaimer>*While supplies lasts (see elgibility)</HeroDisclaimer>
                <HeroBtnWrapper>
                    <Button 
                    to="signupform" 
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    onClick={handleRouteSignUpForm}
                    >
                    <EmailButton 
                    width="50px"
                    
                    />
                    &nbsp;
                        Sign in with Email {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
                
                <HeroBtnWrapper>
                    <ButtonMetamask 
                    to="signupform" 
                    onMouseEnter={onHover2}
                    onMouseLeave={onHover2}
                    primary="true"
                    dark="true"
                    onClick={() => authenticate()}
                    isLoading={isAuthenticating}
                    iconRight
                    >
                    <img src={MetaMaskImg} 
                    alt="Metamask" 
                    width="40px" 
                    padding="20px"
                    />
                    &nbsp;
                        Sign in with Metamask {hover2 ? <ArrowForward /> : <ArrowRight />}
                    </ButtonMetamask>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
        </>
    )
}

export default HeroSection
