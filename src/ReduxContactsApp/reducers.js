import { action_types } from './actions'

function contacts(state = { contacts: [], loading: false }, action) {
    if (action.type === action_types.FETCH_CONTACTS_SUCEEDED) {
        //return [...state, ...(action.contacts || [])]
        return {
            contacts: [...state.contacts, ...(action.contacts || [])],
            loading: false
        }
    } else if (action.type === action_types.FETCH_CONTACTS) {
        console.log(' I am FetchContacts action')
        return Object.assign({}, state, { loading: true })
    } else {
        return state
    }
}

export { contacts }