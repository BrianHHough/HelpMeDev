import React, {useState} from 'react'
import Footer from '../components/Footer'
// import { BrowserRouter as Router } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjectOne, homeObjectTwo, homeObjectThree, homeObjectFour } from '../components/InfoSection/Data'
import NavBar from '../components/NavBar'
import Services from '../components/Services'
import SideBar from '../components/SideBar'



const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjectOne} />
            <InfoSection {...homeObjectTwo} />
            <InfoSection {...homeObjectThree} />
            <Services />
            <InfoSection {...homeObjectFour} />
            <Footer />
        </>
    )
}

export default Home
