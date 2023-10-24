import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import sorryNoImage from "./Sorry no image V001.000.jpg"


const MovieView = () => {
  const {id} = useParams(); 
  const [movieDetails, setMovieDetails ] = useState({});
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0b7acbc90880b800e4856257e8dabf69&language=en-US`)
    .then(response => response.json())
    .then(data => {
      setMovieDetails(data);
      setIsLoading(false)
    })
  } , [id])

  function renderMovieDetails() {
    if(isLoading){
      return <Hero text="Loading..."/>
    }

    if(movieDetails){
      const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
      const backdropURL = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
      
      function RenderMovieImage() {
        if (movieDetails.poster_path == null) {
          return(
            <img src={sorryNoImage} className="card-img-top" alt="..."/>
          )
        } else {
          return(
            <img src={posterPath} className="card-img-top" alt="..."/>
          )
        }
      }
      
      
      return (
        <>
          <Hero text={movieDetails.original_title} backdrop={backdropURL}/>
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                {/* <img src={posterPath} alt="..." className="img-fluid shadow rounded"/> */}
                <RenderMovieImage/>
              
              </div>
              <div className="col-md-3">
                <h3> {movieDetails.overview}</h3>
              </div>
            </div>
          </div>
        </>
      )
    }
  }



  return renderMovieDetails()
}

export default MovieView;