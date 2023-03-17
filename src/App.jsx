import React from "react";
import TodoApp from "./components/TodoApp.jsx";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App d-flex mt-20 text-center">
      <div className="mx-auto w-100 mt-5">
        <h1 className="AppTitle w-100 bg-dark text-white p-3 mb-5">Todo List</h1>
          <TodoApp /> 
      </div>
    </div>
  )
}

export default App
