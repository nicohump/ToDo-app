import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContex';


function TodoSearch() {
    const {searchValue,
            setSearchValue} = React.useContext(TodoContext);
    return (
        <input 
        placeholder="🔍︎ Search task..."
        value={searchValue}
        onChange={(event) => {
            setSearchValue(event.target.value);
        }}  
        />
    );
  }

  export { TodoSearch };