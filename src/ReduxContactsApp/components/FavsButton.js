import React from 'react'
import FavoritesContext from './FavoritesContext'

function FavButton(props) {
    const contact = props.contact
    return (
        <FavoritesContext.Consumer>
            {
                (context) => {
                    const favorites = context.favorites
                    let isFavorited = false
                    for (let fav of favorites) {
                        if (fav.id === contact.id) {
                            isFavorited = true
                            break
                        }
                    }
                    const className = isFavorited ? 'fa fa-heart' : 'fa fa-heart-o'
                    return (
                        <span
                            className={'favButton ' + className}
                            onClick={() => {
                                if (isFavorited) {
                                    context.removeFavorites(contact.id)
                                } else {
                                    context.addFavorites(contact)
                                }
                            }}
                        ></span>
                    )
                }
            }
        </FavoritesContext.Consumer>
    )
}

export default FavButton