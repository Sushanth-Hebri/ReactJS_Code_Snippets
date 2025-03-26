import React from 'react'

function Person({person}) {
  return (
    <div>
      <h2>I am {person.name}. I am {person.age}, I know {person.skill}</h2>
    </div>
  )
}

export default Person
