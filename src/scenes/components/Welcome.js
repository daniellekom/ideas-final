import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";


export default function Login({ setUser, user }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://walky-ideas.uk.r.appspot.com/users/login", {
      method: "POST",
      body: JSON.stringify(),
      headers: {
        Accept: "applcation/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setUser(data.user))
      .catch(alert);
  };

  useEffect(() => {
    const localUser = localStorage.getItem("displayName");
    console.log("localUser from LS", localUser);
    if (localUser) setUser(localUser);
  }, []);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        history.push("/board");
      })
      .catch(alert);
  };
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("displayName", result.user.displayName);
        localStorage.setItem("profilePhoto", result.user.photoURL);
        console.log("this is my result", result.user.displayName);
        history.push("/board");
      })
      .catch(alert);
  };
  console.log("Here is my user from my parent app", user);
  return (
   <>
      <button className="google-signin" onClick={handleGoogleLogin}>
        Sign in with Google
      </button>
    
    </>
  );
}
