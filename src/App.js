// import logo from './logo.svg';
// import './App.css';
//import React from "react";

import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  

  let addTodo = () => {
    const d = new Date(); // take a date
    const newDate = String(d); // convart date to string
    console.log(newDate);

    const obj = {
      id: newDate,
      title: input,
      isCheked: false,
    };

    setList([...list, obj]);
    setInput("");
  };

  // Delete todo function
  const deleteTodo = (id) => {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
    //console.log(id);
  };

  // // Chake Box
  // const chakeTodo = ()=>{
  // }

  return (
    // <div className="App">
    <div className="container">
      <h1>Todo App</h1>

      <input
        className="searchBox"
        type="text"
        value={input}
        onChange={(inputChange) => setInput(inputChange.target.value)}
        placeholder="Add some task" />
      <br />

      <button id="addButton" onClick={addTodo}>
        {" "}
        Add
      </button>

      {list.length > 0
        ? list.map((item) => (
            <div key={item.id}>
              <p id="todos" >
                {item.title}
              </p>

              <button type="button" onClick={() => deleteTodo(item.id)}>Delete</button>

              <input type="checkbox" value ={item.isCheked} onChange = {()=>{ 
              console.log(item.title, " : check status > ", !item.isCheked);
              setList(
              list.map(i=> i.id === item.id ? {...i, isCheked: !i.isCheked} : i  )
              )}
              } />
                  
            </div>
          ))
        : null}
    </div>
    // </div>
  );
}

export default App;
