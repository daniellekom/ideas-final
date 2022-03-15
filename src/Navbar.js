import { signOut, getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { app } from "./ConnectAuth";

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

 

  return (
    <nav className="navbar">
      <h2>Dream Board</h2>
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
                className="logoutbutton"
                onClick={() => history.push("/")}
              >
                Logout
              </button>

      </div>
    </nav>
  );
};

export default Navbar;
