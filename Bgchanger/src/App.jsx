import { useState } from "react"


function App() {
  const [color,setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
      style = {{backgroundColor : color}}
      >
        <div className="fixed flex flex-wrap 
        justify-center bottom-12 inset-x-0 px-2">
          <div className="fles flex-wrap justify-center gap-3 shadow-lg
           bg-white px-3 py-2 rounded-xl">

            <button
            onClick={()=>{setColor("red")}}
            className="outline-noe px-4 py-1 rounded-full
            text-white shadow-lg mr-4"
            style={{backgroundColor : "red"}}
            >Red</button>

            <button
            onClick={()=>{setColor("yellow")}}
            className="outline-noe px-4 py-1 rounded-full
            text-white shadow-lg mr-4"
            style={{backgroundColor : "yellow"}}
            >Yellow</button>

            <button
            onClick={()=>{setColor("green")}}
            className="outline-noe px-4 py-1 rounded-full
            text-white shadow-lg mr-4"
            style={{backgroundColor : "green"}}
            >Green</button>

            <button
            onClick={()=>{setColor("blue")}}
            className="outline-noe px-4 py-1 rounded-full
            text-white shadow-lg mr-4"
            style={{backgroundColor : "blue"}}
            >Blue</button>

            <button
            onClick={()=>{setColor("white")}}
            className="outline-noe px-4 py-1 rounded-full
            text-black border border-green-500 shadow-lg mr-4"
            style={{backgroundColor : "white"}}
            >White</button>

            <button
            onClick={()=>{setColor("black")}}
            className="outline-noe px-4 py-1 rounded-full
            text-white  shadow-lg mr-4 "
            style={{backgroundColor : "black"}}
            >Black</button>

            <button
            onClick={()=>{setColor("pink")}}
            className="outline-noe px-4 py-1 rounded-full
            text-white shadow-lg mr-4"
            style={{backgroundColor : "pink"}}
            >Pink</button>

            <button
            onClick={()=>{setColor("orange")}}
            className="outline-noe px-4 py-1 rounded-full
            text-white shadow-lg mr-4"
            style={{backgroundColor : "orange"}}
            >Orange</button>

            <button
            onClick={()=>{setColor("purple")}}
            className="outline-noe px-4 py-1 rounded-full
            text-white shadow-lg mr-4"
            style={{backgroundColor : "purple"}}
            >Purple</button>
           </div>
        </div>
    </div>
  )
}

export default App
