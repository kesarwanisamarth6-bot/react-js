import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
 
  const [data,setData] = useState([])

  const getData = async ()=>{

    //  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    //  console.log(response.data)

   const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
   setData(data);
   console.log(data[0]['name'])
   
  }




  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )

}

export default App