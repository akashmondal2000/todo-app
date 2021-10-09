
const TodoInput = ({input,setInput,DatePicker,dateTime,setDateTime}) => {
    return (
        <div className="TodoInputContainer">

        <input
          className="searchBox"
          type="text"
          value={input}
          onChange={(inputChange) => setInput(inputChange.target.value)}
          placeholder="Add some task"
        />

        <div className="datePicker">
          <DatePicker getter={dateTime} setter={setDateTime} />
        </div>
      </div>
    )
}

export default TodoInput
