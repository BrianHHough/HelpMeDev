import React from 'react'
import { Redirect, useLocation } from "react-router-dom"


import { ProfileContainer, ProfileBackground, ProfileInnerCon, NavBtn, NavBtnLinkSignOut, HeroH1, HeroH1Gradient } from './ProfileElements';

// import { Input } from '@material-ui/core';
// import Button from '@material-ui/core/Button';

import { useMoralis } from "react-moralis";

const ProfileSection = () => {
    // const { authenticate, isAuthenticated } = useMoralis();
    const { logout, isAuthenticating } = useMoralis();
    const { isAuthenticated, user } = useMoralis();

    const {location} = useLocation();

    if (isAuthenticated) {
    return (
        <ProfileContainer id="home">
            <ProfileBackground>
                <ProfileInnerCon>
                    <HeroH1>Welcome Back,</HeroH1>
                    <HeroH1Gradient className="H1Gradient">{user.get("username")}</HeroH1Gradient> 
           <button 
            type='submit'
            onClick={() => logout()}
            disabled={isAuthenticating}
            >Sign Out</button> 
                    
                    <NavBtn>
                        <NavBtnLinkSignOut 
                        
                        type='submit'
                        onClick={() => logout()}
                        disabled={isAuthenticating}
                        >
                        Sign Out
                        </NavBtnLinkSignOut>
                    </NavBtn> 
            </ProfileInnerCon>
                
            </ProfileBackground> 
        </ProfileContainer>
    )}
    
    if (!isAuthenticated) {
    return (
        <Redirect
        to={{
            pathname: "/",
            state: { from: location }
        }}
        />
    )}
}

export default ProfileSection
