import { ADD_TODO, TEXT_FETCH_SUCCEEDED } from "./actionTypes";
import { Map, List } from "immutable";
import { createSelector } from "reselect";

const initialState = Map({
  todos: List([{ name: "Wash clothes" }, { name: "Buy groceries" }])
});

export default function(state = initialState, action) {
  switch (action.type) {
    case TEXT_FETCH_SUCCEEDED:
    case ADD_TODO: {
      return state.updateIn(["todos"], todos => todos.push(action.payload));
    }
    default:
      return state;
  }
}

const getTodos = state => state.todos;

export const getVisibleTodos = createSelector([getTodos], todos => {
  return todos.filter(todo => todo.name !== null);
});
