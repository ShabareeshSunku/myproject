import React, { Component } from 'react'
import { connect } from 'react-redux'
import ContactItem from './ContactItem'
import FavoritesManager from './FavoritesManager'
import { fetchContacts } from '../actions'
class ContactList extends Component {

    componentDidMount() {
        this.props.getData()
    }

    render() {
        const contacts = this.props.contacts || []
        return (
            <FavoritesManager>
                <div className="container">
                    {
                        contacts.length > 0 ? contacts.map((contact, index) => {
                            return (
                                <ContactItem contact={contact} key={contact.id} />
                            )
                        }) : null
                    }
                </div>
            </FavoritesManager>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(fetchContacts())
    }
}
const mapStateToProps = (state) => {
    return {
        contacts: state
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactList)