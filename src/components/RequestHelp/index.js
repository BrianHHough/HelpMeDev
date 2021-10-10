import React, { useState } from 'react';
import { Redirect, useLocation } from "react-router-dom";

import { ErrorBox } from '../Error';

import { ProfileContainer, ProfileBackground, ProfileInnerCon, HeroH1, HeroH1Gradient, HeroP, FormLabel, FormInput, FormButton } from './RequestHelpElements';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import EthereumSVG from "../../assets/images/ethereum.svg";

// import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
// import { Input } from '@material-ui/core';
// import Button from '@material-ui/core/Button';

import { useMoralis } from "react-moralis";

// const useStyles = makeStyles((theme) => ({
//     SearchBar: {
//       padding: '2px 4px',
//       display: 'flex',
//       alignItems: 'center',
//       width: 200,
//     },
//   }));

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
    
    const { isAuthenticated, user, userError, isUserUpdating } = useMoralis();

    const [username] = useState(user.attributes.username);

    const {location} = useLocation();

    // const [age, setAge] = React.useState('');

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [setAddress] = useState('');

    const [setMyUsername] = useState('');

    const [cost, setCost] = useState('');

    const [skills, setSkills] = useState('');

    const handleChange = (event) => {
        setSkills(event.target.value);
    };

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
                    <HeroH1>Help Is On the Way,</HeroH1>
                    <HeroH1Gradient className="H1Gradient">{user.attributes.username}</HeroH1Gradient> 
            
            <br></br>
            <br></br>
            <center>
            <HeroP>Submit your contract onchain here:</HeroP>
            
            <br></br>

            <center>
            <FormLabel htmlFor='for'>Title:</FormLabel> <br></br>
            <FormInput 
                value={title}
                onChange={(event) => setTitle(event.currentTarget.value)}
                style={{
                    color: "white",
                    fontSize: "1.6rem",
                    outline: "3px white",
                    boxShadow: '0 0 0 0.2rem rgba(255,255,255,0.6)',
                    borderRadius: 5,
                }}
                />
            </center>
            
            <center>
            <FormLabel htmlFor='for'>Description:</FormLabel> <br></br>
            <FormInput 
                value={description}
                onChange={(event) => setDescription(event.currentTarget.value)}
                style={{
                    color: "white",
                    fontSize: "1.6rem",
                    outline: "3px white",
                    boxShadow: '0 0 0 0.2rem rgba(255,255,255,0.6)',
                    borderRadius: 5,
                }}
                />
            </center>

            <center>
            <FormLabel htmlFor='for'>Wallet Address:</FormLabel> <br></br>
            <FormInput 
                value={user.attributes.ethAddress}
                onChange={(event) => setAddress(event.currentTarget.value)}
                style={{
                    color: "width",
                    outline: "3px white",
                    fontSize: "1.4rem",
                    boxShadow: '0 0 0 0.2rem rgba(255,255,255,0.6)',
                    borderRadius: 5,
                }}
                />
            </center>

            <center>
            <FormLabel htmlFor='for'>Username:</FormLabel> <br></br>
            <FormInput 
                value={user.attributes.username}
                onChange={(event) => setMyUsername(event.currentTarget.value)}
                style={{
                    color: "white",
                    fontSize: "1.6rem",
                    outline: "3px white",
                    boxShadow: '0 0 0 0.2rem rgba(255,255,255,0.6)',
                    borderRadius: 5,
                }}
                />
            </center>

            <center>
            <FormLabel htmlFor='for'>I need somone with this skillset:</FormLabel> 
            <br></br>
            
            <FormControl variant="standard" 
            style={{
                marginTop: "10px",
                color: "width",
                outline: "3px white",
                boxShadow: '0 0 0 0.2rem rgba(255,255,255,0.6)',
                borderRadius: 5,
            }}
            sx={{ Width: 400, color: "white" }}>
             <InputLabel 
             style={{
                color: "white",
                // outline: "3px white",
                // borderRadius: 5,
                // width: "400px",
                // fontSize: "2rem",
                // marginTop: "10px",
                marginLeft: "10px",
            
            }}id="demo-simple-select-standard-label">Choose a programming language...</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={skills}
          onChange={handleChange}
          label="Skills"
          style={{
            color: "white",
            outline: "3px white",
            borderRadius: 5,
            width: "400px",
            fontSize: "2rem",
            marginTop: "10px",
        
        }}
        >
          <MenuItem value={1}>Assembly Language</MenuItem>
          <MenuItem value={2}>C</MenuItem>
          <MenuItem value={3}>C#</MenuItem>
          <MenuItem value={4}>C++</MenuItem>
          <MenuItem value={5}>Go</MenuItem>
          <MenuItem value={6}>Java</MenuItem>
          <MenuItem value={7}>JavaScript</MenuItem>
          <MenuItem value={8}>Kotlin</MenuItem>
          <MenuItem value={9}>MATLAB</MenuItem>
          <MenuItem value={10}>.NET</MenuItem>
          <MenuItem value={11}>NodeJS</MenuItem>
          <MenuItem value={12}>Objective-C</MenuItem>
          <MenuItem value={13}>MATLAB</MenuItem>
          <MenuItem value={14}>Perl</MenuItem>
          <MenuItem value={15}>PHP</MenuItem>
          <MenuItem value={16}>Python</MenuItem>
          <MenuItem value={17}>ReactJS</MenuItem>
          <MenuItem value={18}>React Native</MenuItem>
          <MenuItem value={19}>Ruby</MenuItem>
          <MenuItem value={20}>Scala</MenuItem>
          <MenuItem value={21}>Solidity</MenuItem>
          <MenuItem value={22}>SQL</MenuItem>
          <MenuItem value={23}>Swift</MenuItem>
          <MenuItem value={23}>TypeScript</MenuItem>
        </Select>
        </FormControl>
            </center>

            <br></br>
            <br></br>
            <center>
            <FormLabel htmlFor='for'>What Is the Cost of this Contract (in ETH)?</FormLabel> <br></br>
            <img 
            src={EthereumSVG} 
            alt="ethereum"
            style={{
                height: "60px",
                position: "absolute",
                marginTop: "11px",
                marginLeft: "-25px",
            }}
            >

            </img>
            <FormInput 
                type="number"
                
                value={cost}
                onChange={(event) => setCost(event.currentTarget.value)}
                style={{
                    color: "white",
                    fontSize: "1.6rem",
                    outline: "3px white",
                    boxShadow: '0 0 0 0.2rem rgba(255,255,255,0.6)',
                    borderRadius: 5,
                }}>
                    
            </FormInput>
            
            </center>



            
            <FormButton 
                type='submit'
                // onClick={handleSave}
                isLoading={isUserUpdating}
                >
                    Submit & Sign Contract
            </FormButton>
            {userError && <ErrorBox title="User change has failed" 
            message={userError.message} />}
           
            
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
