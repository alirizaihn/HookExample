import { useCallback, useMemo, useReducer, useState } from 'react'
import Header from '@/Components/Header'
import AddTodo from '@/Components/AddTodo'
import Todos from '@/Components/Todos'

function todoReducer (state, action) {
  switch (action.type) {
    case "SET_TODO":
      return {
        ...state,
        todo:action.value
      }

    case "ADD_TODO":
      return {
        ...state,
        todo: '', 
        todos: [...state.todos,
          action.todo
        ]
      }
      case "SET_SEARCH":
      return {
        ...state,
        search: action.value
      }
      
  }
}

export default function Home() {
  console.log("App Rendered")
  const [state, dispatch] = useReducer(todoReducer, {
    todos:[],
    todo: '',
    search: ''
  });
  const [count, setCount] = useState(0)

  const submitHandle = useCallback((e) => {
    e.preventDefault()
    dispatch({
      type: 'ADD_TODO',
      todo: state.todo 
    })
  },[state.todo])
  const onChange = useCallback((e) => {
    dispatch({
      type: 'SET_TODO',
      value: e.target.value
    })
  },[])

  const searchHandle = (e) => {
    e.preventDefault()
    dispatch({type:'SET_SEARCH', value:e.target.value})
  }
  const filtered = useMemo(() => {
    return state.todos.filter(todo => todo.toLocaleLowerCase('TR').includes(state.search.toLocaleLowerCase('TR')))}, 
    [state.todos, state.search])
    
  return (
    <>
    <Header/>
    <h3>{count}</h3> 
    <button onClick={() => setCount(p => p + 1)}>Arttır</button>
    <hr/>
    <h1>Todo App</h1>
    <input type="text" value={state.search} placeholder='Search' onChange={searchHandle}/>
    <hr/>
      <AddTodo onChange={onChange} submitHandle={submitHandle} todo={state.todo}/>
      <Todos todos={filtered}/>
    </>
  )
}
