
import React from "react";
import {Component} from "react";


export default class M extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            name:this.props.name
        }
    }
// state={
//             name:this.props.name,
//             roll:24
//       }
    render()
    {
        return(
            <React.Fragment>
                <h1>{this.state.name}</h1>
                {this.props.children}
                <h1>{this.state.roll}</h1>
            </React.Fragment>
        );
    }
}