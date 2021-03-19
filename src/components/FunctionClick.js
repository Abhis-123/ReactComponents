/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default () => {
  function clickHandler() {
    console.log('Button clicked')
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}
