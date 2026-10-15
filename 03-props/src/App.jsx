import React from 'react'
import Card from './components/card'

const App = (props) => {
  return (
  <div className="parent">
     <Card user= 'Raj' img = 'https://images.unsplash.com/photo-1789569626208-9fb9ebe254fc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
     <Card user = 'Ruchi' img = 'https://images.unsplash.com/photo-1790747754583-b403243d25aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D'/>
     <Card user = 'Anushka' img = 'https://images.unsplash.com/photo-1790693658436-146fc9a84dd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4NXx8fGVufDB8fHx8fA%3D%3D'/>
  </div>
    
  )
}



export default App