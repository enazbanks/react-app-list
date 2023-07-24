import "./styles.css"
import React from "react"
import { useState } from "react"

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title: newItem, completed: false},
      ]
    })

    setNewItem("") // clears text box

  }

  function toggleToDo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodo => {
      return currentTodo.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
    <h1>Todo List:</h1>
    <ul className= "list">
      {todos.map(todo => {
        return (
          <li key={todo.id}> {/* each child needs key prop performance opt*/}
          <label>
            <input type="checkbox" checked={todo.completed}
            onChange={e => toggleToDo(todo.id, e.target.check)}/>
            {todo.title}
          </label>
          <button onClick={ () => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
        </li>
        )
      })}
    </ul>

  <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Task:</label>
      <input type ="text" id="item" value={newItem} onChange={e => setNewItem(e.target.value)}>
      </input>
    </div>
    <button className="btn"> Add</button>
  </form>
  </>
  )
}
