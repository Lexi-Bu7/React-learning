import React, {useState} from 'react'

const App = () =>{
  const [counter, setCounter] = useState(0)

  const Plus =() =>
    setCounter(counter+1)
  

  const Zero = () =>
    setCounter(0)
  
  const Display = ({counter}) =>{
    return(
      <div>
        {counter}
      </div>)
  }

  const Button =({name,text}) =>{

    return(
      <button onClick = {name}>
        {text}
        </button>
    )
  }
  
  return (
    <div>
      <Display counter = {counter}/>
      <Button name = {Plus} text = 'Plus' />
      <Button name = {Zero} text = 'Plus' />
    </div>
  )
}
export default App;
