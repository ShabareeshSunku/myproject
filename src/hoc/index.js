import React, { Component } from 'react';
import ContactList from './ContactList'
import withLoader from './withLoader'
import FavoritesManager from './FavoritesManager'
import './contacts.css'

const ContactListWithLoader = withLoader(ContactList, 'users')

export default class Contacts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        fetch('https://api.randomuser.me/?results=200&seed=abc')
            .then((res) => res.json())
            .then((data) => {
                const results = data.results || []
                const resultsLen = results.length
                const users = []
                for (let i = 0; i < resultsLen; i++) {
                    let ithResult = results[i]
                    let fullName = `${ithResult.name.title}. ${ithResult.name.first}  ${ithResult.name.last}`
                    let email = ithResult.email
                    let thumbnail = ithResult.picture.large
                    let address = `${ithResult.location.street} ${ithResult.location.city} ${ithResult.location.state} -${ithResult.location.postcode}`
                    let id = ithResult.login.uuid
                    users.push({
                        name: fullName,
                        email,
                        thumbnail,
                        address,
                        id
                    })
                }
                this.setState({
                    users: users
                })
            })
            .catch((err) => console.error(err))
    }

    render() {
        const users = this.state.users || []
        return (
            <FavoritesManager>
                <ContactListWithLoader users={users} />
            </FavoritesManager>
        )
    }
}
