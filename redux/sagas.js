import { call, put, takeEvery } from "redux-saga/effects";

const fetchData = () => {
  return fetch("https://fakestoreapi.com/products").then((res) => res.json());
};

function* dataReceive() {
  const data = yield call(fetchData);
  yield put({ type: GET_USERS_SUCCESS, data });
}

function* dataRequest() {
  yield takeEvery("FETCH_DATA", dataReceive);
}
