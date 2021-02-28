import React, { useState } from "react";
import { connect } from "react-redux";

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";

function add_todo(todo) {
  return {
    type: ADD_TODO,
    value: todo
  };
}

function remove_todo(index) {
  return {
    type: REMOVE_TODO,
    value: index
  };
}

function mapStateToProps(state) {
  return {
    todos: state
  };
}

function Todo(props) {
  const [userInput, setUserInput] = useState("");

  return (
    <div>
      <h2>Todo App Redux Demo</h2>
      <form>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />

        <button
          onClick={(e) => {
            e.preventDefault();
            props.dispatch(add_todo(userInput));
            setUserInput("");
          }}
        >
          Add Todo
        </button>
      </form>
      {props.todos.length > 0 && <h4>Todo List </h4>}
      <ul>
        {props.todos &&
          props.todos.map((todo) => {
            return (
              <li
                onClick={(e) => {
                  let index = props.todos.findIndex((k) => k === todo);
                  return props.dispatch(remove_todo(index));
                }}
              >
                {todo}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default connect(mapStateToProps, null)(Todo);
