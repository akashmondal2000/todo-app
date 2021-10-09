import Switch from "react-switch";
import { Icon } from "@iconify/react";
import { formatDate } from "../../../utils/dateHelper";

const ShowTodo = ({ list, item, setEditinput, deleteTodo, setEditDate, setList }) => {
  return (
    <>
      <Switch
        onChange={() => {
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
      />

      <div className="todoAndTime">
        <p
          className={`${item.isCheked === true ? "lineThrough" : ""} todoText`}
        >
          {item.title}
        </p>
        <p className="DateAndTimeStyle">{formatDate(item.selectedDate)}</p>
      </div>

      <div className="icons">
        <span className="listStyle" onClick={() => deleteTodo(item.id)}>
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
  );
};

export default ShowTodo;
