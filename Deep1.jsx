import React from "react";
import { Component } from "react";
class Deep1 extends Component
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
              <h1 onMouseOver={this.changeEvent}>Deep1's Marks{this.state.marks}</h1>
          </React.Fragment>
    );
    }
}
export default Deep1;