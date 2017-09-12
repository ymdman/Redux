import { compose, createStore } from 'redux';
import Calc from './reducers/Calc';

export default function createFinalStore() {
  const finalCreateStore = compose()(createStore);
  return finalCreateStore(Calc);
}
