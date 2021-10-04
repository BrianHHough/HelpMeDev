import React from 'react';
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavBarElementsSignIn';
import '../../App.css';

import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    largeIcon: {
      '& svg': {
        fontSize: 30
      }
    },
   
  }));

const NavBar = ({ toggle }) => {
    const classes = useStyles();

    return (
        <div>
            <>
                <Nav>
                    <NavBarContainer>

                        <NavLogo to='/' className="NavLogoGradient">
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
                                <NavLinks to="/">About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/">Listings</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/">Member Perks</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/">Get Started</NavLinks>
                            </NavItem>
                        </NavMenu>

                        <NavBtn>
                            <NavBtnLink to="/signin">
                            Sign Up
                            </NavBtnLink>
                        </NavBtn>

                    </NavBarContainer>

                </Nav>
            </>
        </div>
    )
}

export default NavBar
