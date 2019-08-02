import React, { useState, useEffect } from 'react';

export default function AddUser(props) {
    console.log(props.currentUser)
    const [user, updateUser] = useState(props.currentUser)
    const handleChange = (ev) => {
        updateUser({ ...user, [ev.target.name]: ev.target.value })
    }

    const submitUser = (ev) => {
        ev.preventDefault()
        if (user.name && user.email) {
            props.saveUpdatedUser(user)
        }
    }

    useEffect(() => {
        updateUser(props.currentUser)
    }, [props.currentUser])

    return (
        <div className="form-container" style={{ minWidth: '400px' }}>
            <h2>Edit User</h2>
            <form onSubmit={submitUser}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={user.name} onChange={handleChange} />
                <label htmlFor="email">Email</label>
                <input type="text" name="email" value={user.email} onChange={handleChange} />
                <input type="submit" className="btn" value="Submit" />
                <input type="button" className="btn" value="Cancel" onClick={() => { props.setEditing(false) }} />
            </form>
        </div>
    )
}
