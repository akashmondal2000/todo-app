import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Switch from "react-switch";

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
    setEditinput("");
  };

  // // Chake Box
  // const chakeTodo = ()=>{
  // }

  return (
    // <div className="App">
    <div className="container">
      <h1 id="heading">Todo App</h1>

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
                    className="editBox"
                    type="text"
                    value={editinput}
                    onChange={(e) => setEditinput(e.target.value)}
                    placeholder="Edit"
                  />

                  <span
                    className="saveIcon"
                    type="button"
                    onClick={() => editTodo(item)}
                  >
                    {/* saveIcon */}
                    <Icon icon="fluent:save-arrow-right-20-regular" />
                  </span>
                </>
              ) : (
                <>
                  <Switch
                  // className="switch"
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
                    checked={item.isCheked}
                    height={20}
                    onColor={"#03ca1a"}
                    offColor={"#fb2a2a"}
                    // uncheckedHandleIcon={<>😊</>}
                    // checkedHandleIcon={<>🤣</>}
                  />

                  <p
                    className={`${
                      item.isCheked === true ? "lineThrough" : ""
                    } todoText`}
                  >
                    {item.title}
                  </p>

                  <div className="icons">
                  <span
                    className="listStyle"
                    onClick={() => deleteTodo(item.id)}
                  >
                    <Icon icon="fluent:delete-24-filled" />
                  </span>

                  <span
                    className="editIcon"
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
                    {/* edit icon */}
                    <Icon icon="bx:bx-edit-alt" />
                  </span>
                  </div>
                </>
              )}
            </div>
          ))
        : null}
    </div>
  );
}

export default App;
