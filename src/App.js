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
  }

  console.log(todos)

  return (
    <>
    <h1>Todo List:</h1>
    <ul className= "list">
      <li>
        <label>
          <input type="checkbox" />
            Item 1
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
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
