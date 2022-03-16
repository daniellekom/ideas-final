import { signOut, getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { app } from "./ConnectAuth";
import MailIcon from '@mui/icons-material/Mail';
import * as React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Navbar = ({ shouldHideBoardButton }) => {
  const auth = getAuth(app);
  const history = useHistory();
  const[isBoardScreen, setIsBoardScreen] = useState(false);
  // dont need isWelcomeScreen because in app.js we added navbar in seperate components
  const [isWelcomeScreen, setIsWelcomeScreen] = useState(false);

  useEffect(() => {
    if (history.location.pathname === "/Welcome") {
      setIsWelcomeScreen(true)
    }
  
  }, [history]);

  useEffect(() => {
    if (history.location.pathname === "/Board")  {
      setIsBoardScreen(true)
    }
    else{
      setIsBoardScreen(false)
    }
  }, [history]);

  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };


  return (
    <nav className="navbar">
      <h2 className="glow">Dream Board</h2>
      <div
        className="menu"
        style={{
          color: "white",
          marginLeft: "auto",
          textDecoration: "none",
          padding: "9px",
          borderRadius: "1rem",
        }}
      >
       
        {!shouldHideBoardButton && (
          <>
            <a className="boardIcon" href="/Board">
              Board
            </a>
 
          </>
        )}
              <button
                className="dreamButton"
                onClick={() => history.push("/")}
              >
                Logout
              </button>
              {/* <Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 4,
        },
      }}
    >
      <div>
        <Badge color="secondary" badgeContent={count}>
          <MailIcon />
        </Badge>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
    
    </Box> */}
  

              





      </div>
    </nav>
    
  );
};

export default Navbar;
