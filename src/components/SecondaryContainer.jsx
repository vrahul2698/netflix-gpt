import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector(store => store?.movies)
  return <div className="bg-black">
    <div className="-mt-40 relative z-20">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
    </div>
    {/* 
Movies List 
  - Popular
      - MovieCards * N
  - Trending
  - NowPlaying
  -Horror

*/}

  </div>;
};

export default SecondaryContainer;
