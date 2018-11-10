import { map } from 'rxjs/operators';
export default (state$) => state$.pipe(map(state => state.counter));