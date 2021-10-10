import React, {useState} from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import ProfileSection from '../components/Profile'
import Footer from '../components/Footer'

import './typeform.css';

const ProfilePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle} />
            <ProfileSection />
            <Footer />
        </>
    )
}

export default ProfilePage







