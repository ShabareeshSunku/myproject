import React from 'react';

const FavoritesContext = React.createContext({
    favorites: [],
    addFavorites: () => { },
    removeFavorites: () => { }
})

export default FavoritesContext