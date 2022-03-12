import Navbar from "./Navbar";

import Board from "./scenes/Board";
import Create from "./scenes/Create";
import Invite from "./scenes/Invite";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Login from './scenes/components/Welcome'
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const[user,setUser]= useState();
  const auth = getAuth();

  onAuthStateChanged(auth, (u) => {
    console.log(u)
    setUser(u);
  })

  return (
    //putting navbar right under app will display on every screen
    <Router>
      <div className="App">   
        {/* <Navbar user={user}/> */}
        <div className="content"></div>
        <Switch>
          <Route path="/welcome">
            <Login user={user} setUser={setUser} />
          </Route>
        </Switch>
        <Switch>
          <Route path="/board" >
            <Navbar/>
            <Board />
          </Route>
        </Switch>
        <Switch>
          <Route path="/create">
            <Navbar/>
            <Create user={user} />
          </Route>
        </Switch>
        <Switch>
          <Route path= "/invite/:id">
            <Navbar/>
            <Invite/>
          </Route>
        </Switch>
        
       
      </div>
    </Router>
  );
}

export default App;