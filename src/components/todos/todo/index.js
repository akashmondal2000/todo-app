import EditTodo from "./editTodo";
import ShowTodo from "./showTodo";

const Todo = ({
  list,
  item,
  editinput,
  setEditinput,
  editDate,
  editTodo,
  deleteTodo,
  setEditDate,
  setList,
}) => {
  return (
    <>
      {item.isEdit ? (
        <EditTodo
          item={item}
          editinput={editinput}
          setEditinput={setEditinput}
          editDate={editDate}
          editTodo={editTodo}
          setEditDate={setEditDate}
        />
      ) : (
        <ShowTodo
          list={list}
          item={item}
          setEditinput={setEditinput}
          deleteTodo={deleteTodo}
          setEditDate={setEditDate}
          setList={setList}
        />
      )}
    </>
  );
};

export default Todo;
