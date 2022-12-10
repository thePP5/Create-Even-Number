
import './App.css';
import React,{useState} from 'react';

const CreateEvenNumber=()=> {
  const[count,setCount] = useState(2)
  const incrementByEven=()=>{
    setCount(count*2);
  }

  const resetAll =()=>{
    setCount(2)
  }
  return (
    <div className="App">
    {count}
    <button onClick={incrementByEven}>Click Me!</button>
    <button onClick={resetAll}>Reset</button>
    </div>
  );
}

export default CreateEvenNumber;
