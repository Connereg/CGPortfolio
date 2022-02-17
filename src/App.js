import './App.css';
import { useState } from 'react';
import Body from './components/Body';
import NavBar from './components/NavBar';
import Canvas from './components/Canvas';
import { Outlet, Link } from "react-router-dom";



function App() {
  const [appFocus, setAppFocus] = useState("home")

  return (
    <div className="App">
      <NavBar appFocus={appFocus} setAppFocus={setAppFocus}/>
      <Canvas />
      {appFocus === "home" ?  
        <Body /> : <Outlet />}
    </div>
  );
}

export default App;
