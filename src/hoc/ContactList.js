import React from 'react'
import FavsButton from './FavsButton'

export default function ContactList(props) {
    const users = props.users || []
    return (
        <div className="container">
            {
                users.map((user, index) => {
                    return (
                        <div className="card" key={user.id}>
                            <img src={user.thumbnail} className="avatar" alt="" />
                            <div className='text-container'>
                                <h2 className="name">{user.name}</h2>
                                <p className="email">{user.email}</p>
                                <p className="address">{user.address}</p>
                            </div>
                            <FavsButton user={user} />
                            <button>Contact</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
