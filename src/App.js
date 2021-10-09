import React, { useState } from "react";
import { Icon } from "@iconify/react";
import DatePicker from "./components/datePicker";
import Todos from "./components/todos";
import TodoInput from "./components/todoInput";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [editinput, setEditinput] = useState("");
  const [dateTime, setDateTime] = useState(new Date());
  const [editDate, setEditDate] = useState(new Date());

  let addTodo = () => {
    const newDate = String(new Date()); // convart date to string

    const obj = {
      id: newDate,
      title: input,
      isCheked: false,
      isEdit: false,
      selectedDate: dateTime,
    };

    setList([...list, obj]);
    setInput("");
    setDateTime(new Date());
  };

  // Delete todo function
  const deleteTodo = (id) => {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
    //console.log(id);
  };

  //Edit todo item
  const editTodo = (todo) => {
    setList(
      list.map((i) =>
        i.id === todo.id
          ? {
              ...i,
              title: editinput,
              selectedDate: editDate,
              isEdit: !i.isEdit,
            }
          : i
      )
    );
    setEditinput("");
  };

  return (
    <div className="container">
      <h1 id="heading">Todo App</h1>

      <TodoInput
        input={input}
        setInput={setInput}
        DatePicker={DatePicker}
        dateTime={dateTime}
        setDateTime={setDateTime}
      />

      <br />
      {/* Add todo button */}
      <div className="addIcon" onClick={addTodo}>
        {" "}
        <Icon icon="system-uicons:button-add" />
      </div>

      {/* todos section */}
      <Todos
        list={list}
        editinput={editinput}
        setEditinput={setEditinput}
        editDate={editDate}
        setEditDate={setEditDate}
        editTodo={editTodo}
        setList={setList}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
