import React from "react";
import heroImage from "./heroImage.jpg";


class Herosec001 extends React.Component {
    render(){
        return (
            

           <>
            <h1> 
                "Hello this is my hero section!!" 
            </h1>
            <div>
                <img src={heroImage} className="heroImage" alt="HeroImage.jpg" />
            </div>
            </> 
        )
    }
}

export default Herosec001;