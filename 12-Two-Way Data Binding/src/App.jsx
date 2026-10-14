import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')



  const submitHandler = (e)=>{
    e.preventDefault();               //stops the event's default browser behaviour.
    console.log("Form Submitted by",title);
    setTitle('')
  }

  return (
    <div>


        <form  onSubmit={(e)=>{
          submitHandler(e);
        }}>
          <input 
          type="text" 
          placeholder="Enter your name" 
          value ={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
          />
           <button>Submit</button>
        </form>
       

    </div>
  )
}

export default App