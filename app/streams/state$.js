import { Observable } from 'rxjs';

const getState$ = (store) => {
  return new Observable((observer) => {
    observer.next(store.getState());
    const unsubscribe = store.subscribe(function () {
      observer.next(store.getState());
    });
    return unsubscribe;
  });
};

export default getState$;