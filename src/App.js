import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [editinput, setEditinput] = useState("");

  let addTodo = () => {
    const d = new Date(); // take a date
    const newDate = String(d); // convart date to string
    console.log(newDate);

    const obj = {
      id: newDate,
      title: input,
      isCheked: false,
      isEdit: false,
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

  const editTodo = (todo) => {
    setList(
      list.map((i) =>
        i.id === todo.id ? { ...i, title: editinput, isEdit: !i.isEdit } : i
      )
    );
    setEditinput("")
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
        placeholder="Add some task"
      />
      <br />

      <button id="addButton" onClick={addTodo}>
        {" "}
        Add
      </button>

      {list.length > 0
        ? list.map((item) => (
            <div className="todoList" key={item.id}>
              {item.isEdit ? (
                <>
                  <input
                    type="text"
                    value={editinput}
                    onChange={(e) => setEditinput(e.target.value)}
                    placeholder="Edit"
                  />

                  <button type="button" onClick={() => editTodo(item)}>
                    save
                  </button>
                </>
              ) : (
                <>
                  <input
                    className="listStyle"
                    type="checkbox"
                    value={item.isCheked}
                    onChange={() => {
                      console.log(
                        item.title,
                        " : check status > ",
                        !item.isCheked
                      );
                      setList(
                        list.map((i) =>
                          i.id === item.id ? { ...i, isCheked: !i.isCheked } : i
                        )
                      );
                    }}
                  />

                  <p id="todoText">{item.title}</p>

                  <button
                    className="listStyle"
                    type="button"
                    onClick={() => deleteTodo(item.id)}
                  >
                    Delete
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setEditinput(item.title);

                      setList(
                        list.map((ed) =>
                          ed.id === item.id ? { ...ed, isEdit: !ed.isEdit } : ed
                        )
                      );
                    }}
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          ))
        : null}
    </div>
  );
}

export default App;
