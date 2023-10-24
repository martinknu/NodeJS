
import './App.css';
import Navbar from "./Components/Navbar.js";
import Home from "./Components/Home.js";
import AboutView from "./Components/AboutView.js";
import {Routes, Route} from 'react-router-dom';
import ButtonStart from "./Components/Button001"
import Searchview from './Components/Searchview';
import MovieView from './Components/MovieView';
import FofView from "./Components/FofView.js";
import { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";


// switch(case){
// case "1":
//   do something 
//   break;
//   case "default":
//     do something 
//     break;
// }


//API key : 0b7acbc90880b800e4856257e8dabf69
//https://api.themoviedb.org/3/search/movie?api_key=0b7acbc90880b800e4856257e8dabf69&query=Jack+Reacher



function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText , setSearchText] = useState("");
  const [startSearch , setStartSearch] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if(searchText){
      console.log(searchText, "Is the search text")
    }
  }  , [searchText])
  

  useEffect(() => {
    if(searchText){
      navigate("/search");
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=0b7acbc90880b800e4856257e8dabf69&query=${searchText}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setSearchResults(data.results);
      })
    }
    setStartSearch(false)
  }  , [startSearch])


  return (

    <div className="App">
      <Navbar searchText={searchText} setSearchText={setSearchText} setStartSearch={setStartSearch} />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutView/>} />
        <Route path="/search" element={<Searchview keyword={searchText} searchResults={searchResults} /> } />
        <Route path="/movies/:id" element={<MovieView/>} />
        <Route path="*" element={<FofView/>} /> 
      </Routes>
      <ButtonStart/>
    </div>

  );
}

export default App;
