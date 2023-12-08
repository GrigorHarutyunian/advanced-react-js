import "./Todo.css";
import { TodoItem } from "./toDoItem/TodoItems";
export function Todo({ data, deleteOneTodo, isCompletedTodo, changeTodo }) {
  return (
    <main className="mainTodo">
      {data.map((todo) => {
        return (
          <TodoItem
            changeTodo={() => changeTodo(todo.id)}
            isCompletedTodo={(a) => isCompletedTodo(todo.id, a)}
            deleteOneTodo={() => deleteOneTodo(todo.id)}
            key={todo.id}
            text={todo.text}
            date={todo.date}
          />
        );
      })}
    </main>
  );
}
