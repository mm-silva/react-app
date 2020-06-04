import React from 'react';
import Navbar from './components/navbar';
import Home from './views/home';
import Routes from './routes';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className="container">
        <Navbar/>
	      <Routes/>
      </div>
   </HashRouter>
  );
}

export default App;
