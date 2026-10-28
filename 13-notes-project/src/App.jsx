
import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState('')
  const [Details, setDetails] = useState('')
  const [task, settask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Form Submitted")

    const copyTask = [...task];
    copyTask.push({ title, Details })
    settask(copyTask)

    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1)
    settask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-[#0F172A] text-slate-100'>

      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className='flex flex-col h-full items-start items-center p-10 lg:w-1/2 gap-4 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#431407]'
      >

        <h1 className='text-3xl font-bold text-orange-300'>
          Add Note
        </h1>

        {/* HEADING INPUT */}
        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 py-2 border-2 border-orange-500/40 rounded-xl font-medium text-white w-full outline-none bg-slate-900 focus:border-orange-400 placeholder:text-slate-400'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        {/* DETAILS INPUT */}
        <textarea
          placeholder='Write Details'
          className='px-5 py-2 h-32 border-2 border-orange-500/40 font-medium rounded-xl w-full text-orange-100 outline-none bg-slate-900 focus:border-orange-400 placeholder:text-slate-400'
          value={Details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        <button className='bg-gradient-to-r from-[#FF9F43] to-[#F97316] text-slate-950 hover:from-[#FDBA74] hover:to-[#FB923C] active:scale-95 font-semibold px-5 py-2 w-full rounded-xl outline-none shadow-lg shadow-orange-950/40 transition'>
          Add Note
        </button>

      </form>

      <div className='border-l-2 border-orange-500/20 bg-[#0F172A] lg:w-1/2 p-10'>

        <h1 className='text-3xl font-bold mb-5 text-orange-300'>
          Recent Notes
        </h1>

        <div className='flex flex-wrap  items-start justify-start gap-5 item overflow-auto'>

          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className={`relative h-60 w-65 rounded-2xl py-9 flex flex-col justify-between items-start px-5 shadow-lg shadow-black/20 ${
                  idx % 2 === 0
                    ? 'bg-[#FFF0D9] text-[#431407]'
                    : 'bg-[#FED7AA] text-[#7C2D12]'
                }`}
              >

                <div>
                  <h3 className='leading-tight text-xl font-bold mt-2'>
                    {elem.title}
                  </h3>

                  <p className='mt-2 font-medium opacity-80 whitespace-pre-line leading-6 break-words'>
                    {elem.Details}
                  </p>
                </div>

                <button
                  onClick={() => {
                    deleteNote(idx)
                  }}
                  className='w-full cursor-pointer active:scale-95 bg-rose-500 hover:bg-rose-600 text-white py-1 text-xs rounded-lg font-bold transition'
                >
                  Delete
                </button>

              </div>
            )
          })}

        </div>
      </div>

    </div>
  )
}

export default App



// import React, { useState } from 'react'
// import { X } from 'lucide-react';


// const App = () => {
    

// const [title, setTitle] = useState('')
// const [Details, setDetails] = useState('')
// const [task, settask] = useState([])

//     const submitHandler = (e)=>{
//       e.preventDefault()
//       console.log("Form Submitted")

//       const copyTask = [...task];
//       copyTask.push({title,Details})
//       settask(copyTask)
      
//       setTitle('')
//       setDetails('')
//     }

//     const deleteNote =(idx)=>{
//       const copyTask = [...task];
//       copyTask.splice(idx,1)
//       settask(copyTask)

//     }


//   return (
//     <div className='h-screen lg:flex bg-black  text-white'>

//       <form onSubmit={(e)=>{
//         submitHandler(e);
//       }}
      
//       className='flex flex-col h-full items-start items-center p-10 lg:w-1/2 gap-4'>     
//        <h1 className='text-3xl font-bold'>Add Note </h1>

//        {/* PEFLA INPUT FOR HEADGIN */}
//      <input type="text" 
//         placeholder='Enter Notes Heading'
//          className='px-5 py-2 border-2 rounded font-medium text-white w-full outline-none'
//          value ={title}
//          onChange={(e)=>{
//           setTitle(e.target.value)
//          }}
//          />
//          {/* DEATAIL WALA INPUT */}
//       <textarea type="text" 
//         placeholder='Write Details '
//         className='px-5 py-2 h-32 border-2 font-medium border-white rounded  w-full text-pink-500 outline-none '
//         value = {Details}
//         onChange={(e)=>{
//           setDetails(e.target.value);
//         }} 
//         />

//     <button className='bg-white text-black active:bg-gray-400 font-medium px-5 py-2 w-full rounded outline-none'>
//     Add Note
//     </button>
//         </form>

//             <div className='border-l-2 bg-gray-900 lg:w-1/2  p-10'>
//             <h1 className='text-3xl font-bold mb-5'>Resend Notes </h1>
//                 <div className='flex flex-wrap items-start justify-start   gap-5   item overflow-auto '>
//                       {task.map(function(elem,idx){
//                         return <div key={idx} className="relative h-52 w-47 rounded-2xl text-black py-9  flex flex-col justify-between items-start px-5 bg-cover bg-[url('https://tse3.mm.bing.net/th/id/OIP.rQE-2z4GsRRsCjlZrqiffwHaKX?r=0&pid=Api&h=220&P=0')]">
//                       <div>
//                           <h3 className='leading-tight text-xl font-bold mt-2' >{elem.title}</h3>
//                           <p className='mt-2 leading-tight font-medium text-gray-500 '>{elem.Details} </p>
//                       </div>
//                       <button onClick={()=>{
//                         deleteNote(idx)
//                       }}className='w-full cursor-pointer active:scale-95 bg-red-400 py-1 text-xs rounded font-bold' >Delete</button>
//                       </div>
//                       })}
                      
//                  </div>
//             </div> 
//     </div>
//   )
// }

// export default App
