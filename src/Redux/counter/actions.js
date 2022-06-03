export const counterActions = {
  ADD: "ADD",
  REDUCE: "REDUCE"
};

export const inc_count = () => ({
  type: counterActions.ADD,
  payload: 1
});

export const dec_count = () => ({
  type: counterActions.REDUCE,
  payload: -1
});
