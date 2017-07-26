import {createStore, applyMiddleware, Store} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';

import { createBrowserHistory } from 'history';

const composeEnhancers = composeWithDevTools({});
export const history = createBrowserHistory();
const middleware = [routerMiddleware(history), thunk];


function configureStore(): Store<any> {
  const store = createStore(
    rootReducer,
    {},
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  );

  return store;
}

export const store = configureStore();
