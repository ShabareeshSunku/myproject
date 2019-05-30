import React from 'react'
import FavoritesContext from './FavoritesContext'

function FavButton(props) {
    const user = props.user
    return (
        <FavoritesContext.Consumer>
            {
                (context) => {
                    const favorites = context.favorites
                    let isFavorited = false
                    for (let fav of favorites) {
                        if (fav.id === user.id) {
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
                                    context.removeFavorites(user.id)
                                } else {
                                    context.addFavorites(user)
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