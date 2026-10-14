import React from 'react'

const App = () => {

  const submitHandler = (e)=>{
    e.preventDefault();               //stops the event's default browser behaviour.
    console.log("Form Submitted");
  }

  return (
    <div>

        <form  onSubmit={(e)=>{
          submitHandler(e);
        }}>
          <input type="text" placeholder="Enter your name" />
           <button>Submit</button>
        </form>
       

    </div>
  )
}

export default App