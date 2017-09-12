import * as Calc from '../constants/Calc';

const calc = (state = { count: 1 }, action) => {
  switch (action.type) {
    case Calc.INCREMENT:
      return {
        count: state.count + 1,
      };
    case Calc.DECREMENT:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default calc;
