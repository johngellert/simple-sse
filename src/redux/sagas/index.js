import { all } from 'redux-saga/effects';
import colorsSaga from './colorsSaga';

export default function* rootSaga() {
    yield all([
      colorsSaga(),
    ]);
}