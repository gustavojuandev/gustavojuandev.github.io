import logo from "./platzi.webp";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

import React from "react";

import "./App.css";

const defaultTodos = [
  { text: "Hacer la compra", completed: false },
  { text: "Escribir informe de proyecto", completed: true },
  { text: "Hacer ejercicio", completed: false },
  { text: "Estudiar programación", completed: false },
  { text: "Llamar al médico", completed: true },
  { text: "Limpiar la casa", completed: false },
  { text: "Preparar la cena", completed: false },
  { text: "Leer un libro", completed: false },
  { text: "Planificar vacaciones", completed: false },
  { text: "Revisar el correo electrónico", completed: true },
  { text: "Ir al gimnasio", completed: false },
  { text: "Terminar proyecto de diseño", completed: true },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={4} total={46} />
      <TodoSearch />

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
