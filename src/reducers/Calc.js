import * as Calc from '../constants/Calc';

const initialState = {
  count: 1,
};

const calc = (state = initialState, action) => {
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
