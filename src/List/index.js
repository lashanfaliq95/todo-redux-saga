import React, { useState } from "react";
import Todo from "./components/Todo";
import { addRandomText, addTodo } from "./actions";
import { connect } from "react-redux";
import { getVisibleTodos } from "./reducer";

const TodoContainer = props => {
  const { todos, addRandomText, addTodo } = props;
  const [name, setName] = useState(null);

  const onInputChange = e => {
    setName(e.target.value);
  };

  const onAddButtonClick = () => {
    addTodo(name);
  };

  const onAddFromServiceButtonClick = () => {
    addRandomText();
  };
  console.log(props.isLoading);
  return (
    <>
      <h3>Todo List</h3>
      {todos.map((todo, index) => (
        <Todo todo={todo} key={index} />
      ))}
      {props.isLoading && <div>Loading...</div>}
      <input placeholder="Please enter todo" onChange={onInputChange}></input>
      <button onClick={onAddButtonClick}>Add</button>
      <button onClick={onAddFromServiceButtonClick}>Add From service!</button>
    </>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    todos: getVisibleTodos(state.toJS()),
    isLoading: state.get("isLoading")
  };
};

export default connect(mapStateToProps, { addRandomText, addTodo })(
  TodoContainer
);
