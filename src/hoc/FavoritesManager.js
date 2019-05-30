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
            existingFavs = JSON.parse(localStorage.getItem('fav_users') || '')
        } catch (e) {
            existingFavs = []
        }
        this.setState({
            favorites: existingFavs
        })
    }
    addFavorites = (user) => {
        if (user.id) {
            let existingFavs = []
            try {
                existingFavs = JSON.parse(localStorage.getItem('fav_users') || '')
            } catch (e) {
                existingFavs = []
            }
            existingFavs.push(user)
            localStorage.setItem('fav_users', JSON.stringify(existingFavs))
            this.setState({
                favorites: existingFavs
            })
        }
    }

    removeFavorites = (userId) => {
        if (userId) {
            let existingFavs = []
            try {
                existingFavs = JSON.parse(localStorage.getItem('fav_users') || '')
            } catch (e) {
                existingFavs = []
            }
            existingFavs = existingFavs.filter(function (item) {
                return item.id !== userId
            })
            localStorage.setItem('fav_users', JSON.stringify(existingFavs))
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