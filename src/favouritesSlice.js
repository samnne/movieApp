import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    movies: [],
    favourites: []
}

const favouritesSlice = createSlice({
    name: "favourites",
    initialState,
    reducers: {
        setMovie: (state, action) => {
            state.movies = action.payload
        },
        setFavourites: (state, action) => {
            // console.log(action.payload)
            if(action.payload.length === 0) return
            state.favourites = [...state.favourites, action.payload]
            localStorage.setItem("favorites", JSON.stringify(state.favourites))


        },getFavs: (state) => {
            const favs = JSON.parse(localStorage.getItem("favorites"))
            if(favs) {
                state.favourites = favs
            }

        },
        searchFavs: (state, action) => {
            const searchQuery = action.payload.toLowerCase()
            const filteredFavs = state.favourites.filter(movie =>
                movie.title.toLowerCase().includes(searchQuery)
            )
            state.favourites = filteredFavs
        }, removeFav: (state, action) => {
            const movieId = action.payload
            state.favourites = state.favourites.filter(movie => movie.id !== movieId)
            localStorage.setItem("favorites", JSON.stringify(state.favourites))
        }

    }

})
export const { setMovie, setFavourites, getFavs , searchFavs, removeFav} = favouritesSlice.actions
export default favouritesSlice.reducer;