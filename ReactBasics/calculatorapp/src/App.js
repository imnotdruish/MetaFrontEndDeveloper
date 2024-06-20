import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  // function to add the current input value to the result
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
   // function to subtract the current input value to the result
  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };
   // function to multiply the current input value to the result
  function times(e) { 
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }; 
   // function to divide the result by the current input value
  function divide(e) { 
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };
  // Reset the current input to an empty string
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = "";

  }; 
  // Reset the Result back to 0
  function resetResult(e) { 
    e.preventDefault();
    setResult(0);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button>
        <button onClick={minus}>minus</button>
        <button onClick={times}>times</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>Reset Input</button>
        <button onClick={resetResult}>Reset Result</button>
      </form> 
    </div> 
  ); 
} 
 
export default App; 