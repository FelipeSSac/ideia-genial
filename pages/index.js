import { useState } from 'react';

export default function Home() {
  return (
  <div>
    <h1>Home</h1>
    <Counter />
  </div>
  )
}

function Counter() {
  const [counter, setCounter] = useState(0)

  return(
    <>
      <div>{counter}</div>
      <button 
        onClick={() => setCounter(prevState => prevState + 1)}
      >
        +
      </button>
      <button 
        onClick={() => setCounter(prevState => prevState - 1)}
      >
        -
      </button>
    </>
  )
}