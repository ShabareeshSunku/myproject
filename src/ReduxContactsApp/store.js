import { createStore, applyMiddleware } from 'redux'
import { contacts } from './reducers'
import loggerMiddleware from './logger'
import fetcherMiddleware from './fetcher'
export default function configureStore() {
    const store = createStore(contacts, [], applyMiddleware(fetcherMiddleware, loggerMiddleware))
    return store
}