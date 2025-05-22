import MovieCard from "../componets/MovieCard";
import "../css/Favorites.css";
import { useDispatch, useSelector } from "react-redux";
import { getFavs, searchFavs } from "../favouritesSlice";
import { useEffect, useState } from "react";
import Form from "../componets/Form";

function Favorite() {
  const [searchQuery, setSearchQuery] = useState("")
  let dispatch = useDispatch()
  let favs = useSelector((state) => state.favourite.favourites);
  useEffect(() => {
    dispatch(getFavs())
  }, [dispatch])

  const handleSearch = (e) => {
    e.preventDefault()
    if (!searchQuery.trim()) dispatch(getFavs());
    dispatch(searchFavs(searchQuery))

  }

  return (
    <div
      className={`${favs ? "w-full flex flex-col gap-3" : "favorites-empty"}`}
    >
      {favs && (
        <h1 className="font-bold tracking-wider">Your Favourite Movies</h1>
      )}
      
      <Form handleSearch={handleSearch} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <div className="grid min-md:grid-cols-3 min-sm:grid-cols-2 grid-cols-1 gap-5">
        {favs ? (
          favs.map((movie) => {

            return (
              <MovieCard
                movie={movie}
                favourite={true}
                key={movie.id}
                favMove={() => { }}
              ></MovieCard>
            )
          })
        ) : (
          <>
            <h2>No Favourite Movies Yet</h2>

            <p>add them favs and youll see them here</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Favorite;
