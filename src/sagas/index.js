import { all, fork } from 'redux-saga/effects';
import CardsSaga from './CardsSaga';

export function* rootSaga() {
    yield all([fork(CardsSaga)]);
}
