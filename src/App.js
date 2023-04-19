import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [value, seValue] = useState("");
  function onChange(event)
  {
    const target = event.target;
    const targetvalue = target.value;
     if(targetvalue ==="clear"){
      seValue("")
     }
     else if(targetvalue === "Backspace")
     {
      seValue(value.slice(0, -1))
     }
    console.log(value)
  }
  function handleKeyDown(event)
  {
    const key = event.key;
    if(event.keyCode >= 48 && event.keyCode <= 57)
    {
      seValue(value + `${key}`)
      console.log(`${key}`)
    }
    else if(event.keyCode === 8)
    {
     seValue(value.slice(0, -1))
    }
    else{
      alert("Only number are allowed")
    }
  }
  function equal(){
    try{
      if(value === ""){
        alert("Input box is empty")
      }
      else{
        seValue(eval(value))
      }
      
    }
    catch{
      alert("Octal literals are not allowed")
    }
    
  }
 
  return (
    <div className="container-fluid firstContainer">
      <p id="description">Basic calculator</p>
      <div className="container calwin">
        <div className="row inputdiv ">
          <div className="col-12">
            <input className="inputbox " id="result"  value={value} onKeyDown={(e) => handleKeyDown(e)}/>
          </div>
        </div>
        <div className="row buttondiv">
          <div className="col-3">
            <button className="btn c"  id="clear" value="clear" onClick={onChange}>C</button>
          </div>
          <div className="col-3">
            <button className="btn"  id="Backspace" value="Backspace" onClick={onChange}><i className="fa-solid fa-arrow-left fa-sm"></i></button>
          </div>
          <div className="col-3">
            <button className="btn"  id="dot" value="." onClick={() =>seValue(value + ".")}>.</button>
          </div>
          <div className="col-3">
            <button className="btn operators"  id="multiply" value="*" onClick={() =>seValue(value + "*")}>X</button>
          </div>
        </div>
        <div className="row buttondiv">
          <div className="col-3">
            <button className="btn"   id="7" value="7" onClick={() =>seValue(value + "7")}>7</button>
          </div>
          <div className="col-3">
            <button className="btn"   id="8" value="8" onClick={() =>seValue(value + "8")}>8</button>
          </div>
          <div className="col-3">
            <button className="btn"  id="9" value="9"  onClick={() =>seValue(value + "9")}>9</button>
          </div>
          <div className="col-3">
            <button className="btn operators"  id="divide" value="/" onClick={() =>seValue(value + "/")}>/</button>
          </div>
        </div>
        <div className="row buttondiv">
          <div className="col-3">
            <button className="btn"  id="4" value="4" onClick={() =>seValue(value + "4")}>4</button>
          </div>
          <div className="col-3">
            <button className="btn"  id="5" value="5" onClick={() =>seValue(value + "5")}>5</button>
          </div>
          <div className="col-3">
            <button className="btn"  id="6" value="6" onClick={() =>seValue(value + "6")}>6</button>
          </div>
          <div className="col-3">
            <button className="btn operators"  id="subtract" value="-" onClick={() =>seValue(value + "-")}>-</button>
          </div>
        </div>
        <div className="row buttondiv">
          <div className="col-3">
            <button className="btn"  value="1" id="1" onClick={() =>seValue(value + "1")}>1</button>
          </div>
          <div className="col-3">
            <button className="btn" value="2"  id="2"  onClick={() =>seValue(value + "2")}>2</button>
          </div>
          <div className="col-3">
            <button className="btn" value="3" id="3"  onClick={() =>seValue(value + "3")}>3</button>
          </div>
          <div className="col-3">
            <button className="btn operators"  id="add" value="+" onClick={() =>seValue(value + "+")}>+</button>
          </div>
        </div>
        <div className="row buttondiv">
          <div className="col-3">
            <button className="btn"  id="0" value="0" onClick={() =>seValue(value + "0")}>0</button>
          </div>
          <div className="col-3">
            <button className="btn"  id="00" value="00" onClick={() =>seValue(value + "00")}>00</button>
          </div>
          <div className="col-6">
            <button className="btn btn-primary equal1"  id="equal" value="=" onClick={equal}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
