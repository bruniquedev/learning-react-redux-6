import React from 'react';
import Routes from './components/Routes';
import { BrowserRouter } from 'react-router-dom';

function App() {

  //call the routes or links to navigate to here
  return (
    <BrowserRouter>
    <Routes/>
    </BrowserRouter>

  );
}

export default App;
