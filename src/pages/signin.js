import React from 'react'
import NavBarSignIn from '../components/NavBar/indexSignIn'
import '../App.css'
import SignIn from '../components/SignIn'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/Footer'

const SignInPage = () => {
    return (
        <>
        <ScrollToTop />
        <NavBarSignIn />
        <SignIn />
        <Footer />
        </>
    )
}

export default SignInPage