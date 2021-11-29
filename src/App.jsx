import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleatTodos } from "./components/IncompleatTodos";
import { CompleatTodos } from "./components/CompleatTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");

  const [incompleatTodos, setIncompleatTodos] = useState([]);

  const [compleatTodos, setCompleatTodos] = useState([]);

  const onCangeTodoText = () => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleatTodos, todoText];
    setIncompleatTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleatTodos];
    newTodos.splice(index, 1);
    setIncompleatTodos(newTodos);
  };

  const onClickCompleat = (index) => {
    const newIncompleatTodos = [...incompleatTodos];
    newIncompleatTodos.splice(index, 1);

    const newCompleatTodos = [...compleatTodos, incompleatTodos[index]];
    setIncompleatTodos(newIncompleatTodos);
    setCompleatTodos(newCompleatTodos);
  };

  const onClickBack = (index) => {
    const newCompleatTodos = [...compleatTodos];
    newCompleatTodos.splice(index, 1);

    const newIncompleatTodos = [...incompleatTodos, compleatTodos[index]];
    setCompleatTodos(newCompleatTodos);
    setIncompleatTodos(newIncompleatTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onCange={onCangeTodoText}
        onClick={onClickAdd}
        disabled={incompleatTodos.length >= 5}
      />
      {incompleatTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるTODOは5個までです。消化してください。
        </p>
      )}
      <IncompleatTodos
        todos={incompleatTodos}
        onClickCompleat={onClickCompleat}
        onClickDelete={onClickDelete}
      />
      <CompleatTodos todos={compleatTodos} onClickBack={onClickBack} />
    </>
  );
};
