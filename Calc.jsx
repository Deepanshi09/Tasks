import React from "react";

let add = (a,b) =>
{
      let sum=a+b;
      return sum;
}
let sub = (a,b) =>
{
     let substract=a-b;
     return substract;
}
let mul = (a,b) =>
{
    let multiply=a*b;
    return multiply;
}
let div =(a,b) =>
{
    let divi = a/b;
    return divi;
}
let mod = (a,b) =>
{
    let modulus=a%b;
    return modulus;
}
let Cal = () =>
{
    return(
        <React.Fragment>
            <div className="listyle">

            <h1>React Calculator</h1>
                 <ul>
    <li>The Sum of two Numbers is:{add(4,2)}</li>
                     <li>The Substraction of two Numbers is:{sub(6,4)}</li>
                     <li>The Multiplication of two Numbers is:{mul(3,5)}</li>
                     <li>The Division  of two Numbers is:{div(100,5)}</li>
                     <li>The Modulus of two Numbers is:{mod(20,2)}</li>
                 </ul>
            </div>
        </React.Fragment>
    );
}
export default Cal;