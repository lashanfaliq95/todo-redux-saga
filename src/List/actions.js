import {
  ADD_TODO,
  ADD_RANDOM_EMAIL,
  TEXT_FETCH_SUCCEEDED,
  USER_FETCH_FAILED
} from "./actionTypes";

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

export const fetchTextSucceeded = text => ({
  type: TEXT_FETCH_SUCCEEDED,
  payload: { name: text }
});

export const fetchTextFailed = error => ({
  type: USER_FETCH_FAILED,
  payload: { message: error.message }
});
