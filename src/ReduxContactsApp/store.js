import { createStore, applyMiddleware } from 'redux'
import { contacts } from './reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/rootSaga'
import loggerMiddleware from './logger'
//import fetcherMiddleware from './fetcher'
export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(contacts, { contacts: [], loading: false }, applyMiddleware(sagaMiddleware, loggerMiddleware))
    sagaMiddleware.run(rootSaga)
    return store
}