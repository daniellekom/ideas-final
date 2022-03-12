import {
  signOut,
  getAuth
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { app } from "./ConnectAuth";


const Navbar = ({ user }) => {

  const auth = getAuth(app);
  const history = useHistory();
  const [isWelcomeScreen] = useState(false);

  useEffect(() => {
    if(history.location.pathname === '/Welcome') {
      
    }
  }, [history])

  const onSignout = () => {
    signOut(auth);
    history.push('/Welcome');
  }

  return (
    <nav className="navbar">
      <h2>BABY GENIUS</h2>
      <div className="menu" 
style={{
  color: "white",
  marginLeft:"auto",
  textDecoration: "none",
  padding: "9px",
  borderRadius:"1rem"
  
}}>       

{!isWelcomeScreen &&  (
  <>
    <a href="/Board">Board</a>
    {user 
    ? ""
    // ? <button onClick={() => onSignout()} href="/Welcome">Logout</button> 
    : <button onClick={() => history.push("/Welcome")}>Logout</button>
}
    </>
    )}
</div>
    </nav>
  );
};

export default Navbar;
