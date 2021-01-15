import React from "react";
let Task = () =>
{
   
    let currdate = new Date();
    let currtym = new Date();
    currdate = currdate.toLocaleDateString();
    currtym = currtym.toLocaleTimeString();
    return(
        <React.Fragment>
            <div className="abc">
        
        <div>
         <strong>
    <h1 className="ff"><span>Today's Date is :</span> {currdate}</h1>
    <h1 className="ff"><span>Current Time is : </span> {currtym}</h1></strong>
    </div>
    </div>
    
        </React.Fragment>

    );
}
export default Task;