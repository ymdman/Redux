import * as Calc from '../constants/Calc';

const increment = () => {
  const data = {
    type: Calc.INCREMENT,
  };

  return data;
};

const decrement = () => {
  const data = {
    type: Calc.DECREMENT,
  };

  return data;
};

export { increment, decrement };
