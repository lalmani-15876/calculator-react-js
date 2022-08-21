import { useState } from 'react';

function App() {
  const [calc, setCalc]=useState("");
  const [result,setResult]=useState("");
  const ops=['/','*','-','+','.','%','**','|','&','<<','>>','>>>'];
  const updateCalc= value =>{
        if(ops.includes(value)&& calc === ''||ops.includes(value)&&ops.includes(calc.slice(-1)))
        {
          return;
        }
        setCalc(calc+value);
        if(!ops.includes(value)){
          setResult(eval(calc+value).toString())
        }
  }
  const createDigits = () => {
    const digits = [];
    for(let i=1;i<10;i++)
    {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
      )
    }
    return digits;
  }
  const calculate = () => {
    setCalc(eval(calc).toString());
  }
  const reset = () => {
    setCalc("");
    setResult("0"); 
  };
  const deletelast = () => {
      if(calc== '')
      {
        return;
      }
      const value=calc.slice(0,-1);
      setCalc(value);
  }
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
        {result ? <span>({result})</span> : '' }&nbsp;
        {calc || "0"}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={() => updateCalc('+')}>+</button>
        </div>
        <div className="digits">
          { createDigits() }
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={reset}>AC</button>
          
          <button onClick={() => updateCalc('%')}>MOD</button>
          <button onClick={() => updateCalc('**')}>POW</button>
          <button onClick={deletelast}>DEL</button>
          <button onClick={() => updateCalc('<<')}>LS</button>
          <button onClick={() => updateCalc('>>')}>RS</button>
          <button onClick={() => updateCalc('>>>')}>URS</button>
          <button onClick={() => updateCalc('|')}>OR</button>
          <button onClick={() => updateCalc('&')}>AND</button>
          <button onClick={() => updateCalc('~')}>NOT</button>
          <button onClick={() => updateCalc('(')}>(</button>
          <button onClick={() => updateCalc(')')}>)</button>
          <button onClick={calculate}>=</button>
         
        </div>
       
      </div>
    </div>
  );
}

export default App;

