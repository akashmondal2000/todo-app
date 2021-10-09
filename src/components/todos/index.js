import React from 'react'
import Switch from "react-switch";
import { Icon } from "@iconify/react";
import { formatDate } from '../../utils/dateHelper';
import DatePicker from '../datePicker';


const Todos = ({list,editinput,setEditinput,editDate,editTodo,deleteTodo,setEditDate,setList}) => {
    return (
        <div>

        
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
    )
}

export default Todos
