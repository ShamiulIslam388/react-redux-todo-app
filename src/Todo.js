import React, { useState } from "react";
import { connect } from "react-redux";

const ADD_TODO = "ADD_TODO";
function add_todo(todo) {
  return {
    type: ADD_TODO,
    value: todo
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
            return props.dispatch(add_todo(userInput));
          }}
        >
          Add Todo
        </button>
      </form>
      <h4>Todo List </h4>
      <ul>
        {props.todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default connect(mapStateToProps, null)(Todo);
