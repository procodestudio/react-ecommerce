import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore } from 'redux-persist';
import promise from 'redux-promise-middleware';
import rootReducer from './reducers/index';

const logger = createLogger({ collapsed: true });
const middlewares = [promise];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const store = createStoreWithMiddleware(rootReducer);
const persistor = persistStore(store);

export { store, persistor };
