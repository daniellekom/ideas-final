import Navbar from "./Navbar";

import Board from "./scenes/Board";
import Create from "./scenes/Create";
import Invite from "./scenes/Invite";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Login from './scenes/components/Login'

function App() {
  const[user,setUser]= useState()

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content"></div>
        <Switch>
          <Route path="/welcome">
            <Login user={user} setUser={setUser} />
          </Route>
        </Switch>
        <Switch>
          <Route path="/board" >
            <Board />
          </Route>
        </Switch>
        <Switch>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
        <Switch>
          <Route path= "/invite/:id">
            <Invite/>
          </Route>
        </Switch>
        
       
      </div>
    </Router>
  );
}

export default App;