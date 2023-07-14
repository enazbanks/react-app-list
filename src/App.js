import "./styles.css"
import React from "react"

export default function App() {
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
  <form className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Task:</label>
      <input type ="text" id="item"></input>
    </div>
    <button className="btn"> Add</button>
  </form>
  </>
  )
}
