import React from 'react'

import { ProfileContainer, ProfileBackground, ProfileInnerCon, NavBtn, NavBtnLinkSignOut } from './ProfileElements';

import { Input } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import { useMoralis } from "react-moralis";

const ProfileSection = () => {
    const { authenticate, isAuthenticated } = useMoralis();
    const { logout, isAuthenticating } = useMoralis();

    return (
        <ProfileContainer id="home">
            <ProfileBackground>
                <ProfileInnerCon>
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
    )
}

export default ProfileSection
