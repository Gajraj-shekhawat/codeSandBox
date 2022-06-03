import axios from "axios";

export const todoActions = {
  GET_TODOS_SUCCESS: "GET_TODOS_SUCCESS",
  GET_TODOS_REQUEST: "GET_TODOS_REQUEST",
  GET_TODOS_FAILURE: "GET_TODOS_FAILURE",

  ADD_TODO_REQUEST: "ADD_TODO_REQUEST",
  ADD_TODO_SUCCESS: "ADD_TODO_SUCCESS",
  ADD_TODO_FAILURE: "ADD_TODO_FAILURE"
};

export const get_todos_success = (payload) => ({
  type: todoActions.GET_TODOS_SUCCESS,
  payload
});

export const get_todos_request = () => ({
  type: todoActions.GET_TODOS_REQUEST
});

export const get_todos_failure = () => ({
  type: todoActions.GET_TODOS_FAILURE
});

export const add_todo_request = () => ({
  type: todoActions.ADD_TODO_REQUEST
});

export const add_todo_success = (payload) => ({
  type: todoActions.ADD_TODO_SUCCESS,
  payload
});

export const add_todo_failure = () => ({
  type: todoActions.ADD_TODO_FAILURE
});

export const getTodos = async (dispatch) => {
  dispatch(get_todos_request());
  try {
    axios
      .get(`https://json-dummy-server-gajraj.herokuapp.com/todos`)
      .then((res) => {
        dispatch(get_todos_success(res.data));
      });
  } catch (error) {
    dispatch(get_todos_failure());
  }
};

export const addtodo = (payload, dispatch) => {
  dispatch(add_todo_request());
  try {
    axios
      .post(`https://json-dummy-server-gajraj.herokuapp.com/todos`, {
        todo: payload,
        status: false
      })
      .then((res) => {
        dispatch(add_todo_success(res.data));
      });
  } catch (error) {
    dispatch(add_todo_failure());
  }
};
