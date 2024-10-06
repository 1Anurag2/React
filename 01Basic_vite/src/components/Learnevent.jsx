export const Learnevent = () => {
    const handle1 = (e) => {
        e.preventDefault()
        console.log("Button 1 clicked");    
    }
    const handle2 = (id) => {
        
        console.log("Button 2 clicked",id);
        
    }


  return (
    <>
      <button onClick={handle1}>click 1 </button>
      <button onClick={() => handle2("22cs11")}>click 2</button>
    </>
  )
}


