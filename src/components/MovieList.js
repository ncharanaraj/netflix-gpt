import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map(({ id, backdrop_path }) => (
            <MovieCard key={id} posterPath={backdrop_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
