import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 15
  let [counter, setCounter] = useState(15)
  const addValue = () => {
    setCounter(counter + 1)
    //counter = counter + 1
  }
  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
  <>
      <h1>Hello</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
