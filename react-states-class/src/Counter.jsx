import { useState } from "react"


function init(){
    console.log("init function called");
    return Math.random();
}

export default function Counter() {
   
   let [count, setCount] = useState(init);  //initializing state variable count with 0 
    console.log("Counter component rendered");
   let increaseCount = () => {
         setCount((currCount)=>{
        return currCount + 1;
         });
        

        // setCount(24);
   }
    return (
        <div>
            <h3>count : {count} </h3>
            <button onClick={increaseCount} >Increase count</button>
        </div>
    )
}