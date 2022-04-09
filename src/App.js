import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [color, setColor] = useState('red');
  return (
    <div>
    <button onClick={()=>setColor(color === 'red' ? 'blue' : 'red')} style={{backgroundColor: color}}>change to {color==='red'?'blue' : 'red'}</button>
    </div>
  );
}

export default App;
