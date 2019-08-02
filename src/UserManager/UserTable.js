import React from 'react';

export default function UserTable(props) {
    const users = props.users
    return (
        <div>
            <table style={{ minWidth: '500px', width:'initial' }}>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                    {
                        users.map((user, index) => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button className='btn' onClick={() => props.initiateEditUser(user)}>
                                            Edit
                                        </button>
                                        <button className='btn' onClick={() => props.deleteUser(user.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}