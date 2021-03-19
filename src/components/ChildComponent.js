import React from 'react'

const ChildComponent = (props) => {
  return (
    <div>
      {/* this is not a correct way to pass function  */}
      {/* <button onClick={ props.greetHandler("child")}>Greet Parent</button> */}
      {/* we can pass function directly without parameters  */}
      <button onClick={ props.greetHandler}>Greet Parent</button>
      {/* we can pass function as arrow function */}
      <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent
