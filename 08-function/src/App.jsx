import React from 'react'

const App = () => {

  function btnClicked(){
    console.log('button is clicked');
  }
  function mouse(){
    console.log('mouse enter');
  }

    function inputChanging(val){
      console.log(val);
    }

    return (
      <div>
      <input
      onChange={function(elem){
        inputChanging(elem.target.value);
      }}
      
      type="text"
      placeholder='Enter Name' />

      </div>
    )
  }

export default App