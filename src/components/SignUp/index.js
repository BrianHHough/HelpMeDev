import React, { useState } from 'react'

import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormH1v2, FormLabel, FormInput, FormButton, FormButtonMetaMask, Text, HeroH1Gradient} from './SignUpElements'
// import { useHistory } from "react-router-dom"
import { Redirect, useLocation } from "react-router-dom"
import { useMoralis } from "react-moralis";

import Alert from '@mui/material/Alert';

const SignUp = () => {
    // const { authenticate, isAuthenticated, user } = useMoralis();
    // const { logout, isAuthenticating } = useMoralis();
    const { authenticate, isAuthenticated } = useMoralis();
    const { isAuthenticating } = useMoralis();
    const { authError } = useMoralis();

    const {signup} = useMoralis();
    // const history = useHistory();
    const {location} = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const handleRouteHomePage = async() => {
    //     if (!isAuthenticated) {
    //         return (
    //     history.push("/")
    //     )
    //     }
    // }

    if (!isAuthenticated) {
    return (
        <>
        
        <Container>
            <FormWrap>
                <Icon to="/">HelpMeDev</Icon>
                <FormContent>
                    <Form action="#">
                    <HeroH1Gradient className="H1Gradient">HelpMeDev</HeroH1Gradient>
                        <FormH1>Sign up via web3:</FormH1>
                        
                        <FormButtonMetaMask 
                        
                        onClick={() => authenticate()}
                        isLoading={isAuthenticating}
                        >Sign up with MetaMask
                        </FormButtonMetaMask>

                        
                        <FormH1v2>Or use your favorite email:</FormH1v2>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput 
                                type='email' 
                                placeholder="Write your email address"
                                value={email}
                                onChange={(event) => setEmail(event.currentTarget.value)} />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput 
                                type='password' 
                                placeholder="Choose a secure password"
                                value={password}
                                onChange={(event) => setPassword(event.currentTarget.value)}
                            />
                       <FormButton 
                        type='submit'
                        onClick={() => signup(email, password, email)}
                       >Sign Up with Email</FormButton>
                        <div style={{marginTop: 15}}>
                            {authError && (
                                <Alert variant="outlined" severity="error">
                                    <strong
                                    style={{color: "#FF7373"}}
                                    >{authError.message}</strong>
                                </Alert>
                            
                            )}  
                        </div>
                       <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        </>
    )
    }
    if (isAuthenticated) {
        
    return (
        <Redirect
        to={{
          pathname: "/",
          state: { from: location }
        }}
      />
        // history.push("/")
        // <div>
        //   <br></br>
        //   <br></br>
        //   <br></br>
        //   <br></br>
        //   <br></br>
        //   <br></br>
        //   <h1>Welcome {user.get("username")}</h1>
        //   <FormButtonMetaMask 
        //     type='submit'
        //     onClick={() => logout()}
        //     disabled={isAuthenticating}
        //     >Sign Out</FormButtonMetaMask>
        // </div>
      );
    }

}

export default SignUp;
