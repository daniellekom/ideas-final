import { signOut, getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { app } from "./ConnectAuth";

const Navbar = ({ user }) => {
  const auth = getAuth(app);
  const history = useHistory();
  //dont need isWelcomeScreen because in app.js we added navbar in seperate components
  // const [isWelcomeScreen, setIsWelcomeScreen] = useState(false);
  const[isBoardScreen, setIsBoardScreen] = useState(false)

  // useEffect(() => {
  //   if (history.location.pathname === "/Welcome") {
  //     setIsWelcomeScreen(true)
  //   }
  
  // }, [history]);

  useEffect(() => {
    if (history.location.pathname === "/Board")  {
      setIsBoardScreen(true)
    }
  }, [history]);

  const onSignout = () => {
    signOut(auth);
    history.push("/Welcome");
  };

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
       
        {!isBoardScreen && (
          <>
            <a className="boardIcon" href="/Board">
              Board
            </a>
 
          </>
        )}
              <button
                className="logoutbutton"
                onClick={() => history.push("/Welcome")}
              >
                Logout
              </button>

      </div>
    </nav>
  );
};

export default Navbar;
