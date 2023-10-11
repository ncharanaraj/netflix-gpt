import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/MoviesSlice";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?",
      API_OPTIONS
    );

    const data = await response.json();

    dispatch(addTrendingMovies(data.results));
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
