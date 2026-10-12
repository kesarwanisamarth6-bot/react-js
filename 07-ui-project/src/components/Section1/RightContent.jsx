import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right'className='h-full w-2/3 p-3  overflow-x-auto flex flex-nowrap gap-5' >
      {props.users.map(function(ele,idx){

        return <RightCard img = {ele.img} key= {idx} id = {idx}intro = {ele.intro} tag ={ele.tag} color = {ele.color}/>
      })}

   
    </div>
  )
}

export default RightContent 