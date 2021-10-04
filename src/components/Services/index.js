import React from 'react';

import Icon1 from '../../assets/images/svg-1.svg';
import Icon2 from '../../assets/images/svg-2.svg';
import Icon3 from '../../assets/images/svg-3.svg';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="perks">
            <ServicesH1>Membership Perks</ServicesH1>
            <ServicesWrapper>
                
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Global Talent Pool</ServicesH2>
                    <ServicesP>Gain access to a global world of verified talent for your app.</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Exclusive Focus Hubs</ServicesH2>
                    <ServicesP>Connect with other developers and entrepreneurs in your niche.</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>24/7 Access & Support</ServicesH2>
                    <ServicesP>Our goal is direct, rapid, and responsive service and support.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>

        </ServicesContainer>
            
    )
}

export default Services
