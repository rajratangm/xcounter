import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1>Counter App</h1>
   <p>Count {count}</p>
   <button value={'add'} onChange={handleChange}>Increment</button>
   <button value>Decrement</button>
    </>
  )
}

export default App
