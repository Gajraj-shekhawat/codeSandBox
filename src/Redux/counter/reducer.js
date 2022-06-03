import { counterActions } from "./actions";

const initialState = { count: 0 };

export const countReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case counterActions.ADD: {
      return { ...state, count: state.count + actions.payload };
    }
    case counterActions.REDUCE: {
      return { ...state, count: state.count + actions.payload };
    }
    default: {
      return state;
    }
  }
};
