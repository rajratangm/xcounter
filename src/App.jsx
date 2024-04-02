import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const handleChange=(event)=>{
    if(event.target.value=='add'){
      setCount((prevState)=> prevState+1)
    }
    else{
      setCount((prevState)=>prevState-1)
    }
  }

  return (
 
    <>
   <h1>Counter App</h1>
   <p>Count: {count}</p>
   <button value={'add'} onClick={handleChange}>Increment</button>
   <button value={'subtract'} onClick={handleChange}>Decrement</button>
    </>
  )
}

export default App
