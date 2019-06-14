import { put,takeLatest } from 'redux-saga/effects'
import { action_types } from '../actions'

function* rootSaga() {
    yield takeLatest(action_types.FETCH_CONTACTS, fetchContacts)
    return
}

function* fetchContacts(action) {
    if (!action.async || !action.reqUrl) {
        yield put(action)
    }
    const resp = yield fetch(action.reqUrl)
    const data = yield resp.json()
    const processedData = action.transform(data)
    yield put({ type : action_types.FETCH_CONTACTS_SUCEEDED, ...processedData })
    return
}

export default rootSaga