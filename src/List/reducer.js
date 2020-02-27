import { ADD_TODO, TEXT_FETCH_SUCCEEDED } from "./actionTypes";

const initialState = {
  todos: [{ name: "Wash clothes" }, { name: "Buy groceries" }]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TEXT_FETCH_SUCCEEDED:
    case ADD_TODO: {
      const todo = action.payload;
      const { todos } = state;
      const updatedTodos = [...todos, todo];
      return {
        ...state,
        todos: updatedTodos
      };
    }
    default:
      return state;
  }
}
