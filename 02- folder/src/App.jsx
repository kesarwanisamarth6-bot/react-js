import React from 'react'
import Card from './components/card'

const App = () => {
  let name = "Samarth"  // variable ko access karne ke liye we need {this to access}.
  return (
  <div>
    <Card/>
  </div>
  )
}

export default App