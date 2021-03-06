const redux = require('redux')
const createStore = redux.createStore

const reducer = function (state = {}, action = {}) {
    if (action.type === 'WITHDRAW') {
        state.balance = state.balance - action.value
    } else if(action.type === 'DEPOSIT'){
        state.balance = state.balance + action.value
    }
    return state
}
const store = createStore(reducer, { balance: 2000 })

store.subscribe(function () {
    console.log(store.getState())
})

store.dispatch(withdrawAction(200))
store.dispatch(depositAction(500))

function withdrawAction(value){
    return { type: 'WITHDRAW', value: value }
}

function depositAction(value){
    return { type: 'DEPOSIT', value: value }
}