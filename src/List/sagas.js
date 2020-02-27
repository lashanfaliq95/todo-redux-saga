import { call, put, takeEvery } from "redux-saga/effects";
import { TEXT_FETCH_SUCCEEDED, ADD_RANDOM_EMAIL } from "./actionTypes";
import fetchText from "./services";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchEmail(action) {
  try {
    const text = yield call(fetchText, action.payload.userId);
    yield put({ type: TEXT_FETCH_SUCCEEDED, payload: { name: text } });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
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
