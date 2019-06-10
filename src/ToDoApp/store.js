import { createStore, combineReducers } from 'redux'
import { ToDoReducer, FilterReducer } from './reducer'

export default function cofigureStore() {
    const initialState = {
        todos: [{ text: 'Visit Doctor', id: 1, completed: false }, { text: 'Have Breakfast', id: 2, completed: false }],
        filter: 'ALL'
    }
    // const rootReducer = (state, action) => {
    //     return {
    //         todos: ToDoReducer(state.todos, action),
    //         filter: FilterReducer(state.filter, action)
    //     }
    // }
    const rootReducer = combineReducers({ todos: ToDoReducer, filter: FilterReducer })
    const store = createStore(rootReducer, initialState)
    return store
}