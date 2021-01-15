import React from "react";
import User1 from "./User1";

let User=()=>
{
    return(
        <React.Fragment>
            <h1>user component</h1>
            <h3>
                <User1  data={{name:"deepanshi", age:23}}/>
            </h3>
        </React.Fragment>

    );
}
export default User;