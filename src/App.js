// import logo from './logo.svg';
// import './App.css';
//import React from "react";

import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  let addTodo = ()=>{
    const d = new Date();
    const newDate = String(d);
    console.log(newDate);

     const obj = {
       id: newDate,
       title: input
     }

     setList([...list, obj])

  }

  return (
    // <div className="App">
    <div className="container">
      <h1>Todo App</h1>

      <input
        className="searchBox"
        type="text"
        value={input}
        onChange={(inputChange) => setInput(inputChange.target.value)}
        placeholder="Add some task"
      />
      <br />
      <button onClick={addTodo} > Add</button>

      {list.length > 0 ? list.map((item) => <p id="todos" key={item.id}>{item.title}</p>) : null}
    </div>
    // </div>
  );
}

export default App;
