import { click } from '@testing-library/user-event/dist/click'
import React, {useState} from 'react'

const History = ({allClicks}) =>{
  if(allClicks.length === 0){
    return(
      <div>
        This app is used by clicking the buttons
      </div>
    )
  }
  return(
    <div>
      button clicking history: {allClicks.join(' ')}
    </div>
  )
}

const Button = ({name,text}) =>{
  return(
  <button onClick={name}>{text}</button>
)}

const App = () =>{
  const[left,setLeft] = useState(0)
  const[right,setRight] = useState(0)
  const[allClicks,setAll] = useState([])
  const handleleftClick = () =>{
    setAll(allClicks.concat('L'))
    setLeft(left+1)
  }

  const handlerightClick = () =>{
    setAll(allClicks.concat('R'))
    setRight(right+1)
  }
  return(
    <div>
      {left}
      <Button name={handleleftClick} text = 'left' />
      <Button name={handlerightClick} text = 'right' />
      {right}
      <History allClicks={allClicks}/>
    </div>
  )
}
export default App;
