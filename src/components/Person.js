import React from 'react'
// key prop cannot be accessed in the function
// function Person({person,key}) {
  function Person({person}) {
  return (
    <div>
      <h2>

        I am {person.name}. I am {person.age} years old. I know {person.skill}
      </h2>
    </div>
  )
}

export default Person
