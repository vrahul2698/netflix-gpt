import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import React, { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)
    const getNowPlayingMovies = async () => {
        try {
            const data = await fetch(
                "https://api.themoviedb.org/3/movie/now_playing?page=1",
                API_OPTIONS
            );
            const json = await data.json();
            dispatch(addNowPlayingMovies(json?.results));
        } catch (err) {
            console.log(err, "err");
        }
    };
    useEffect(() => {
        // if(!nowPlayingMovies) getNowPlayingMovies();
        !nowPlayingMovies && getNowPlayingMovies();
    }, []);
};

export default useNowPlayingMovies;
