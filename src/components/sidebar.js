import React from 'react';
import { connect } from 'react-redux';

const SideBar = ({ count }) => {
  const item = (
    <div>
      side bar {count}
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

export default connect(mapStateToProps)(SideBar);
