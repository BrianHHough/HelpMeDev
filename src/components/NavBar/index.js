import React from 'react';
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavBarElements';
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
                                <NavLinks to="about">About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="listings">Listings</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="start">Get Started</NavLinks>
                            </NavItem>
                        </NavMenu>

                        <NavBtn>
                            <NavBtnLink to="/signin">
                            Log In
                            </NavBtnLink>
                        </NavBtn>

                    </NavBarContainer>

                </Nav>
            </>
        </div>
    )
}

export default NavBar
