import './App.css';
import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';

const initialState = {
  apple: 0,
  orange: 0,
  blueberry: 0,
  gooseberry: 0,

};

function Shopping(state, action) {
  switch(action.buy){
    case 'increment':
      return {...state,[action.fruit]:state[action.fruit]+1};
    case 'decrement':
      return {...state,[action.fruit]:Math.max(state[action.fruit]-1,0)};
    default:
      throw new Error('Not Working');
  }

}

function Counterone() {
  const [state, dispatch] = useReducer(Shopping, initialState);
  const totalItems=state.apple+state.orange+state.blueberry+state.gooseberry;

  return (
    <div className="con">
      <div className="p1">
        <div className="pro1">
          <h1 style={{ color: "red" }}>Apple</h1>
          <button className="btn1" onClick={() => dispatch({ buy: 'increment', fruit: 'apple' })}>+</button>
          <button onClick={() => dispatch({ buy: 'decrement', fruit: 'apple' })}>-</button>
        </div>
        <div className="pro1">
          <h1 style={{ color: "orange" }}>Orange</h1>
          <button className="btn1" onClick={() => dispatch({ buy: 'increment', fruit: 'orange' })}>+</button>
          <button onClick={() => dispatch({ buy: 'decrement', fruit: 'orange' })}>-</button>
        </div>
        <div className="pro1">
          <h1 style={{ color: "blue" }}>Blueberry</h1>
          <button className="btn1" onClick={() => dispatch({ buy: 'increment', fruit: 'blueberry' })}>+</button>
          <button onClick={() => dispatch({ buy: 'decrement', fruit: 'blueberry' })}>-</button>
        </div>
        <div className="pro1">
          <h1 style={{ color: "lightgreen" }}>Gooseberry</h1>
          <button className="btn1" onClick={() => dispatch({ buy: 'increment', fruit: 'gooseberry' })}>+</button>
          <button onClick={() => dispatch({ buy: 'decrement', fruit: 'gooseberry' })}>-</button>
        </div>
      </div>
      <div className="p2">
        <div className="cart">
          <h1>Cart Details</h1>
          <p style={{ color: "red" }}>Apple: {state.apple}</p>
          <p style={{ color: "orange" }}>Orange: {state.orange}</p>
          <p style={{ color: "blue" }}>Blueberry: {state.blueberry}</p>
          <p style={{ color: "green" }}>Gooseberry: {state.gooseberry}</p>
          <p>Total Items: {totalItems}</p>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Counterone />, document.getElementById('root'));
export default Counterone;
