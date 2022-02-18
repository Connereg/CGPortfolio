import './App.css';
import Body from './components/Body/Body';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';




function App() {

  return (
    <div className="App">
      <NavBar />
      <LandingPage />  
      <Body />
    </div>
  );
}

export default App;
