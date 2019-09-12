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

function* fetchColors(action) {
  try {
    const colorsResponse = yield axios.get('/api/colors');
    yield put({type: 'SET_COLORS', payload: colorsResponse.data})
  } catch (error) {
    console.log('Error fetching colors,', error);
  }
}



function* colorsSaga() {
  yield takeLatest('POST_COLOR', postColor);
  yield takeLatest('FETCH_COLORS', fetchColors);
}

export default colorsSaga;