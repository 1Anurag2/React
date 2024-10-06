// import './App.css'
import { First } from './components/First'
// import { Learnevent } from './components/Learnevent'
// import {Learnprops} from './components/Learnprops'
// import {LearnLiftingStateUp}  from './components/LearnLiftingStateUp'
// import LearnState from './components/LearnState'
import LearnUseEffect from './components/LearnUseEffect'
import {Api} from './components/Api'
function App() {
  // let roll = 11
  // let getdata = (data) => {
  //   console.log(data);
  // }

  return (
    <>

      <First/>    {/*  file name */}
      {/* <Learnprops name = "Anurag verma" Roll = {roll} />
      <Learnevent/> 
      <LearnLiftingStateUp myclick = {getdata}/>
      <LearnState/> */}
      <LearnUseEffect/>
      <Api/>
    </>
  )
}

export default App
