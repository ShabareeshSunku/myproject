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
        const loading = this.props.loading || false
        return (
            <FavoritesManager>
                <div className="container">
                    {
                        loading === false ? contacts.map((contact, index) => {
                            return (
                                <ContactItem contact={contact} key={contact.id} />
                            )
                        }) : (
                                <div
                                    className="container"
                                    style={{ textAlign: 'center', marginTop: '50px' }}>
                                    <div className="loader" />
                                </div>
                            )
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
        contacts: state.contacts,
        loading: state.loading
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactList)