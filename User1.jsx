import React from "react";

let User1=(props)=>
{
    return(
         <React.Fragment>
             <h3>Name: {props.data.name}</h3>
             <h3>Age: {props.data.age}</h3>
         </React.Fragment>
    );
}
export default User1;