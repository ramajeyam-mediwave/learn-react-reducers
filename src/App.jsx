import { useReducer } from "react";

import TodoList from "./components/TodoList";
import TodoAddForm from "./components/TodoAddForm";

function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  function todoReducer(todos, action) {
    switch (action.type) {
      case "TODO_ADD": {
        return [
          ...todos,
          {
            id: new Date().getTime(),
            text: action.value,
          },
        ];
      }
      case "TODO_DELETE": {
        const filtered = todos.filter((t) => t.id != action.value);
        return [...filtered];
      }
      default: {
        throw Error("Unknown action: " + action.type);
      }
    }
  }

  function handleAdd(value) {
    dispatch({
      type: "TODO_ADD",
      value: value,
    });
  }
  function handleDelete(id) {
    dispatch({
      type: "TODO_DELETE",
      value: id,
    });
  }

  return (
    <>
      <h1>My todo</h1>

      <TodoAddForm handleAdd={handleAdd} />
      <TodoList todos={todos} handleDelete={handleDelete} />
    </>
  );
}

export default App;
