import React from 'react'

import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, FormButtonMetaMask, Text, HeroH1Gradient} from './SignInElements'

import { useMoralis } from "react-moralis";

const SignIn = () => {

    const { authenticate, isAuthenticated, user } = useMoralis();

    const { logout, isAuthenticating } = useMoralis();

    if (!isAuthenticated) {
    return (
        <Container>
            <FormWrap>
                <Icon to="/">HelpMeDev</Icon>
                <FormContent>
                    <Form action="#">
                    <HeroH1Gradient className="H1Gradient">HelpMeDev</HeroH1Gradient>
                        <FormH1>Sign into your account</FormH1>
                        <FormButtonMetaMask 
                        type='submit'
                        onClick={() => authenticate()}
                        >Login with MetaMask</FormButtonMetaMask>
                        <br></br>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                       <FormButton type='submit'>Continue</FormButton>
                       <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
    }
    return (
        <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1>Welcome {user.get("username")}</h1>
          <FormButtonMetaMask 
            type='submit'
            onClick={() => logout()}
            disabled={isAuthenticating}
            >Sign Out</FormButtonMetaMask>
        </div>
      );

}

export default SignIn;
