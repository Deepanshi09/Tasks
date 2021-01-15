import React from "react";
import { Component } from "react";

class Uncontrolled extends Component
{
    constructor()
    {
        super()
        this.state={
            email:"",
            password:""
        }
    }

    subEvent=(event)=>
    {
        event.preventDefault();
        console.log(this.state);
    }

    changeEvent=(event)=>
    {
        this.setState({email:event.target.value});
        this.setState({password:event.target.value});

    }
    render()
    {
        return(
            <React.Fragment>

                    <div>
                    <input onChange={this.changeEvent} type="email" placeholder="enter email"></input>
                    </div>
                    <div>
                    <input onChange={this.changeEvent} type="password" placeholder="enter password"></input>
                    </div>
                    <button onClick={this.subEvent}>Submit 👍</button>
            </React.Fragment>
        );
    }
}
export default Uncontrolled;