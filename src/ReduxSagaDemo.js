import createSagaMiddleware from 'redux-saga'
import { take, fork, cancel, call, put, delay } from 'redux-saga/effects'
import { applyMiddleware, createStore } from 'redux'

const users = {
    'redux': 'saga',
    'react': 'redux',
    'javascript': 'es6'
}
function generateToken() {
    const token = Math.floor(1000000000000000 + Math.random() * 9000000000000000)
        .toString(36).substr(0, 10)
    return token
}

function* authorize(username, password) {
    yield delay(2000)
    if (typeof users[username] === 'undefined') {
        yield put({ type: 'LOGIN_FAILURE', error: 'Invalid Username' })
    } else if (users[username] === password) {
        const token = generateToken()
        yield put({ type: 'LOGIN_SUCCESS', token: token })
    } else {
        yield put({ type: 'LOGIN_FAILURE', error: 'Username and password didn\'t match' })
    }
}

function* watcher() {
    while (true) {
        const actionData = yield take('LOGIN')
        try {
            yield fork(authorize, actionData.username, actionData.password)
        } catch (err) {
            console.log(err)
        }
    }
}
const sagaMiddleware = createSagaMiddleware()
const reducer = (state, action) => {
    console.log(action.type)
    if (action.type === 'LOGIN_SUCCESS') {
        return Object.assign({}, state, { isLoggedIn: true, token: action.token, error: undefined })
    } else if (action.type === 'LOGIN_FAILURE') {
        return Object.assign({}, state, { isLoggedIn: false, error: action.error, token: undefined })
    } else if (action.type === 'LOGIN') {
        return { isLoggedIn: false, token: '' }
    } else {
        return state
    }
}
const store = createStore(reducer, { isLoggedIn: false, token: '' }, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(watcher)

store.subscribe(function () {
    console.log('==> Current State', store.getState())
})

export default function sagaSample() {
    store.dispatch({ type: 'LOGIN', username: 'redux', password: 'redux' })
    store.dispatch({ type: 'LOGIN', username: 'react', password: 'redux' })
}
