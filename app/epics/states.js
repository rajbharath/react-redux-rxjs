import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { ajax } from 'rxjs/observable/dom/ajax';

import {
	FETCH_STATES,
	fetchStatesSuccess,
	fetchStatesFailure
} from '../actions/states';

const url = '/api/states';

export default action$ => {
	return action$
		.ofType(FETCH_STATES)
		.switchMap(() => ajax.getJSON(url))
		.map(states => fetchStatesSuccess(states))
		.catch(error => Observable.of(fetchStatesFailure()));
};
