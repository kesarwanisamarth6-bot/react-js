import { useState } from "react"



const App = () => {
const Increase = ()=>{
  seta(a+1)
}
const Decrease =()=>{
  seta(a-1)
}

const IncreaseBy5 = ()=>{
  seta(a+5)
}


const [a, seta] = useState(0)  // Instead of doing this let a = 20 , we can write like this,here a = readOnly and seta = writeOnly
  return (
    <div>
      <h1>Value of a is {a}</h1>
      <button onClick  ={Increase}>Click</button>
      <button onClick={Decrease}></button>
      <button onClick={IncreaseBy5}></button>
      
    </div>
  )
  
}

export default App