import React from "react";
import { Component } from "react";
import F2 from "./f2";

export default class M extends Component
{
   constructor(props)
   {
       super(props);
       console.log("constructor call");
       console.log(props);
       this.state=
       {
           product_id:"",
           marks:0,
           name:"deepanshi",
           qty:0,
           rollno:this.props.rollno   
       }
      
   }

   componentDidMount()
   {
       console.log("component did Mount call");
   }

   componentWillMount()
   {
       console.log("component will mount call");
   }

   static getDerivedStateFromProps(props, state)
   {
       console.log("gDSFP call");
       console.log(props, state);
       if(props.marks1==state.marks)
       {
           return{marks:props.marks};
       }
       return null;
   }

   componentDidUpdate(prevstate, prevprops)
   {
       console.log("update call");
   }

   componentWillUnmount()
   {
       console.log("unmount call");
   }

   updtqty = () =>
   {
        this.setState({qty:this.state.qty+1})
   }

   mrks=(pid)=>
   {
      this.setState({product_id:pid, marks:this.state.marks+1})
   }


   render()
   {
        console.log("render call");
        return(
           <React.Fragment>
              <h1>Hello {this.state.name}</h1>
              <h1>Your Roll no is: {this.state.rollno}</h1>
              <h1>Cart:{this.state.qty} (by setState)</h1>
              <button onClick={this.updtqty}>Add to cart</button>
              <h1>Marks:{this.state.marks} (by gdsfp)</h1>
              <button onClick={this.mrks}>Update</button>
              <F2 pid={this.state.pid} marks={this.state.marks}/>
           </React.Fragment>
       );
   }
}