import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/pages/home/home'
import HomeAd from './components/pages/home/homeAd'
import Home3 from './components/pages/home/home3'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home></Home>
        {/* gap */}
        <HomeAd ></HomeAd>
        <Home3></Home3>
        <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
