import React, { useState } from 'react';

export default function AddUser(props) {
    const intialUser = { id: null, name: '', email: '' }
    const [user, updateUser] = useState(intialUser)
    const handleChange = (ev) => {
        updateUser({ ...user, [ev.target.name]: ev.target.value })
    }

    const submitUser = (ev) => {
        ev.preventDefault()
        if (user.name && user.email) {
            props.addUser({ ...user, id: new Date().valueOf() })
            updateUser(intialUser)
        }
    }

    return (
        <div className="form-container" style={{ minWidth: '400px' }}>
            <h2>Add User</h2>
            <form onSubmit={submitUser}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={user.name} onChange={handleChange} />
                <label htmlFor="email">Email</label>
                <input type="text" name="email" value={user.email} onChange={handleChange} />
                <input type="submit" className="btn" value="submit" />
            </form>
        </div>
    )
}
