import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContex';

function TodoCounter() {
    const {completedTodos:completed,
            totalTodos:total,} = React.useContext(TodoContext);

    if (total === 0) {
        return ( <h1>
                    Agrega un TODO a la lista
                </h1>
            )           
    }else if (completed === total) {
        return ( <h1>
                    Haz completado todo los TODOS 🥳
                </h1>
    )
    }else 
        return (
                <h1>
                    Haz Completado {completed} de {total} ToDos
                </h1>
            );
  }

  export { TodoCounter };