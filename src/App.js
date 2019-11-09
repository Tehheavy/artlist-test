import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/pages/home/home'
import HomeAd from './components/pages/home/homeAd'
import Home3 from './components/pages/home/home3'
import Footer from './components/footer'
import Window from './components/window'
function App() {
  const [isWindowOpen, setWindowOpen] = useState(false);
  let className = isWindowOpen ? "App Blur on" : "App Blur off"
  const [isBlur,setBlur] = useState("App Blur off")
  return (
    <div className="App">
      <div className={className}>
        <Home></Home>
        {/* gap */}
        <HomeAd ></HomeAd>
        <Home3  setBlur={setBlur} setWindowOpen={setWindowOpen}></Home3>
        <Footer></Footer>
      </div>
        <Window sidebarState={{ isWindowOpen, setWindowOpen }} windowState={setBlur}></Window>
    </div>
  );
}

export default App;
