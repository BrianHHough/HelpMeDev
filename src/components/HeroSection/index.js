import React, {useState} from 'react';
import '../../App.css'
import Video from '../../assets/developer-coding-video/Developer Codes.mp4';
import { HeroContainer, HeroBackground,VideoBackground, HeroContent, HeroH1, HeroH1Gradient, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, HeroDisclaimer} from './HeroElements';
import { Button } from '../ButtonElements';
import { useHistory } from "react-router-dom"

const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const history = useHistory();

    const onHover = () => {
        setHover(!hover)
    }

    const handleRouteSignUpForm = () => {
        history.push("/signupform")
    }


    return (
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
                        Join the Waitlist {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
