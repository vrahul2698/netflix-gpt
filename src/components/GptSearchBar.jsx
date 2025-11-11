import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
// import client from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector(store => store?.config?.lang);
    const searchText = useRef(null)

    const searchMovieTMDB = async (movie) => {
        const movies = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json = await movies.json();
        return json.results;

    }
    const handleGptSearchClick = async () => {
        console.log(searchText?.current?.value, "Search TExt")
        // Make an API call to open Api and get results
        // const completion = await client.chat.completions.create({
        //     model: 'gpt-4o',
        //     messages: [
        //         { role: 'user', content: searchText?.current?.value },
        //     ],
        // });
        const gptMovies =
            // completion.choices[0].message.content ?? 
            ["Andaz Apna Apna", "Chupke Chupke", "Frankenstein", "Padosan"];
        const promiseArray = gptMovies?.map(movie => searchMovieTMDB(movie));
        const tmdbResults = await Promise.all(promiseArray);
        console.log(gptMovies, tmdbResults);
        dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }))

    }
    return (
        <div className="pt-[35%] md:pt-[10%] flex justify-center">
            <form className="w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
                <input
                    ref={searchText}
                    type="text"
                    className="p-4 m-4 col-span-9 bg-white"
                    placeholder={lang?.[langKey]?.gptSearchPlaceholder}
                />
                <button className="m-4 py-2 px-4 bg-red-700 text-white rounder-lg col-span-3"
                    onClick={handleGptSearchClick}>
                    {lang?.[langKey]?.search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;
