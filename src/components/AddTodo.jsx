import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../Redux/todos/actions";

export default AddTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
      />
      <button
        onClick={() => {
          addtodo(text, dispatch);
        }}
      >
        Add to List
      </button>
    </div>
  );
};
