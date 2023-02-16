import React from 'react'
import TodoItem from './TodoItem'

const Todos = ({todos}) => {
    console.log("TODOS rendered")
  return (
    <ul>
    {todos.map((todo, index) => (
        <div key={index}>
    <TodoItem todo={todo} index={index}/>
        </div>
     
    ))}
    </ul>
  )
}

export default React.memo(Todos)