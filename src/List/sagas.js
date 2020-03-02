import { call, put, takeEvery } from "redux-saga/effects";
import { ADD_RANDOM_EMAIL } from "./actionTypes";
import { fetchTextSucceeded, fetchTextFailed } from "./actions";
import fetchText from "./services";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchEmail(action) {
  try {
    const text = yield call(fetchText, action.payload.userId);
    yield put(fetchTextSucceeded(text));
  } catch (e) {
    yield put(fetchTextFailed(e));
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery(ADD_RANDOM_EMAIL, fetchEmail);
}

export default mySaga;
