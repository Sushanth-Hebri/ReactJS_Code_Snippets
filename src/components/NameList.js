import React from 'react'
import Person from './Person'
function NameList() {
const persons = [
  {
id:1,
name:'sushanth',
age:20,
skill:'rectjs'
  },{
id:2,
name:'ram',
age:21,
skill:'angular'
  },
  {
    id:3,
    name:'lakki',
    age:22,
    skill:'vuejs'
  }
]

    const personList = persons.map(person =>
      <Person key={person.id} person={person}></Person>
    ) 

  return (
    <div>
      {personList}
    </div>
  )
}

export default NameList
