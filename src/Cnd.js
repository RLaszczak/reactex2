import React, { useContext } from 'react';
import { CC } from './CountProv';

 const Cnd = () => {
 const { state, dispatch, zero } = useContext(CC);
     return (
     <div>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        <button onClick={() => zero({ type: 'zero' })}>0</button>
     </div>
 );
}
export default Cnd;