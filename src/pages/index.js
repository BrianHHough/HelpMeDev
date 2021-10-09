import React, {useState} from 'react'
import Footer from '../components/Footer'
// import { BrowserRouter as Router } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjectOne, homeObjectTwo, homeObjectThree, homeObjectFour } from '../components/InfoSection/Data'
import NavBar from '../components/NavBar'
// import NavBarLoggedIn from '../components/NavBar/indexLoggedIn'
import Services from '../components/Services'
import Listings from '../components/Listings'
import SideBar from '../components/SideBar'

import Alert from '@mui/material/Alert';
// import AlertTitle from '@mui/material/AlertTitle';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
// import Collapse from '@mui/material/Collapse';
// import { useButton } from '@mui/core/ButtonUnstyled';

// import { useHistory } from "react-router-dom"
import { useMoralis } from "react-moralis";


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    // const { authenticate, isAuthenticated, user } = useMoralis();
    // const { authenticate } = useMoralis();
    const { isAuthenticated, user } = useMoralis();
    //     const { auth, authError, logout, isAuthenticating } = useMoralis();
    const { authError, logout, isAuthenticating } = useMoralis();

    if (!isAuthenticated) {
    return (
        <>
        <div style={{marginTop: 85}}>
        {authError && (
            <Alert variant="outlined" severity="error">
                <strong
                style={{color: "#FF7373"}}
                >{authError.message}</strong>
            </Alert>
          
            )}    

            {/* <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                This is a success alert — <strong>check it out!</strong>
            </Alert> */}
        </div>
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
    )}
    if (isAuthenticated) {
    return (
        <>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <NavBar toggle={toggle} />
          {/* <NavBarLoggedIn toggle={toggle}/> */}
          <Listings />
          {/* <h1>Welcome {user.get("username")}</h1> */}
          {/* <button 
            type='submit'
            onClick={() => logout()}
            disabled={isAuthenticating}
            >Sign Out</button> */}
        <Footer />
        </>
        )   
    }
}

export default Home
