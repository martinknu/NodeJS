import logo from './logo.svg';
import './App.css';
import "./myStarwars";
import StarWars from './myStarwars';

function App() {
  return (

    <div className="App">
      <header className="app-header">
        <h1>
          This is star wars
        </h1>
        <StarWars/>
        {/* <StarWars/> */}

      </header>
    </div>
  );
}

export default App;
