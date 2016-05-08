import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

export default function configure(initialState) {
  const createStoreWithMiddlware = applyMiddleware(
    createLogger()
  )(createStore);

  const store = createStoreWithMiddlware(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
