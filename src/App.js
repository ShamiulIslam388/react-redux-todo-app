import "./styles.css";
import Todo from "./Todo";
import { createStore } from "redux";
import { Provider } from "react-redux";

function todoReducer(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      let newState = [...state, action.value];
      return newState;
    case "REMOVE_TODO":
      return [
        ...state.slice(0, action.value),
        ...state.slice(action.value + 1, state.length - 1)
      ];
    default:
      return state;
  }
}
const store = createStore(todoReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
