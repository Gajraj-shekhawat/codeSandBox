import TodoList from "./TodoList";
import { v4 as uuid } from "uuid";
import AddTodo from "./AddTodo";
import { useEffect } from "react";
import { getTodos } from "../Redux/todos/actions";

const { useSelector, useDispatch } = require("react-redux");

const Todos = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    getTodos(dispatch);
  }, [dispatch]);

  const loading = useSelector((state) => state.todos.loading);
  if (loading) {
    return <h1>Loading man wait some time</h1>;
  }
  return (
    <>
      <h2>Todo List</h2>
      <AddTodo />
      {todos.map((todo) => (
        <TodoList key={uuid()} {...todo} />
      ))}
    </>
  );
};
export default Todos;
