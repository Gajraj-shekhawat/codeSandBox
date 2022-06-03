import { todoActions } from "./actions";

const initialState = { loading: true, todos: [], isError: false };

export const todosReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case todoActions.GET_TODOS_REQUEST: {
      return { ...state, loading: true };
    }
    case todoActions.GET_TODOS_SUCCESS: {
      return { ...state, loading: false, todos: actions.payload };
    }
    case todoActions.GET_TODOS_FAILURE: {
      return { ...state, isError: true };
    }
    case todoActions.ADD_TODO_REQUEST: {
      return { ...state, loading: true };
    }
    case todoActions.ADD_TODO_SUCCESS: {
      return {
        ...state,
        loading: false,
        todos: [...state.todos, actions.payload]
      };
    }
    case todoActions.ADD_TODO_FAILURE: {
      return { ...state, isError: true };
    }
    default: {
      return state;
    }
  }
};
