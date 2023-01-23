import React from 'react';
import './App.css';

function App() {
  const titulo = "Bienvenidos al Blog de DWEC";
  let meGusta = 1029;
  const linkG = 'https://www.google.com'
  return (
    <div className="App">
      <div className='contenido'>
        <h1>{titulo}</h1>
        <p>{'Me gusta: ' + meGusta}</p>
        <a href={linkG}>Google</a>
      </div>
    </div>
  );
}

export default App;
