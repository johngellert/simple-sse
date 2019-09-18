import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "POST_OPERATION" actions
function* postColor(action) {
  try {
    yield axios.post('/api/colors', action.payload);
    // yield put({type: 'FETCH_COLORS'});
  } catch (error) {
    console.log('Color post request failed,', error);
  }
}


function* colorsSaga() {
  yield takeLatest('POST_COLOR', postColor);
}

export default colorsSaga;