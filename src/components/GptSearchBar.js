import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?${movie}query=page=1`,
      API_OPTIONS
    );

    const data = await response.json();

    return data.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as Movie Recommendation System and suggest some movies for the query" +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the exmaple result give ahead. Example Result: KGF, Kantara, Pushpa, Bahubali, Don";

    // Make an api call to GPT API and get movie results
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      //TODO: write error message
    }

    const gptMovies = gptResults.choices[0]?.message?.content.split(",");

    const movie = gptMovies.map((gptMovie) => searchMovieTMDB(gptMovie));

    const tmdbMovieResults = await Promise.all(movie);

    dispatch(
      addGptMovieResult({
        movieNames: gptMovies,
        movieResults: tmdbMovieResults,
      })
    );
  };

  return (
    <div className="pt-[8%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-sm col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
