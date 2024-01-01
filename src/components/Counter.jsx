import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  function increment(){
    setCounter(counter+1)
  }

  function decrement(){
    if(counter !==0){
    setCounter(counter-1)
    }
    else{
      alert("You can't decrease below zero")
      setCounter(0)
    }
  }
  function reset(){
    setCounter(0)
  }

  return (
    <div className="text-center m-5">
      <h1>Counter App</h1>
      <h1>{counter}</h1>
      <div className="align-items-center">
        <button onClick={increment} className="btn btn-success  m-2">Increment</button>
        <button onClick={decrement} className="btn btn-danger m-2">decrement</button>
        <button onClick={reset} className="btn btn-dark m-2">reset</button>
      </div>
    </div>
  );
}

export default Counter;
