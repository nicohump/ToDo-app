import React from "react";

function useLocalStorage (itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    
    React.useEffect(() => {
      setTimeout (()=>{
        try{
          const localStorageItems = localStorage.getItem(itemName);
          let parsedItem;
          if (!localStorageItems) {
            localStorage.setItem (itemName,JSON.stringify(initialValue));
            parsedItem = initialValue;
          }else {
            parsedItem = JSON.parse(localStorageItems);
            setItem(parsedItem);
          }
          setLoading(false);
        }catch(error) {
          setError(true);
          setLoading(false);
        }
      },2000)
    });

    const refreshItem = (newItem) => {
      localStorage.setItem (itemName, JSON.stringify(newItem));
      setItem (newItem)
    }
  
    return {item, refreshItem, loading, error}
  }

  export { useLocalStorage };

// localStorage.removeItem('TODOS_V1');
//   const defaultTodos = [
//   {name: "Aprender bases", completed: true},
//   {name: "Aprender HTML y CSS", completed: true},
//   {name: "Aprender JavaScript", completed: true},
//   {name: "Aprender REACT", completed: false},
//   {name: "Finalizar REACT", completed: true},
//   {name: "Comprar PC", completed: false},
//   {name: "Aprender Next", completed: false}
// ];
// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos));
