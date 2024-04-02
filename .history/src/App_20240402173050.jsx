import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    const handleChange=(event)=>{
      if(event.target.value=='add'){
        setCount((prevState)=> prevState)
      }
    }
    <>
   <h1>Counter App</h1>
   <p>Count {count}</p>
   <button value={'add'} onClick={handleChange}>Increment</button>
   <button value={'subtract'} onClick={handleChange}>Decrement</button>
    </>
  )
}

export default App
