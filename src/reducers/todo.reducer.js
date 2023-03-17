export const initialState = {
  count: 2,
  todos: [{
    id: 1,
    text: "Bir",
  }, {
    id: 2,
    text: "Ikki",
  }],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      {
        const newcount = state.count + 1;
        const newTodo = {
          id: newcount,
          text: action.text,
        };
        return {
          count: newcount,
          todos: [...state.todos, newTodo],
        };
      }
    case "edit":
      {
        const idx = state.todos.findIndex(t => t.id === action.id);
        const todo = Object.assign({}, state.todos[idx]);
        todo.text = action.text;
        const todos = Object.assign([], state.todos);
        todos.splice(idx, 1, todo);
        return {
          count: state.count,
          todos: todos,
        };
      }
    case "remove":
      {
        const idx = state.todos.findIndex(t => t.id === action.id);
        const todos = Object.assign([], state.todos);
        todos.splice(idx, 1);
        return {
          count: state.count,
          todos: todos,
        };
      }
    default:
      return state;
  }
};