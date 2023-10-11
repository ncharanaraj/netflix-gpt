import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRated from "../Hooks/useTopRated";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  useTopRated();
  usePopularMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
