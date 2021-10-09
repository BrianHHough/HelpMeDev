import React, {useState, useEffect} from 'react';
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavBarElements';
import '../../App.css';
import {animateScroll as scroll } from 'react-scroll'
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { useMoralis } from "react-moralis";

// edit hamburger menu icon
const useStyles = makeStyles((theme) => ({
    largeIcon: {
      '& svg': {
        fontSize: 50,
      }
    },
   
  }));

const NavBarLoggedIn = ({ toggle }) => { 
    const classes = useStyles();
    const [scrollNav, setScrollNav] = useState(false);

    const { isAuthenticated } = useMoralis();
    const { logout, isAuthenticating } = useMoralis();

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    if (!isAuthenticated) {
        return (
            <div>
                Not logged in
            </div>
        )
    }

    if (isAuthenticated) {
    return (
        <div>
            <>
                <Nav scrollNav={scrollNav}>
                    <NavBarContainer>

                        <NavLogo 
                            to='/' 
                            onClick={toggleHome}
                            className="NavLogoGradient"
                            >
                            <h2>HelpMeDev</h2>
                        </NavLogo>

                        <MobileIcon 
                            onClick={toggle}
                            className={classes.largeIcon}
                            >
                            <MenuIcon />
                        </MobileIcon>

                        <NavMenu>
                            <NavItem>
                                <NavLinks 
                                    to="about"
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    exact='true' 
                                    offset={-80}
                                    >   
                                    About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                to="listings"
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                exact='true' 
                                offset={-80}
                                >Listings</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                to="perks"
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                exact='true' 
                                offset={-80}
                                >Listings</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                to="start"
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                exact='true' 
                                offset={-80}
                                >Get Started</NavLinks>
                            </NavItem>
                        </NavMenu>

                        <NavBtn>
                            <NavBtnLink 
                            onClick={() => logout()}
                            disabled={isAuthenticating}
                            >
                            Log Out
                            </NavBtnLink>
                        </NavBtn> 

                    </NavBarContainer>

                </Nav>
            </>
        </div>
        )
    }

}

export default NavBarLoggedIn
