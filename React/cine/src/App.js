import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";

function App() {
  return (
    <Router>
    <div className="App">
        <Navbar></Navbar>
        <div className="content">
            <Switch>
                <Route path="/" exact><Home/></Route>
                <Route path="/detail/:id" ><MovieDetail/></Route>
            </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
