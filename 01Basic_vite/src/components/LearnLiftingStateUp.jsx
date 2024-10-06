 export const LearnLiftingStateUp = (props) => {
    const handle3 = (e)=>{
        e.preventDefault()
        let dt = "I am Full Stack Devolper"
        props.myclick(dt)
    }
  return (
    <>
      <button onClick={handle3}>click 3</button>
    </>
  )
}
