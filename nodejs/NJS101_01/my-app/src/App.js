
import React from "react";
import logo from './logo.svg';
import './App.css';
import Item from "./MyItem.js";
import Herosec001  from "./HeroSec001_V001000";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Herosec001/>
        <img src={logo} className="App-logo" alt="logo" />
        <Item Name="Martin" />
        <Item Name="Tanja" />
        <Item Name="Victor" />
        <Item Name="Oliver" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
