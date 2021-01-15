import React from "react";
import { Component } from "react";
import Hoc from "./Hoc";

class Deep extends Component
{
state={
    marks:0
}

changeEvent=()=>
{
    this.setState({marks:this.state.marks+1});
}
    render()
    {
    return(
          <React.Fragment>
              <h1 onMouseOver={this.changeEvent}>Deeps's Marks{this.state.marks}</h1>
              <p>{this.props.hocsub}</p>
          </React.Fragment>
    );
    }
}
export default Hoc(Deep);