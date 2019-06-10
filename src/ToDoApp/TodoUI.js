import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToDo, removeToDo, toggleToDo, updateFilter } from './actions'
import '../Forms/forms.css'
class ToDoUI extends Component {
    constructor() {
        super()
        this.inputRef = React.createRef()
    }
    _onSubmit = (ev) => {
        ev.preventDefault()
        const text = this.inputRef.value || ''
        if (text) {
            this.props.dispatch(addToDo(text))
        }
        this.inputRef.value = ''
    }

    _onDelete = (id) => {
        this.props.dispatch(removeToDo(id))
    }
    _toggleToDo = (id) => {
        this.props.dispatch(toggleToDo(id))
    }

    _updateFilter = (ev) => {
        this.props.dispatch(updateFilter(ev.target.value))
    }
    render() {
        const todos = this.props.todos || []
        const filter = this.props.filter || 'ALL'
        console.log(this.props)
        return (
            <div>
                <div className="form-container">
                    <form onSubmit={this._onSubmit}>
                        <label htmlFor="todo">Enter your ToDo</label>
                        <input type="text" ref={(c) => this.inputRef = c} name="todo" />
                        <input type="submit" value="Add Your ToDo" className="btn" />
                    </form>
                    <select onChange={this._updateFilter} className="select-css">
                        <option value="ALL">All</option>
                        <option value="ACTIVE">Active</option>
                        <option value="COMPLETED">Completed</option>
                    </select>
                    {
                        todos.map((todo) => {
                            let show = true
                            if (filter !== 'ALL') {
                                show = filter === 'COMPLETED' ? todo.completed : !todo.completed
                            }
                            return (
                                show === true ? (
                                    <div
                                        key={todo.id + ''}
                                        className={`todo ${todo.completed ? 'completed' : ''}`}
                                        onClick={() => this._toggleToDo(todo.id)}>
                                        <h3>
                                            {todo.text}
                                            <span className='delete-btn' onClick={() => this._onDelete(todo.id)}>X</span>
                                        </h3>
                                    </div>
                                ) : null
                            )
                        })
                    }
                </div>
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    console.log('==>state', state)
    return {
        //todos: state
        todos: state.todos,
        filter: state.filter
    }
}

export default connect(mapStateToProps)(ToDoUI)