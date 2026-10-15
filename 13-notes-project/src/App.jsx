import React, { useState } from 'react'
import { X } from 'lucide-react';


const App = () => {
    

const [title, setTitle] = useState('')
const [Details, setDetails] = useState('')
const [task, settask] = useState([])

    const submitHandler = (e)=>{
      e.preventDefault()
      console.log("Form Submitted")

      const copyTask = [...task];
      copyTask.push({title,Details})
      settask(copyTask)
      
      setTitle('')
      setDetails('')
    }

    const deleteNote =(idx)=>{
      const copyTask = [...task];
      copyTask.splice(idx,1)
      settask(copyTask)

    }


  return (
    <div className='h-screen lg:flex bg-black  text-white'>

      <form onSubmit={(e)=>{
        submitHandler(e);
      }}
      
      className='flex flex-col h-full items-start items-center p-10 lg:w-1/2 gap-4'>     
       <h1 className='text-3xl font-bold'>Add Note </h1>

       {/* PEFLA INPUT FOR HEADGIN */}
     <input type="text" 
        placeholder='Enter Notes Heading'
         className='px-5 py-2 border-2 rounded font-medium text-white w-full outline-none'
         value ={title}
         onChange={(e)=>{
          setTitle(e.target.value)
         }}
         />
         {/* DEATAIL WALA INPUT */}
      <textarea type="text" 
        placeholder='Write Details '
        className='px-5 py-2 h-32 border-2 font-medium border-white rounded  w-full text-pink-500 outline-none '
        value = {Details}
        onChange={(e)=>{
          setDetails(e.target.value);
        }} 
        />

    <button className='bg-white text-black active:bg-gray-400 font-medium px-5 py-2 w-full rounded outline-none'>
    Add Note
    </button>
        </form>

            <div className='border-l-2 bg-gray-900 lg:w-1/2  p-10'>
            <h1 className='text-3xl font-bold mb-5'>Resend Notes </h1>
                <div className='flex flex-wrap items-start justify-start   gap-5   item overflow-auto '>
                      {task.map(function(elem,idx){
                        return <div key={idx} className="relative h-52 w-47 rounded-2xl text-black py-9  flex flex-col justify-between items-start px-5 bg-cover bg-[url('https://tse3.mm.bing.net/th/id/OIP.rQE-2z4GsRRsCjlZrqiffwHaKX?r=0&pid=Api&h=220&P=0')]">
                      <div>
                          <h3 className='leading-tight text-xl font-bold mt-2' >{elem.title}</h3>
                          <p className='mt-2 leading-tight font-medium text-gray-500 '>{elem.Details} </p>
                      </div>
                      <button onClick={()=>{
                        deleteNote(idx)
                      }}className='w-full cursor-pointer active:scale-95 bg-red-400 py-1 text-xs rounded font-bold' >Delete</button>
                      </div>
                      })}
                      
                 </div>
            </div> 
    </div>
  )
}

export default App
 