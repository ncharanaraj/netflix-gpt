import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/MoviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upComingMovies = useSelector((store) => store.movies.upComingMovies); //memoized

  const getUpcomingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addUpcomingMovies(data.results));
  };

  useEffect(() => {
    !upComingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
