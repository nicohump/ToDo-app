import React from "react";
import "./TodosLoading.css"
function TodosLoading () {
    return (
        <ul className="list-loading">
        <li className="loading">
            <span className="check--btn"></span>
            <span className="close--btn"></span>
        </li>
        <li className="loading">
            <span className="check--btn"></span>
            <span className="close--btn"></span>
        </li>
        <li className="loading">
            <span className="check--btn"></span>
            <span className="close--btn"></span>
        </li>
        </ul>
    )
}

export { TodosLoading }