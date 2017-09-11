import React from 'react';
import { connect } from 'react-redux';

const SideBar = (props, { count }) => {
  const item = (
    <div>
      <span>{count}</span>
      <button onClick={() => { props.onIncrementClick(); }}>side bar</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
