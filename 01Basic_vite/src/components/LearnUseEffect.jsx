import { useEffect, useState } from "react"
const LearnUseEffect = () => {
    const [count,setcount] = useState(0);
    const handle = () => {
        setcount(count+1)
    };
    const [newrandom,setrandom] = useState(null);
    const randomnumber = () => {
        const newrandom = Math.floor(Math.random() * 100)+1;
         setrandom(newrandom)
    }
    // Example -1 It runs each time when component is mounted and re-render
    // useEffect(()=>{
    //     console.log("Useeffect called")
    // })

    // Example - 2 It runs once when the component is mounted ([]) means no dependencies 
    //    useEffect(()=>{
    //         console.log("Useeffect called")
    //     },[])

    // Example - 3 It runs when the component is mounted and whenever dependence changes 
        // useEffect(()=>{
        //     console.log("Useeffect called")
        // },[count])

    // Example - 4 The cleanup function ( the function you return from useeffect )run when the component unmouts or when the dependencies in the dependency array change. since count is in the dependency array, whanever count changes , the cleanup function is called before the new effect runs.
    useEffect(()=>{
        console.log("Useeffect called")
        return ()=>{
            console.log("component will unmount !")
        }
    },[count])
  return (
    <>
       <h1>Count : {count}</h1>
      <button onClick={handle}>click</button>
      <hr/>
       <h1>Random Number : {newrandom}</h1>
      <button onClick={randomnumber}>Random</button>
    </>
  )
}

export default LearnUseEffect
