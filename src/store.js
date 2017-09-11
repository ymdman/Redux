import { compose, createStore } from 'redux';
import rootReducer from './reducers/Increment';

export default function createFinalStore() {
  const finalCreateStore = compose()(createStore);
  return finalCreateStore(rootReducer);
}
