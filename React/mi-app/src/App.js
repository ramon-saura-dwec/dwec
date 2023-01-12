import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';

function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
      <div className='contenido'>
        <Home></Home>
      </div>
    </div>
  );
}

export default App;