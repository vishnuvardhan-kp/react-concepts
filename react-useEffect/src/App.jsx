import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  const handleCount = () => {
      setCount(c => c + 1);
  }
  
  const handleColor = () => {
      setColor(co => (co=="green") ? "red" : "green");
  }

  /*
    // Runs only on mounting
    useEffect( () => {
      document.title = "Counter"
    },[]) 
    
    // Runs on every rendering
    useEffect( () => {
      document.title = `Counter : ${count}`
    })
  */
  
  // Runs when the specified value changes
  useEffect( () => {
    document.title = `Counter : ${count}`
  },[count])

  return (
    <div className = "container">
      <h1>React Hooks UseEffect()</h1>
      <h2 style={{color : color}}>Count : {count}</h2>
      <button onClick={handleCount}>Change Count</button>
      <button onClick={handleColor}>Change Color</button>
    </div>
  )
}

export default App
