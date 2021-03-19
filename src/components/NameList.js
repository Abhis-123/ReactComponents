import React from 'react'
import Person from './Person'

function NameList() {
  const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
  // const nameList=names.map(name=><h2>{name}</h2>)
  const persons = [
    {
      id: 1,
      name: 'Bruce',
      age: 30,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Clark',
      age: 25,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'Diana',
      age: 28,
      skill: 'Vue'
    }
  ]
  // warning: Person: `key` is not a prop. Trying to access it will result in `undefined` being returned.
  // keys help list to perform better
  // const personList = persons.map(person => <Person person={person} key={ person.id}  />)
  //const personList = persons.map(person =><h2> I am {person.name} and i know { person.skill} id is {person.id}</h2>)
 
 
  // Note: It is not recommended to use indexes for keys 
  // if the order of the item may change in future.
  //  It creates confusion for the developer and may 
  //  cause issues with the component state.
  
  const nameList = names.map((name, index) => <h2 key={index}> the index is  {index} {name}</h2>)
  return( <div>
    {/* <h2>{names[0]}   </h2>
    <h2>{names[1]}    </h2>
    <h2>{names[2]}</h2> */}
    {/* {
      names.map(name=> <h2>{name}</h2>)
    } */}
    {nameList}


    </div>
    )
}

export default NameList
