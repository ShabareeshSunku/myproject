import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './store'
import ToDoUI from './TodoUI'
export default function ToDoApp() {
    const store = configureStore()
    return (
        <Provider store={store}>
            <ToDoUI />
        </Provider>
    )
}