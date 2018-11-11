import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { ConnectedRouter as Router } from 'react-router-redux';
import createRoutes from './routes.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import counterReducer from './reducers/counter';
import getState$ from './streams/state$';
import getCounter$ from './streams/counter$';
import { filter } from 'rxjs/operators';

const store = createStore(counterReducer)
const state$ = getState$(store);
const counter$ = getCounter$(state$);
const evenCounter$ = counter$.pipe(filter(n => n % 2 === 0));

const counterSubscription = counter$.subscribe((counter) => {
  console.log(counter);
});

const evenCounterSubscription = evenCounter$.subscribe((counter) => {
  console.log(counter);
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        {createRoutes()}
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);