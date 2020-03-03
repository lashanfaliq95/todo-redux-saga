import {
  ADD_TODO,
  TEXT_FETCH_SUCCEEDED,
  ADD_RANDOM_EMAIL
} from "./actionTypes";
import { Map, List } from "immutable";
import { createSelector } from "reselect";

const initialState = Map({
  todos: List([{ name: "Wash clothes" }, { name: "Buy groceries" }]),
  isLoading: false
});

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_RANDOM_EMAIL: {
      return state.set("isLoading", true);
    }
    case TEXT_FETCH_SUCCEEDED: {
      state = state.updateIn(["todos"], todos => todos.push(action.payload));
      state = state.set("isLoading", false);
      return state;
    }
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
