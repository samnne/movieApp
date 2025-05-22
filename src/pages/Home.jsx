import MovieCard from "../componets/MovieCard";
import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/api.js";
import { searchMovies } from "../services/api.js";
import { useDispatch } from "react-redux";
import { setMovie, setFavourites } from "../favouritesSlice.js";
import { useSelector } from "react-redux";
import Form from "../componets/Form.jsx";
import "../css/Home.css";

function Home() {
  let dispatch = useDispatch();
  let movies = useSelector((state) => state.favourite.movies);
  let favs = useSelector((state) => state.favourite.favourites);

  // State
  const [searchQuery, setSearchQuery] = useState("");

  // Set's to control duplicates
  const movieSet = new Set();
  const favsSet = new Set();

  // Update Sets
  useEffect(() => {
    favs.forEach(f => favsSet.add(f.id))
    movies.forEach(movie => {
      const mId = movie.id
      movieSet.add(mId)
    })

  }, [movies, favs])

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();

        dispatch(setMovie(popularMovies));
      } catch {
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  function Favorite(e, id) {


    if (!favsSet.has(id)) {
      e.target.classList.add("text-red-500")
      const movie = movies.filter(m => {
        if (m.id === id) {
          return m
        }
      })[0]
  
      dispatch(
        setFavourites(movie)
      );
    }


  }

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);

      dispatch(setMovie(searchResults));
      setError(null);
    } catch (err) {
      setError("Failed to search");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
    
      <Form handleSearch={handleSearch} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (

            <MovieCard
              movie={movie}
              favourite={false}
              favMove={Favorite}
              key={movie.id}
            ></MovieCard>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
