import { Component } from "react";
 

class Yamaha extends Component{
    constructor(){
        super()
        this.state={
            make: "Yamaha",
            model: "R1z",
            color: "black"
        }
    }
    
    changeColor(){
        this.setState({
            color:"Orange"
        })
    }
    render(){
        return(
            <div>
                <h2>Bike Details</h2>
                <h3>{this.state.make}</h3>
                <h3>{this.state.model}</h3>
                <h3>{this.state.color}</h3>
                <button onClick={()=>this.changeColor()}>Change Color</button>
            </div>
            
        )
    }
}
export default Yamaha;