import logo from "./platzi.webp";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import React from "react";

// const defaultTodos = [
//   { text: "Hacer la compra", completed: false },
//   { text: "Escribir informe de proyecto", completed: true },
//   { text: "Hacer ejercicio", completed: false },
//   { text: "Estudiar programación", completed: false },
//   { text: "Llamar al médico", completed: true },
//   { text: "Limpiar la casa", completed: false },
//   { text: "Preparar la cena", completed: true },
//   { text: "Leer un libro", completed: true },
//   { text: "Planificar vacaciones", completed: false },
//   { text: "Revisar el correo electrónico", completed: true },
//   { text: "Ir al gimnasio", completed: false },
//   { text: "Terminar proyecto de diseño", completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// //localStorage.removeItem('TODOS_V1');

function App() {

  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if(!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  }else {
    parsedTodos = JSON.parse(localStorageTodos);
  }  

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });


  const saveTodos = (newTodos) =>  {
    setTodos(newTodos);
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
  };

  /* Cambios en los TODOS*/

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  /* FIN Cambios en los TODOS */

  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={()=>completeTodo(todo.text)}
            onDelete={()=>deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
