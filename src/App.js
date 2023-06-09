import { useEffect, useState } from "react";
import './App.css';
import MovieCard from "./MovieCard";

const App = () => {
    const [searchTerm, setsearchTerm] = useState()
    const [movies, setMovies] = useState([])
    console.log(searchTerm)
    const searchMovies = async (title) => {
        const res = await fetch(`${apiUrl}&s=${title}`)
        const data = await res.json()
        console.log(data)

        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('Spiderman')
    },[])

    const apiUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=3497baa5`
  return (
        <div className="app">
            <h1>movies.app</h1>
            <div className="search">
            <input
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
                <button onClick={() => searchMovies(searchTerm)}>Search</button>
            </div>

             {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
        </div>
  );
}

export default App