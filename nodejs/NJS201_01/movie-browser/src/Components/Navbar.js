import {useNavigate, Link} from "react-router-dom";

// Functional based components
const Navbar = ({searchText, setSearchText, setStartSearch}) => {

  const navigate = useNavigate();

  const updateSearchText = (e) => {
    // console.log(e.target.value)
    // navigate("/search");
    setSearchText(e.target.value)
  }

  const updateStartSearch = () => {
    console.log(`Start search`)
    setStartSearch(true)
  }

  const onKeyUp = (e) => {

    console.log(`Charcode ${e.key}`)
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log(`Start search by enter`)
      setStartSearch(true)
    }
}
  
  // const timer = setTimeout( () => {
  //   const myTime = Date();
  //   console.log(`The time is:  ${myTime}`);
  // }, 2000);
  // clearTimeout(timer);


    return (
      <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" title="Home">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"> the button</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="gosomewhere.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="gosomewhere.html">Action</Link></li>
                <li><Link className="dropdown-item" to="gosomewhere.html">Another action</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="gosomewhere.html">Something else here</Link></li>
              </ul>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link disabled" to="gosomewhere.html" tabIndex="-1" aria-disabled="false">Disabled</Link>
            </li>

          </ul>
          <form className="d-flex">
            <input className="form-control me-2" 
            type="text" //search
            placeholder="Search" 
            aria-label="Search" 
            value={searchText}
            onKeyDown={onKeyUp}
            onChange={updateSearchText} 
            />
            <button className="btn btn-outline-success" type="button" onClick={updateStartSearch}>Search</button>
          </form>
        </div>
      </div>
    </nav>
    </div>
    )
    }

    export default Navbar;