// import logo from './logo.svg';
// import './App.css';

import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <h1>Todo App</h1>

      <input
        type="text"
        value={input}
        onChange={(inputChange) => setInput(inputChange.target.value)}
        placeholder="Add some task"
      />
      <button onClick={() => setList([...list, input])}>Add</button>

      {list.length > 0 ? list.map((item) => <p>{item}</p>) : null}
    </div>
  );
}

export default App;
