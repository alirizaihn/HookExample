import React from 'react'

const TodoItem = ({todo, index}) => {
    console.log("TODOItem rendered")
  return (
    <li key={index}>
    {todo}
  </li>
)}
export default React.memo(TodoItem)