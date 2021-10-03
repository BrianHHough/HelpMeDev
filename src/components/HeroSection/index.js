import React, {useState} from 'react';
import '../../App.css'
import Video from '../../assets/developer-coding-video/Developer Codes.mp4';
import { HeroContainer, HeroBackground,VideoBackground, HeroContent, HeroH1, HeroH1Gradient, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, HeroDisclaimer} from './HeroElements';
import { Button } from '../ButtonElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)

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
                    to="signup" 
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
