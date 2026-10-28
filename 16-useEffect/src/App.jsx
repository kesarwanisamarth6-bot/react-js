import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

const App = () => {
 
  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(100)

   useEffect (function(){
    console.log('use effect is running...');
  },[num])

  return (
    <div>

      <h1>num  {num}</h1>
      <h1>num2  {num2}</h1>

    <button
    onMouseEnter={()=>{
    setNum(num+1)
    }}

    onMouseLeave={()=>{
        setNum2(num2+10)

    }}

    >
      Click
    </button>
    </div>
  )
}

export default App

//use effect side by side multiple chiz ko karna ka kaam karta hain.Ye callback mein ek function mangta hain
//jb jb aapki state ki value change ho rahi toh side effect wali cheex chalegii ->> Mounting