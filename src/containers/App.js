import React from 'react';
import { connect } from 'react-redux';

import SideBar from '../components/Sidebar';

const App = ({ count, onIncrementClick }) => {
  const item = (
    <div>
      <span>{count}</span>
      <SideBar />
      <button onClick={() => { onIncrementClick(); }}>app</button>
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
  };

  return data;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
