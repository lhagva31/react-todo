import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteToDos, setIncompleteToDos] = useState([]);

  const [completeToDos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteToDos, todoText];
    setIncompleteToDos(newTodos);
    setTodoText("");
  };
  const onClickDelete = (index) => {
    const newTodos = [...incompleteToDos];
    newTodos.splice(index, 1);
    setIncompleteToDos(newTodos);
  };
  const onclickComplete = (index) => {
    const newIncompleteTodos = [...incompleteToDos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteToDos(newIncompleteTodos);
    const newCompleteTodos = [...completeToDos, incompleteToDos[index]];
    setIncompleteToDos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeToDos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteToDos, completeToDos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteToDos(newIncompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="insert ToDo"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>Add</button>
      </div>
      <div className="incomplete-area">
        <p className="title"> Incompleted ToDo</p>
        <ul>
          {incompleteToDos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onclickComplete(index)}>Complete</button>
                <button onClick={() => onClickDelete(index)}>Delete</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title"> Completed ToDo</p>
        <ul>
          {completeToDos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>Back</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
