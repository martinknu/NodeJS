import React from "react";

class Item extends React.Component {
    

    constructor(props){
        super(props)
        this.state ={
            clicks: 0,
            totalRemaining: 100
        }
    }


    // Click me event
    clickMe(){
        // console.log("I Clicked: ", this.props.Name)
        
        this.setState({
        clicks: this.state.clicks + 1,
        totalRemaining: this.state.totalRemaining - 1
    })
    }
    
    // Adding on click event to HTML element
    render(){
        return (
            <div>
                <h1 onClick={() => this.clickMe()}> Hello this is {this.props.Name}'s component!!</h1>
                <span> {this.state.clicks}, remaining is {this.state.totalRemaining}</span>
            </div> 
            )
    }
}

export default Item;