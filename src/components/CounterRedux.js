import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../utils/counterSlice";


const CounterRedux = () => {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch();
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    );
};

export default CounterRedux;