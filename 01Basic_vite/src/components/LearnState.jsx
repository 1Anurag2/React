import {useState} from 'react'

const LearnState = () => {
    const [count , setcount] = useState(0);
    const handle4 = () => {
        console.log("Number : " , count);
        
        setcount(count+1)

    }
    const resetcount = () => {
        setcount(0)
        console.log(count);
        
    }
  return (
    <>
      <h1>Number : {count}</h1>
      <button onClick={handle4}>Increase count</button>
      <button onClick={resetcount}>Reset count</button>
    </>
  )
}

export default LearnState
