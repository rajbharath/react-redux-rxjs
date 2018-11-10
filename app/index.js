import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import counterReducer from './reducers/counter';
import getState$ from './streams/state$';
import getCounter$ from './streams/counter$';

const store = createStore(counterReducer)
const state$ = getState$(store);
const counter$ = getCounter$(state$);

const subscription = counter$.subscribe((counter) => {
  console.log(counter);
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);