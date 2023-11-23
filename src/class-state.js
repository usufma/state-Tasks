import { Component } from "react"

class Incdec extends Component{
    constructor(){
        super()
        this.state={
            message:"Doctor in",
            count:0,
        }
    }
    status(){
                this.setState({
                    message:"Doctor Out"
                })
            }
    incr(){
        this.setState({
            count:this.state.count+1
        })
    }
    decr(){
            this.setState({
                count:this.state.count>0?this.state.count-1:0
            })
        }

   render(){
    return(
        <div>
            <div>
            <h2>STatus</h2>
            <h3>{this.state.message}</h3>
            <button onClick={()=>this.status()}>status</button>
            </div>
            <div>
            <h2>Increment & Decrement</h2>
            <h3>{this.state.count}</h3>
            <button onClick={()=>this.incr()}>Incre</button>
            <button onClick={()=>this.decr()}>Decre</button>
            </div>
        </div>
        
        
    )
   }
}
export default Incdec;