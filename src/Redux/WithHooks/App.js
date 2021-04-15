// @ts-nocheck
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signIn } from './actions';

export default function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(signIn())}>
        {isLogged ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

// import { increment, decrement } from './actions/actions';
// import { store } from './store';

// componentDidMount() {
//   store.subscribe(() => console.log(store.getState()));
//   store.dispatch(increment());
//   store.dispatch(decrement());
// }
