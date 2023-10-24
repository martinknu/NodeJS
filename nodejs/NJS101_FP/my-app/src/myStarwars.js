import React from "react";

class FilmItemRow extends React.Component {
    render() {
        return(
            <li>
                <a href={this.props.url}> {this.props.url}</a>>
            </li>
        )
    }
}



class StarWars extends React.Component {

    constructor() {
        super()

        this.state = {
            loadedCharacter: false,
            name: null,
            height: null,
            homeworld: null,
            image: null,
            
        }
    }


    getNewCharacter(){
        // console.log("New character")
        const randomNum = Math.ceil(Math.random() * 87)
        const url = `https://akabab.github.io/starwars-api/api/id/${randomNum}.json` // `https://swapi.dev/api/people/${randomNum}/`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loadedCharacter: true,
                    name: data.name,
                    height: data.height, 
                    homeworld: data.homeworld,
                    image: data.image,
                    
                })
                })

    }

render(){

    // const movies = this.state.films.map((url, i) => {
    //     return   <FilmItemRow key={i} url={url} />
    // })
    

    return(
        <div>
            <button type="button" onClick={() => this.getNewCharacter() } className="btn"> Select character</button>

            { this.state.loadedCharacter &&
                <div>
                    <h1>Name: {this.state.name}</h1>
                    <p>Height: {this.state.height}</p>
                    <p><a href={this.state.homeworld}> Homeworld </a></p>
                    <img className="charImage" src={this.state.image} alt="noImage.jpg"/>
                    <ul>
                        {/* {movies} */}
                    </ul>
                </div>

            }


        </div> 

        )
            
    }
}
export default StarWars;