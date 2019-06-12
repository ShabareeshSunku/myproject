import React from 'react';
import FavsButton from './FavsButton'
const ContactItem = (props) => {
    const contact = props.contact
    return (
        <div className="card">
            <img src={contact.thumbnail} className="avatar" alt="" />
            <div className='text-container'>
                <h2 className="name">{contact.name}</h2>
                <p className="email">{contact.email}</p>
                <p className="address">{contact.address}</p>
            </div>
            <FavsButton contact={contact} />
            <button>Contact</button>
        </div>
    )
}

export default ContactItem