import React from 'react';
import Bio from './components/Bio/Bio';
import Portfolio from './components/Portfolio/Portfolio';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import './App.scss';




function App() {

  return (
    <div className="App">
      <NavBar />
      <LandingPage />  
      <Bio />
      <Portfolio />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
