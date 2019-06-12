import React, { Component } from 'react';
import FavoritesContext from './FavoritesContext'

export default class FavoritesManager extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favorites: []
        }
    }

    componentDidMount() {
        let existingFavs = []
        try {
            existingFavs = JSON.parse(localStorage.getItem('fav_contacts') || '')
        } catch (e) {
            existingFavs = []
        }
        this.setState({
            favorites: existingFavs
        })
    }
    addFavorites = (contact) => {
        if (contact.id) {
            let existingFavs = []
            try {
                existingFavs = JSON.parse(localStorage.getItem('fav_contacts') || '')
            } catch (e) {
                existingFavs = []
            }
            existingFavs.push(contact)
            localStorage.setItem('fav_contacts', JSON.stringify(existingFavs))
            this.setState({
                favorites: existingFavs
            })
        }
    }

    removeFavorites = (contactId) => {
        if (contactId) {
            let existingFavs = []
            try {
                existingFavs = JSON.parse(localStorage.getItem('fav_contacts') || '')
            } catch (e) {
                existingFavs = []
            }
            existingFavs = existingFavs.filter(function (item) {
                return item.id !== contactId
            })
            localStorage.setItem('fav_contacts', JSON.stringify(existingFavs))
            this.setState({
                favorites: existingFavs
            })
        }
    }
    render() {
        const contextObj = {
            favorites: this.state.favorites,
            addFavorites: this.addFavorites,
            removeFavorites: this.removeFavorites
        }
        return (
            <FavoritesContext.Provider value={contextObj}>
                {
                    this.props.children
                }
            </FavoritesContext.Provider>
        )
    }
}