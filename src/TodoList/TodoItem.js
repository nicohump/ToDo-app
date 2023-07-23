import './TodoList.css';
import { VscCheck, VscChromeClose } from "react-icons/vsc";

function TodoItem(props) {
    return (
      <li>
        <span onClick={props.onCompleted}
              className={`check-mark ${props.completed && "icon-completed"}`}      
        >
          <VscCheck />
        </span>
        <p className={`${props.completed && "tag-completed"}`}
        >
          {props.text}
        </p>
        <span className='close-btn'
              onClick={props.onDeleted}
        >
          <VscChromeClose />
        </span>
      </li>
    );
}

export { TodoItem }