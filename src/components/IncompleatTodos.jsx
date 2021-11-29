import React from "react";

export const IncompleatTodos = (props) => {
  const { todos, onClickCompleat, onClickDelete } = props;
  return (
    <div className="incompleat-area">
      <p className="title">未完了のToDo</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickCompleat(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
