import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Board from "./Board";
import Create from "./Create";
import Invite from "./Invite";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content"></div>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
        </Switch>
        <Switch>
          <Route path="/board">
            <Board />
          </Route>
        </Switch>
        <Switch>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
        <Switch>
          <Route path= "/invite">
            <Invite/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;