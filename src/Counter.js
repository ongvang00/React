//In Counter.js, import the necessary dependencies:
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'Counter' in the App.js
import { useState } from "react";

//Create a functional component called Counter. 
//Export the Counter component.
export default function Counter() {
//, use the useState hook to create a state variable called count with an initial value of 0 and a function called setCount to update the state.
    const [count, setCount] = useState(0);
//Implement two functions called increment and decrement inside the Counter component.
   const increment =  () => {
        setCount(count + 1)
    }
    const decrement =  () => {
        setCount(count - 1)
    }
//In the Counter component's JSX, display the count value and create two buttons for incrementing and decrementing the counter.    
    return (
        <div>
        <p>{count}</p>
        <div>
        <button onClick={increment} className ="incrementBtn">Increment</button>
        <button onClick={decrement} className ="decrementBtn">decrement</button>
        </div>
        </div>
    )
}


