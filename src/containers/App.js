import React from 'react';
import { connect } from 'react-redux';

import SideBar from '../components/Sidebar';

const App = ({ count, onIncrementClick, onDecrementClick }) => {
  const item = (
    <div>
      <span>{count}</span>
      <SideBar />
      <button onClick={() => { onIncrementClick(); }}>increment</button>
      <button onClick={() => { onDecrementClick(); }}>decrement</button>
    </div>
  );

  return item;
};

const mapStateToProps = (state) => {
  const data = {
    count: state.count,
  };

  return data;
};

const mapDispatchToProps = (dispatch) => {
  const data = {
    onIncrementClick: () => {
      dispatch({
        type: 'INCREMENT',
      });
    },
    onDecrementClick: () => {
      dispatch({
        type: 'DECREMENT',
      });
    },
  };

  return data;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
