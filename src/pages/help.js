import React, {useState} from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import HelpSection from '../components/RequestHelp'
import Footer from '../components/Footer'

import './typeform.css';

const RequestHelpPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle} />
            <HelpSection />
            <Footer />
        </>
    )
}

export default RequestHelpPage







