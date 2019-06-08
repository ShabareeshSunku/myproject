import { action_constants } from './actions'
function ToDoReducer(state = [], action) {
    switch (action.type) {
        case action_constants.ADD_TODO: {
            const newState = [...state, { text: action.text, id: action.id, completed: false }]
            return newState
        }
        case action_constants.REMOVE_TODO: {
            const newState = []
            for (let i = 0; i < state.length; i++) {
                let ithToDo = state[i]
                if (ithToDo.id !== action.id) {
                    newState.push(ithToDo)
                }
            }
            return newState
        }
        case action_constants.TOGGLE_TODO: {
            const newState = state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, completed: true }
                } else {
                    return todo
                }
            })
            return newState
        }
        default: {
            return state
        }
    }
}

export default ToDoReducer