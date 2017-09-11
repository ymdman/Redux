import React from 'react';
import { connect } from 'react-redux';

const App = ({ count, onIncrementClick }) => {
  const item = (
    <div>
      <span>{count}</span>
      <button onClick={() => { onIncrementClick(); }}>
        inc
      </button>
    </div>
  );

  return item;
};

export default connect(
  (state) => {
    const data = { count: state.count };
    return data;
  },

  (dispatch) => {
    const data = {
      onIncrementClick: () => {
        dispatch({ type: 'INCREMENT' });
      },
    };

    return data;
  },
)(App);
