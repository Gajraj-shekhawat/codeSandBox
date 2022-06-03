import { useDispatch, useSelector } from "react-redux";
import { dec_count, inc_count } from "../Redux/counter/actions";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  // console.log(count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>MY Count : {count} </h1>
      <div>
        <button
          onClick={() => {
            dispatch(inc_count());
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            dispatch(dec_count());
          }}
        >
          Reduce
        </button>
      </div>
    </div>
  );
};

export default Counter;
