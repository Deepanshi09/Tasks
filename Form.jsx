import React from "react";
import { Component } from "react";

class Controlled extends Component
{
    constructor()
    {
        super()
        // creation of ref
        this.refname=React.createRef();
        this.refemail=React.createRef();
        
    }

    subEvent=(event)=>
    {
       event.preventDefault();
       console.log(this.refname.current.value, this.refemail.current.focus);
       

    }
    render()
    {
    return(
        <React.Fragment>
            <form action="backend.php" onSubmit={this.subEvent}>
            <label for="usr">Username</label>
           <div>
             <input type="text" placeholder="Enter Username" name="my_name" id="usr" ref={this.refname}></input>
           </div>

           <label for="eml">Email</label>
           <div>
             <input type="email" placeholder="Enter Email" name="my_name" id="eml" ref={this.refemail} ></input>
           </div>
             <div>
           <button>Submit 👍 </button>
           </div>
           </form>

        </React.Fragment>
    );
    }
}
export default Controlled;