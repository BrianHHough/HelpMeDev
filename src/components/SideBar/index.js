import React from 'react'
import {SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink, SideBtnWrap, SideBarRoute } from './SideBarElements'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    largeIcon: {
      '& svg': {
        fontSize: 30
      }
    },
   
  }));

const SideBar = ({ isOpen, toggle }) => {
    const classes = useStyles();
    
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon 
            onClick={toggle}
            className={classes.largeIcon}
            >
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="about" onClick={toggle}>About</SideBarLink>
                    <SideBarLink to="listings" onClick={toggle}>Listings</SideBarLink>
                    <SideBarLink to="start" onClick={toggle}>Get Started</SideBarLink>
                </SideBarMenu>
                <SideBtnWrap>
                    <SideBarRoute to='/signin'>
                        Log In
                    </SideBarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
