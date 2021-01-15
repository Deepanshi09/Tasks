import React, {useState} from "react";
let Task1 = () =>
{
    let gtime = new Date();
    gtime = gtime.toLocaleTimeString();
    const [stateff, setStateff] = useState(gtime);

    const UpdateTime = () =>
    {
        gtime = new Date().toLocaleTimeString();
        setStateff(gtime);
    };
    return(
        <React.Fragment>
            <div className="aa">
               <h1>{stateff}</h1>
               <button className="bs" onClick={UpdateTime}>Get Time</button> 
            </div>
            <hr/>
        </React.Fragment>
    );
}
export default Task1;