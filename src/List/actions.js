import { ADD_TODO, ADD_RANDOM_EMAIL } from "./actionTypes";

export const addTodo = name => ({
  type: ADD_TODO,
  payload: {
    name
  }
});

export const addRandomText = text => ({
  type: ADD_RANDOM_EMAIL,
  payload: {
    name: text
  }
});
