import "./App.css";
import { useState } from "react";

function App() {
  const[operation, setOperation] = useState('')
  const handleOperation=(e)=>{
    const value = e.target.innerText
    if (['+', '-', '*', '/'].includes(operation.slice(-1)) && ['+', '-', '*', '/'].includes(value)){
      setOperation(operation.slice(0,-1)+value)
    }else{
      setOperation(operation+value)
    }
  }
  const handleEqualTo=()=>{
    const screen=document.getElementById('screen')
    if (operation === '' || ['+', '-', '*', '/'].includes(operation.slice(-1))) {
      screen.innerText=0
      return
    }
    const value=eval(operation)
    screen.innerText=value
    setOperation(`${value}`)
  }
  const handleAC=()=>{
    setOperation('')
  }
  const handleDel=()=>{
    setOperation(operation.slice(0, -1));
  }
  return (
    <div className="App">
      <div id="screen">{operation === ''? 0 : operation}</div>
      <div className="body">
        <div className="row">
          <button onClick={handleAC}>AC</button>
          <button onClick={handleDel}>DEL</button>
          <button onClick={handleOperation}>/</button>
        </div>
        <div className="row">
          <button onClick={handleOperation}>1</button>
          <button onClick={handleOperation}>2</button>
          <button onClick={handleOperation}>3</button>
          <button onClick={handleOperation}>*</button>
        </div>
        <div className="row">
          <button onClick={handleOperation}>4</button>
          <button onClick={handleOperation}>5</button>
          <button onClick={handleOperation}>6</button>
          <button onClick={handleOperation}>-</button>
        </div>
        <div className="row">
          <button onClick={handleOperation}>7</button>
          <button onClick={handleOperation}>8</button>
          <button onClick={handleOperation}>9</button>
          <button onClick={handleOperation}>+</button>
        </div>
        <div className="row">
          <button onClick={handleOperation}>.</button>
          <button onClick={handleOperation}>0</button>
          <button onClick={handleEqualTo}>=</button>
        </div>
      </div>
    </div>
  );
}
export default App;
