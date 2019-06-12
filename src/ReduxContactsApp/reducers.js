import { action_types } from './actions'

function contacts(state = [], action) {
    if (action.type === action_types.FETCH_CONTACTS) {
        return [...state, ...(action.contacts || [])]
    } else {
        return state
    }
}

export { contacts }