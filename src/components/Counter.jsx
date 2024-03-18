import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from "../features/counter";

export const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <ul className="cart-item">
            <li>
                <button className="btn btn-dec" onClick={() => dispatch(decrement())}>-</button>
            </li>
            <li>
                <input type="text" className="quantity" value={count} />
            </li>
            <li>
                <button className="btn btn-inc" onClick={() => dispatch(increment())}>+</button>
            </li>
        </ul>
    )
}