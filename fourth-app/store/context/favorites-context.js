import {createContext, useState} from "react";


export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {
    },
    removeFavorite: (id) => {
    },
    isFavorite:(id)=>false
})


function FavoritesContextProvider({children}) {

    const [favoriteMealsIds, setFavoriteMealsId] = useState([]);

    function addFavorite(mealId) {
        setFavoriteMealsId((previousState) => [...previousState, mealId]);
    }

    function removeFavorite(mealId) {
        setFavoriteMealsId((previousState) => previousState.filter(favMealId => favMealId !== mealId))
    }

    function isFavorite(mealId){
        return favoriteMealsIds.includes(mealId);
    }


    const value = {
        ids: favoriteMealsIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
        isFavorite:isFavorite
    }

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>)

}

export default FavoritesContextProvider;