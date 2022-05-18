import { all, takeLatest } from 'redux-saga/effects';

function* testSaga(action) {
    try {
        console.log('saga test', action);
        yield 1;
    } catch (error) {}
}

function* CardsSaga() {
    yield all([takeLatest('TEST_SAGA', testSaga)]);
}

export default CardsSaga;
