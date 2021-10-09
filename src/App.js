import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Switch from "react-switch";
import DatePicker from "./components/datePicker";


function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [editinput, setEditinput] = useState("");
  const [dateTime, setDateTime] = useState(new Date());
  const [editDate,setEditDate] = useState (new Date());

  function formatDate(dateVal) {
    var newDate = new Date(dateVal);

    var sMonth = padValue(newDate.getMonth() + 1);
    var sDay = padValue(newDate.getDate());
    var sYear = newDate.getFullYear();
    var sHour = newDate.getHours();
    var sMinute = padValue(newDate.getMinutes());
    var sAMPM = "AM";

    var iHourCheck = parseInt(sHour);

    if (iHourCheck > 12) {
      sAMPM = "PM";
      sHour = iHourCheck - 12;
    } else if (iHourCheck === 0) {
      sHour = "12";
    }

    sHour = padValue(sHour);

    return (
      sMonth +
      "-" +
      sDay +
      "-" +
      sYear +
      " " +
      sHour +
      ":" +
      sMinute +
      " " +
      sAMPM
    );
  }

  function padValue(value) {
    return value < 10 ? "0" + value : value;
  }

  let addTodo = () => {
    const d = new Date(); // take a date
    const newDate = String(d); // convart date to string
    console.log(newDate);

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
        i.id === todo.id ? { ...i, title: editinput,selectedDate:editDate, isEdit: !i.isEdit } : i
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

      <div className = "TodoInputContainer">

      <input
        className="searchBox"
        type="text"
        value={input}
        onChange={(inputChange) => setInput(inputChange.target.value)}
        placeholder="Add some task"
      />

      <div className="datePicker">
        <DatePicker getter={dateTime} setter={setDateTime}/>
      </div>

      </div>
      <br />
      {/* AddButton */}
      <div className = "addIcon" onClick={addTodo}>
        {" "}
        <Icon icon="system-uicons:button-add" />
      </div>

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

                    <div className="editDatePicker">
                    <DatePicker getter ={editDate} setter = {setEditDate}/>

                          </div>

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

                  <div className = "todoAndTime">
                    <p
                      className={`${
                        item.isCheked === true ? "lineThrough" : ""
                      } todoText`} >
                    
                      {item.title}
                    </p>
                    <p className = "DateAndTimeStyle">{formatDate(item.selectedDate)}</p>
                  </div>

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
                        setEditDate(item.selectedDate);

                        setList(
                          list.map((ed) =>
                            ed.id === item.id
                              ? { ...ed, isEdit: !ed.isEdit }
                              : ed
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
