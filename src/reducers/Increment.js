import INCREMENT from '../constants/Increment';

const increment = (state = { count: 1 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default increment;
