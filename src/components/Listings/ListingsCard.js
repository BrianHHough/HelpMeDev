import React, { useState } from 'react';

// import Icon1 from '../../assets/images/svg-1.svg';
// import Icon2 from '../../assets/images/svg-2.svg';
// import Icon3 from '../../assets/images/svg-3.svg';
import { ServicesIcon, ServicesH2, ServicesP, CostP, AddressP,  HelpThisDevBtn, ProgrammingLanguageIcon, ProgrammingLanguageIconCon } from './ListingsElements'

// import Paper from '@material-ui/core/Paper';
// import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
// import InputBase from '@material-ui/core/InputBase';
// import SearchIcon from '@mui/icons-material/Search';
import EthereumSVG from "../../assets/images/ethereum.svg";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import PL__CPlusPlus from "../../assets/programming_logos/C++_Logo.png";
import PL__React from "../../assets/programming_logos/React-logo.png";
import PL__JavaScript from "../../assets/programming_logos/JavaScript-logo.png";
// import PL__Solidity from "../../assets/programming_logos/Solidity_logo.png";
// import PL__Java from "../../assets/programming_logos/Java-logo.png";

import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import { useMoralis } from "react-moralis";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 7px #44b700`,
      '&::after': {
        position: 'absolute',
        top: -6,
        left: -6,
        bottom: 0,
        width: '140%',
        height: '140%',
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

  // const useStyles = makeStyles((theme) => ({
  //   SearchBar: {
  //     padding: '2px 4px',
  //     display: 'flex',
  //     alignItems: 'center',
  //     width: 400,
  //   },
  //   input: {
  //     marginLeft: theme.spacing(1),
  //     flex: 1,
  //   },
  //   iconButton: {
  //     padding: 10,
  //   },
  // }));


// title, description, ethAddress, price, needs
const ListingsCard = () => {
    // const classes = useStyles();

    const { user } = useMoralis();
    const [username] = useState(user.attributes.username);
    // const [ethaddress, setEthaddress] = useState(user.attributes.username);

    return (
        <ListingsCard>
        <ServicesIcon>
            <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
            >
            <Avatar
                sx={{ 
                    bgcolor: "#43A1FF",
                    width: "60px",
                    height: "60px",
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
        </ServicesIcon>
        <ServicesH2>Front-end dev for a Shopify marketplace</ServicesH2>
        <ServicesP>Shopify site making $1k/mon, but I need to make the UX better.</ServicesP>
        <AddressP>
            <b style={{
                    fontSize: "1.4rem",
                    
                }}>Submitted By:
            </b> 

            <b style={{
                    fontSize: "1.5rem",
                    marginLeft: "5px",
                    fontWeight: 200,
                }}>{user.attributes.ethAddress.substring(0, 4) + "..." + user.attributes.ethAddress.substring(user.attributes.ethAddress.length-4)}</b>
            
        </AddressP>
        <CostP>
            <b style={{
                    fontSize: "1.4rem",
                    
                }}>Price:</b> 
                <img 
                src={EthereumSVG} alt="Ethereum"
                style={{
                    height: "25px",
                    marginLeft: "10px"
                }}
                />
            <b style={{
                    fontSize: "2rem",
                    marginLeft: "5px",
                    fontWeight: 200,
                }}>0.6</b>
        </CostP>

        
        <CostP>
            <b style={{
                    fontSize: "1.4rem",
                    
                }}>Needs:
            </b> 
            <ProgrammingLanguageIconCon>
                <ProgrammingLanguageIcon src={PL__React} alt="React" />
                <ProgrammingLanguageIcon src={PL__JavaScript} alt="JavaScript" />
            </ProgrammingLanguageIconCon>
        </CostP>

        
        <HelpThisDevBtn 
            to="#"
            smooth={true} 
            duration={500} 
            spy={true} 
            exact='true' 
            >
            Help This Dev
        </HelpThisDevBtn>

    </ListingsCard>
    )
}

export default ListingsCard