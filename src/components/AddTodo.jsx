import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const AddTodo = ({add}) => {
  const [text, setText] = useState("");
  return (
    <div className="AddTodo container w-100">
      <input value={text} onChange={e => setText(e.target.value)} className="AddTodoInput w-75 mx-4" />
      <button className="AddTodoButton btn btn-outline-success" onClick={() => {add(text); setText("")}}>Qo'shish</button>
    </div>
  );
}

export default AddTodo;
