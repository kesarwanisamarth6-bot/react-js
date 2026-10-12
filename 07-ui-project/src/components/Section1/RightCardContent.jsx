import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>


         <div className='absolute top-0 left-0 p-8 h-full w-full flex flex-col justify-between'>
            <h2 className='bg-white text=xl font-semibold rounded-full h-14 w-14 flex justify-center items-center'>{props.id+1}</h2>
            <div className='flex flex-col justify-between'>
                <p className='text-lg  leading-relaxed text-white mb-10 texts-shadow-2xs'>
                   {props.intro}
                </p>
                <div className='flex justify-between' >
                    <button style={{backgroundColor: props.color}}className=' text-white font-medium px-8 py-2 rounded-full '>{props.tag}</button>
                    <button style={{backgroundColor: props.color}}className='  text-white font-semibold px-4 py-2 rounded-full '><i class="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default RightCardContent