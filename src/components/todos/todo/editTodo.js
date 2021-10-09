import { Icon } from "@iconify/react";
import DatePicker from "../../datePicker";

const EditTodo = ({
  item,
  editinput,
  setEditinput,
  editDate,
  editTodo,
  setEditDate,
}) => {
  return (
    <>
      <input
        className="editBox"
        type="text"
        value={editinput}
        onChange={(e) => setEditinput(e.target.value)}
        placeholder="Edit"
      />

      <div className="editDatePicker">
        <DatePicker getter={editDate} setter={setEditDate} />
      </div>

      <span className="saveIcon" type="button" onClick={() => editTodo(item)}>
        {/* saveIcon */}
        <Icon icon="fluent:save-arrow-right-20-regular" />
      </span>
    </>
  );
};

export default EditTodo;
