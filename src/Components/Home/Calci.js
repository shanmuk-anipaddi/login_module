import React, { useReducer, useState } from "react";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return { counter: state.counter + 1 };

//     case "decrement":
//       return { counter: state.counter - 1 };

//     default:
//       return { counter: state.counter };
//   }
// };

const todoFunc = (todos, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...todos, addTodoList(action.payload.todo)];

    case "TOGGLE_TODO":
      //console.log("TOGGLE TODO",action);
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          console.log(todo.id);
          console.log(action.payload.id);
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case "DELETE_TODO":
        return todos.filter((todo)=>{
            if(todo.id !== action.payload.id){
                return todo
            }
        })  
  }
};
//console.log('Reducer',todos)
const addTodoList = (todo) => {
  return { id: Date.now(), todo: todo, complete: false };
};

const Calci = () => {
  //Using useState start
  //   const [counter, setCounter] = useState(0);

  //   const incrementHandler = () => {
  //     setCounter(counter + 1);
  //   };

  //   const decrementHandler = () => {
  //     setCounter(counter - 1);
  //   };
  //Using useState End

  //USing Usereducer Start

  //   const [state, dispatch] = useReducer(reducer, { counter: 0 });

  //   const incrementHandler = () => {
  //     dispatch({type : "increment"});
  //   };

  //   const decrementHandler = () => {
  //     dispatch({type : "decrement"});
  //   };

  //   return (
  //     <div>
  //       <button onClick={decrementHandler}>-</button>
  //       <span>{state.counter}</span>
  //       <button onClick={incrementHandler}>+</button>
  //     </div>
  //   );
  //USing Usereducer End

  //Todo app using useReducer
  const [todo, setTodo] = useState("");
  const [todoList, setTodos] = useReducer(todoFunc, []);

  const todoHandler = (e) => {
    setTodo(e.target.value);
  };

  const addTodoHandler = (e) => {
    e.preventDefault();
    setTodos({ type: "ADD_TODO", payload: { todo: todo } });
    setTodo("");
  };

  return (
    <div>
      <form>
        <input type="text" onChange={todoHandler} value={todo} />
        <input type="submit" onClick={addTodoHandler} value="ADD" />
      </form>

      {todoList.map((todo) => {
        console.log(todo);
        return (
          <li key={todo.id}>
            <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
              {todo.todo}
            </span>
            <button
              onClick={() => {
                setTodos({ type: "TOGGLE_TODO", payload: { id: todo.id } });
              }}
            >
              Toggle
            </button>
            <button onClick={() => {
                setTodos({type:"DELETE_TODO",payload :{id:todo.id}})
            }}>Delete</button>
          </li>
        );
      })}
    </div>
  );
};

export default Calci;
