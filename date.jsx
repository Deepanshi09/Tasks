import React from "react";
 let App = () =>
 {
     let currdate= new Date(2020, 10, 3, 13);
     currdate=currdate.getHours();
     let greeting="";
     let cssstyle =
     {

     };
     if (currdate>=1 && currdate<12)
     {
         greeting="Good Morning";
         cssstyle.color="Green";
     }
     else if (currdate>=12 && currdate<=17)
     {
        greeting="Good Afternoon";
        cssstyle.color="yellow";
     }
     else
     {
         greeting="Good Night";
         cssstyle.color="yellow";
     }
     return(
         <React.Fragment>
             <div>
     <h1> Hello Deepanshi!! <span style={cssstyle}> {greeting} </span> </h1>
             </div>
         </React.Fragment>

     );
 }
 export default App;