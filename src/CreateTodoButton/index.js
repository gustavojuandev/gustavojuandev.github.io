import "./CreateTodoButton.css";

import {MdAdd} from 'react-icons/md';

function CreateTodoButton() {
  return (
    <button
      className="CreateTodoButton"
      onClick={(event) => {
        console.log("click!");
        console.log(event.target);
      }}
    >
      <MdAdd/>
    </button>
  );
}

export { CreateTodoButton };
