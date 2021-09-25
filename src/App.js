// import logo from './logo.svg';
// import './App.css';

import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  return (
    // <div className="App">
      <div className="container">

        <h1>Todo App</h1>

        <input className = "searchBox"
          type="text"
          value={input}
          onChange={(inputChange) => setInput(inputChange.target.value)}
          placeholder="Add some task"
        /><br/>
        <button onClick={() => setList([...list, input])}>Add</button>

        <div className="todoBox">

          {list.length > 0 ? list.map((item) => <p id = "todos">{item}</p>) : null}

        </div>
      </div>
    // </div>
  );
}

export default App;
