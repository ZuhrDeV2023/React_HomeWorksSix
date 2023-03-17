import React, {useState} from "react";
import { Card } from "react-bootstrap";

const Todo = ({ todo, remove, edit }) => {
  const [mode, setMode] = useState("list");
  const [text, setText] = useState(todo.text);
  return (
    <div className="Todo text-black mt-4">
      {mode === "list"
        ? <Card className="border-0">
          <span className="TodoText bg-success py-2 px-2 bg-transparent border-transporent">{todo.text}</span>
          <button className="RemoveTodo btn btn-outline-success p-2 mb-4 w-20" onClick={remove}>O'chirish</button>
          <button className="EditTodo btn btn-outline-success" onClick={() => setMode("edit")}>Tahrirlash</button>
        </Card>
        : <Card className="border-0">
          <input value={text} onChange={e => setText(e.target.value)} className="EditTodoInput w-100 px-1 py-1 mb-4" />
          <button className="EditTodoSave w-20 btn btn-success mx-4 mb-3" onClick={() => {edit(text); setMode("list");}}>Saqlash</button>
          <button className="EditTodoCancel btn btn-success mx-4" onClick={() => setMode("list")}>Bekor qilish</button>
        </Card>}
    </div>
  );
}

export default Todo;