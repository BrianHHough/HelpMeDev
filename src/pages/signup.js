import React from 'react'
import NavBarSignIn from '../components/NavBar/indexSignIn'
import '../App.css'
import SignUp from '../components/SignUp'
import ScrollToTop from '../components/ScrollToTop'

const SignInPage = () => {
    return (
        <>
        <ScrollToTop />
        <NavBarSignIn />
           <SignUp />
        </>
    )
}

export default SignInPage