import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Jornada from "./components/Jornada";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/" exact><Home></Home></Route>
          <Route path="/jornada" exact><Jornada></Jornada></Route>
        </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
