import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';

export function replaceCamelWithSpaces(colorName){
  if(!colorName.length>0)
    return colorName;
  return colorName[0] + colorName.substring(1).replace(/([A-Z])/g, " $1");
}

function App() {
  const [color, setColor] = useState('red');
  const [checked, setChecked] = useState(false);
  return (
    <div>
    <button
    onClick={()=>setColor(color === 'red' ? 'blue' : 'red')}
    style={{backgroundColor: checked ? "gray" : color}}
    disabled={checked}>
    change to {color==='red'?'blue' : 'red'}
    </button>
    <input type="checkbox" checked={checked} onClick={()=>setChecked(!checked)} id="disable-button-checkbox"/>
    <label htmlFor="disable-button-checkbox">disable button</label>
    </div>
  );
}

export default App;
