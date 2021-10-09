import Todo from "./todo";

const Todos = ({
  list,
  editinput,
  setEditinput,
  editDate,
  editTodo,
  deleteTodo,
  setEditDate,
  setList,
}) => {
  return (
    <div>
      {list.length > 0
        ? list.map((item) => (
            <div className="todoList" key={item.id}>
              <Todo
                list={list}
                item={item}
                editinput={editinput}
                setEditinput={setEditinput}
                editDate={editDate}
                editTodo={editTodo}
                deleteTodo={deleteTodo}
                setEditDate={setEditDate}
                setList={setList}
              />
            </div>
          ))
        : null}
    </div>
  );
};

export default Todos;
