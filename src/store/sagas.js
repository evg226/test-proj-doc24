import {takeLatest, put, call} from 'redux-saga/effects';
import {FETCH_LIST, requestList, requestListError, requestListSuccess} from "./actions";
import {queryCats} from "../http/catsApi";

export function* watchFetchList() {
    yield takeLatest(FETCH_LIST, fetchListAsync)
}

function* fetchListAsync() {
    yield put(requestList());
    try {
        const cats = yield call(async () => {
            return await queryCats();
        });
        yield put(requestListSuccess(cats));
    } catch (e) {
        yield put(requestListError(e.message))
    }
}