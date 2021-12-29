import logo from './logo.svg';
import './App.css';
import React from 'react';

const Hello = (props) => {
  return (
    <div>
      <p>Hello good afternoon {props.name}, you are {props.age}</p>
    </div>
  )
}

const Footer =() =>{
  return (
      <div>
      greeting app created by <a href="https://github.com/Yue-Bu">Lexi Bu</a>
      </div>
  )
}

const App = () => {
  const name = "Buck"
  const age = 10
  return (
      <>
      <h1>Greetings</h1>
      <Hello name ={name} age={age + 13} />
      <Hello name = "Case" age = {1} />
      <Footer />
      </>
  )
}

export default App;
