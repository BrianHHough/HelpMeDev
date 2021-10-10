import React, { useState } from 'react';
import { Redirect, useLocation } from "react-router-dom";

import { ErrorBox } from '../Error';


import { ProfileContainer, ProfileBackground, ProfileInnerCon, FormButtonSignOut, HeroH1, HeroH1Gradient, HeroP, FormLabel, FormInput, FormButton } from './ProfileElements';

import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
// import { Input } from '@material-ui/core';
// import Button from '@material-ui/core/Button';

import { useMoralis } from "react-moralis";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 10px #44b700`,
      '&::after': {
        position: 'absolute',
        top: -9,
        left: -9,
        bottom: 0,
        width: '230%',
        height: '230%',
        borderRadius: '50%',
        animation: 'ripple 1.6s infinite ease-in-out',
        border: '4px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));


const ProfileSection = () => {
    // const { authenticate, isAuthenticated } = useMoralis();
    const { logout, isAuthenticating } = useMoralis();
    const { isAuthenticated, user, setUserData, userError, isUserUpdating } = useMoralis();

    const [username, setUsername] = useState(user.attributes.username);
    const [email, setEmail] = useState(user.attributes.email);
    const [password, setPassword] = useState('');

    const {location} = useLocation();

    const handleSave = () => {
        setUserData({
            username,
            email,
            password: password === "" ? undefined : password
        })
    }

    if (isAuthenticated) {
    return (
        <ProfileContainer id="home">
            <ProfileBackground>
                <ProfileInnerCon>
                    <center>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                    <Avatar
                        sx={{ 
                            bgcolor: "#43A1FF",
                            width: "80px",
                            height: "80px",
                            marginTop: "30px",
                            fontSize: "2.25rem",
                        
                        }}
                        alt="HelpMeDev"
                        src="/broken-image.jpg"
                        name={user.attributes.username}
                        >
                            {username.charAt(0)}
                    </Avatar>
                    </StyledBadge>
                    </center>
                    <HeroH1>Welcome Back,</HeroH1>
                    <HeroH1Gradient className="H1Gradient">{user.attributes.username}</HeroH1Gradient> 
            
            <br></br>
            <br></br>
            <center>
            <HeroP>Update your profile here:</HeroP>
            </center>
            <center>
            <FormLabel htmlFor='for'>Username:</FormLabel>
            <FormInput 
                value={username}
                onChange={(event) => setUsername(event.currentTarget.value)}
                />
            </center>
            
            <center>
            <FormLabel htmlFor='for'>Email:</FormLabel>
            <FormInput 
                value={email}
                onChange={(event) => setEmail(event.currentTarget.value)}
                />
            </center>

            <center>
            <FormLabel htmlFor='for'>Password:</FormLabel>
            <FormInput 
                value={password}
                onChange={(event) => setPassword(event.currentTarget.value)}
                />
            </center>
            
            <center>
            <FormButton 
                type='submit'
                onClick={handleSave}
                isLoading={isUserUpdating}
                >
                    Save Profile Changes
            </FormButton>
            {userError && <ErrorBox title="User change has failed" 
            message={userError.message} />}
           
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <FormButtonSignOut 
            type='submit'
            onClick={() => logout()}
            disabled={isAuthenticating}
            >
            Sign Out
            </FormButtonSignOut>
            </center>

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
