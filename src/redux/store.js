import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './reducers/index';

const logger = createLogger({ collapsed: true });
const middlewares = [logger];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const store = createStoreWithMiddleware(rootReducer);
const persistor = persistStore(store);

export { store, persistor };
