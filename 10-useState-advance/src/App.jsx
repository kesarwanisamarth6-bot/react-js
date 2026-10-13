import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState({user:'Sarthak',age: '24'})

  const buttonClicked = ()=>{
    // const newNum = {...num};
    // newNum.user = 'Sam'
    // newNum.age = '21';
    // setNum(newNum);
    
    setNum(prev=> ({...prev,user:'Sam',age: '21'})) // This is called Batch Update
  }
  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={buttonClicked}>Click</button>
    </div>
  )
}

export default App