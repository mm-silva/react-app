import React from 'react';
import Navbar from './components/navbar';
import Home from './views/home';
import Routes from './routes';

function App() {
  return (
   <div className="container">
     <Navbar/>
	<Routes/>
   </div>
  );
}

export default App;
