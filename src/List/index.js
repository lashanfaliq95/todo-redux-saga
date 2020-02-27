import React, { useState } from "react";
import Todo from "./components/Todo";
import { addRandomText, addTodo } from "./actions";
import { connect } from "react-redux";

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

  return (
    <>
      <h3>Todo List</h3>
      {todos.map((todo, index) => (
        <Todo todo={todo} key={index} />
      ))}
      <input placeholder="Please enter todo" onChange={onInputChange}></input>
      <button onClick={onAddButtonClick}>Add</button>
      <button onClick={onAddFromServiceButtonClick}>Add From service!</button>
    </>
  );
};

const mapStateToProps = state => {
  return { todos: state.todos };
};

export default connect(mapStateToProps, { addRandomText, addTodo })(
  TodoContainer
);
