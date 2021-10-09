import React from 'react';

import Icon1 from '../../assets/images/svg-1.svg';
import Icon2 from '../../assets/images/svg-2.svg';
import Icon3 from '../../assets/images/svg-3.svg';
import { ListingsSearchContainer, ServicesContainer, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ListingsElements'

import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@mui/icons-material/Search';


const useStyles = makeStyles((theme) => ({
    SearchBar: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
  }));


const Services = () => {
const classes = useStyles();

    return (
        <div id="listings">
        <ListingsSearchContainer >

        <div className="SearchBar">
                <Paper component="form" className={classes.SearchBar}>
                    <InputBase
                    className={classes.input}
                    placeholder="Search Listings..."
                    inputProps={{ 'aria-label': 'Search Sounds...' }}
                    />
                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                    </IconButton>
                </Paper>
              </div>

        </ListingsSearchContainer>
        

        <ServicesContainer id="perks">
            
            <ServicesWrapper>
                
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Global Talent Pool</ServicesH2>
                    <ServicesP>Gain access to a global world of verified talent for your app.</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Exclusive Focus Hubs</ServicesH2>
                    <ServicesP>Connect with other developers and entrepreneurs in your niche.</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>24/7 Access & Support</ServicesH2>
                    <ServicesP>Our goal is direct, rapid, and responsive service and support.</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>24/7 Access & Support</ServicesH2>
                    <ServicesP>Our goal is direct, rapid, and responsive service and support.</ServicesP>
                </ServicesCard>

            </ServicesWrapper>

        </ServicesContainer>
        </div>    
    )
}

export default Services
