import logo from "./platzi.webp";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import React from "react";

const defaultTodos = [
  { text: "Hacer la compra", completed: false },
  { text: "Escribir informe de proyecto", completed: true },
  { text: "Hacer ejercicio", completed: false },
  { text: "Estudiar programación", completed: false },
  { text: "Llamar al médico", completed: true },
  { text: "Limpiar la casa", completed: false },
  { text: "Preparar la cena", completed: true },
  { text: "Leer un libro", completed: true },
  { text: "Planificar vacaciones", completed: false },
  { text: "Revisar el correo electrónico", completed: true },
  { text: "Ir al gimnasio", completed: false },
  { text: "Terminar proyecto de diseño", completed: true },
];

function App() {

  const [searchValue, setSearchValue] = React.useState("");
  const [todos, setTodos]  = React.useState(defaultTodos);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const  totalTodos = todos.length;
  

  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;

