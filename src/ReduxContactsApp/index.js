import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './store'
import ContactList from './components/ContactList'
import './contacts.css'
export default function Contacts() {
    const store = configureStore()
    return (
        <Provider store={store}>
            <ContactList />
        </Provider>
    )
}