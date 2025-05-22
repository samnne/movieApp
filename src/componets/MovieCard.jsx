import "../css/MovieCard.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFav, setFavourites } from "../favouritesSlice";
import { useRef } from "react";


function MovieCard({ movie, favourite, favMove }) {
  let dispatch = useDispatch();
  let favs = useSelector((state) =>  state.favourite.favourites);
  const card = useRef()

  function Favorite(e) {
    e.target.classList.add("text-red-500");
    dispatch(setFavourites(movie));
    localStorage.setItem("favorites", JSON.stringify([...favs]));
  }

  return (
    <div className="movie-card" key={movie.title} ref={card}>
      <div className="movie-poster">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : `https://image.tmdb.org/t/p/w500`
          }
          className="img-fluid"
          alt={movie.title}
        />
        <div className="movie-overlay" >
          <button
            className={`${favourite ? "favorite text-red-500 " : "favorite "}`}
            onClick={(e) => {
              if(favourite){
                favourite = false
                card.current.classList.add("fadeOut")
                setTimeout(()=>{
                  dispatch(removeFav(movie.id))
                }, 1000)
              }else{
                favMove(e, movie.id);
              }
            }}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
