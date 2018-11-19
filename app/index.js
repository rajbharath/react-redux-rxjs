import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../app/containers/App';
import { createBrowserHistory } from 'history';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import createRoutes from './routes.jsx';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import counterReducer from './reducers/counter';
import statesReducer from './reducers/states';
import getState$ from './streams/state$';
import getCounter$ from './streams/counter$';
import { filter } from 'rxjs/operators';
import fetchStatesEpic from '../app/epics/states';
const epicMiddleware = createEpicMiddleware();
const rootEpic = combineEpics(fetchStatesEpic);

const store = createStore(
	combineReducers({
		counter: counterReducer,
		states: statesReducer
	}),
	applyMiddleware(epicMiddleware)
);
epicMiddleware.run(rootEpic);

const state$ = getState$(store);
const counter$ = getCounter$(state$);
const evenCounter$ = counter$.pipe(filter(n => n % 2 === 0));

const counterSubscription = counter$.subscribe(counter => {
	console.log(counter);
});

const evenCounterSubscription = evenCounter$.subscribe(counter => {
	console.log(counter);
});

const history = createBrowserHistory();
ReactDOM.render(
	<Provider store={store} history={history}>
		<Router>{createRoutes()}</Router>
	</Provider>,
	document.getElementById('root')
);
