import './App.css';
import { useState } from 'react';
import Body from './components/Body/Body';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';




function App() {
  const [appFocus, setAppFocus] = useState("home")

  return (
    <div className="App">
      <NavBar setAppFocus={setAppFocus}/>
      <LandingPage setAppFocus={setAppFocus}/>  
        <Body setAppFocus={setAppFocus} />
    </div>
  );
}

export default App;
