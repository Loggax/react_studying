import React from 'react';
import Greeting from './components/Gretings';

function HelloWorld() {
  return <h1>Hello, World!</h1>;
}

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <Greeting />
    </div>

  );
}

export default App;
