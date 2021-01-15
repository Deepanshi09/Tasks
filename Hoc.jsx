import React from "react";
import { Component } from "react";

let Hoc = (stud)=>
{
    class M extends Component
    {
        render()
        {
            return(
                <React.Fragment>
                    <M hocsub="React"></M>
                </React.Fragment>
            );
        }
    }
    return M;
}
export default Hoc;