import React, { useState } from "react";

function Todo() {
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

        <button>Add Todo</button>
      </form>
    </div>
  );
}

export default Todo;
