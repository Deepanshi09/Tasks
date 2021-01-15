import React, {useState} from "react";

let Inc = () =>
{

    const [state, setstate] = useState(0);
    let incEvent = () =>
    {
        setstate(state + 1);
    }

    let decEvent = () =>
    {
        if (state>0)
        {
            setstate(state - 1);
        }
        else
        {
            setstate(0);
            alert("Sorry, 0 Value reached");
        }    
    }
    return(
        <React.Fragment>
            <div className="main">
                <div className="head">
    <h1>{state}</h1>
    </div>
    <div className="btn">
    <button onClick={incEvent}>Increase</button> 
    <button onClick={decEvent} >Decrease</button>
    </div>
            </div>
        </React.Fragment>
    );
}
export default Inc;