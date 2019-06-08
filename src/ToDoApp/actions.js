const action_constants = {
    ADD_TODO: 'ADD_TODO',
    REMOVE_TODO: 'REMOVE_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO'
}

function addToDo(text) {
    return { type: action_constants.ADD_TODO, text: text, id: new Date().valueOf() }
}

function removeToDo(id) {
    return { type: action_constants.REMOVE_TODO, id }
}

function toggleToDo(id) {
    return { type: action_constants.TOGGLE_TODO, id }
}

export {
    action_constants,
    addToDo,
    removeToDo,
    toggleToDo
}