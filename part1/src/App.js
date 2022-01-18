import './App.css';
import React from 'react';
import { useState } from 'react/cjs/react.development';

const App = () => {
  const[counter,setCounter] = useState(0)

  const Display =({counter}) =>{
    return(
      <div>{counter}</div>
    )
  }

  const increaseByOne=()=>{
    setCounter(counter + 1)
  }

  const Reset = () =>{
    setCounter(0)
  }  
  const decreaseByOne = () => {
    setCounter(counter - 1)

  }
  const Button = ({onClick,text}) =>{
    return(
      <button onClick = {onClick}>
        {text}
      </button>
    )
  }

  return(
    <div>
      <Display counter = {counter} />
      <Button onClick = {increaseByOne} text = 'plus' />
      <Button onClick = {Reset} text = 'reset' />
      <Button onClick = {decreaseByOne} text = 'minus' />
    </div>
  )
}
export default App;
