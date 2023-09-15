import './TodoItem.css';
import  {MdCheckCircleOutline,MdCancel}  from 'react-icons/md';

function TodoItem(props) {
    return (
      <li className="TodoItem">
        <MdCheckCircleOutline 
          onClick={props.onComplete}
          className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
          
          />
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        <MdCancel  onClick={props.onDelete} className={`Icon Icon-delete`} />
      </li>
    );
  }

  export { TodoItem };