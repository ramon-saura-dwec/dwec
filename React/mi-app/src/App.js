import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Error from './Error';
import Create from './Create';
import BlogDetail from './Blog-Detail';

function App() {
  return (
    <Router>
      <div className="App">
          <NavBar></NavBar>
        <div className='content'>
          <Switch>
            <Route path='/' exact><Home/></Route>
            <Route path='/create'><Create/></Route>
            <Route path='/detail/:id'><BlogDetail/></Route>
            <Route path='*'><Error/></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;