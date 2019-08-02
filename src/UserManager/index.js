import React, { useState } from 'react';
import AddUser from './AddUser'
import UserTable from './UserTable'
import EditUser from './EditUser'
import './styles.css'

export default function UserManager() {
    const intialUser = { id: null, name: '', email: '' }
    const [users, setUsers] = useState([
        { id: 1564765857134, name: "shab", email: "shabareesh@gmail.com" },
        { id: 1564765861457, name: "sample", email: "sample@gmail.com" }
    ])
    const [editing, setEditing] = useState(false)
    const [currentUser, setCurrentUser] = useState(intialUser)
    const addUser = (user) => {
        setUsers([...users, user])
    }
    const deleteUser = (userId) => {
        setUsers(users.filter((item) => item.id !== userId))
        if(currentUser.id === userId) {
            setEditing(false)
        }
    }

    const initiateEditUser = (user) => {
        setEditing(true)
        setCurrentUser(user)
    }
    const saveUpdatedUser = (updatedUser)=>{
        let tempUsers = users.map((user)=>user.id === updatedUser.id ? updatedUser : user)
        setUsers(tempUsers)
        setEditing(false)
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flex: 1 }}>
                {
                    editing ? (
                        <EditUser
                            currentUser={currentUser}
                            setEditing={setEditing}
                            saveUpdatedUser={saveUpdatedUser}
                        />
                    ) : <AddUser addUser={addUser} />
                }
            </div>
            <div style={{ display: 'flex', flex: 1 }}>
                <UserTable users={users} deleteUser={deleteUser} initiateEditUser={initiateEditUser} />
            </div>
        </div>
    )
}