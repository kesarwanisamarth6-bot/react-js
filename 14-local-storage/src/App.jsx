import React from 'react'

const App = () => {

  const user = {
    username: 'Sarthak',
    age: 69,
    city: 'Bhopal'
  }
  
  localStorage.setItem('user',JSON.stringify(user))

  const usera = JSON.parse(localStorage.getItem('user'))
  console.log(usera)
   
// localStorage.setItem() ,  localStorage.getItem(),  localStorage.removeItem(),  localStorage.clear().  JSON.stringify(user){object to string}, JSON.parse(string object)

  return (
    <div>
    App
    </div>
  )
}

export default App



