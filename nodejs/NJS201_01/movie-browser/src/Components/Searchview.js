
import Hero from "./Hero";
import {Link} from "react-router-dom"
import sorryNoImage from "./Sorry no image V001.000.jpg"

const MovieCard = ({movie}) => {
  const posterURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const detailURL = `/movies/${movie.id}`;
  const movieOriginalTitle = `${movie.original_title}`;
  const movieOverview = `${movie.overview}`;
  const movieOverviewFirst32 = movieOverview.slice(0,128) + "..."

  
  function RenderMovieCard() {
    if (movie.poster_path == null) {
      return(
        <img src={sorryNoImage} className="card-img-top" alt={movieOriginalTitle}/>
      )
    } else {
      return(
        <img src={posterURL} className="card-img-top" alt={movieOriginalTitle}/>
      )
    }
  }


  return (
  <div className="col-lg-3 col-md-3 col-2">
    <div className="card" >
      <RenderMovieCard/>
      <div className="card-body">
        <h5 className="card-title">{movieOriginalTitle}</h5>
        <p className="card-text">{movieOverviewFirst32}</p>
        <Link to={detailURL} className="btn btn-primary">Show details</Link>
      </div>
    </div>
  </div>
)
}


const Searchview = ({keyword, searchResults }) => {
    
  const title = `You are searching for: ${keyword}`
  const resultHTML = searchResults.map((obj , i) => { return <MovieCard movie={obj} key={i}/> })

  console.log(searchResults[0])
  if (searchResults[0] == null) {
    return(<Hero text={`Sorry no results for:${keyword}`}/>)
  
  } else {

    return(
      <>
        <Hero text={title}/>
        {resultHTML && 
          <div className="container">
            <div className="row">
              {resultHTML}
            </div>
          </div>
        }
      </>
    )
  }
  // console.log(searchResults, "are the search results");

}

export default Searchview;