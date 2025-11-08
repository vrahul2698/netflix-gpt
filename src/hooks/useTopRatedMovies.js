import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = ()=>{
     const dispatch = useDispatch();
    //fetch trailer movie background
    const getTopRatedMovies = async () => {
        try {
            const data = await fetch(
                "https://api.themoviedb.org/3/movie/top_rated?page=1",
                API_OPTIONS
            );
            const json = await data.json();
            dispatch(addTopRatedMovies(json?.results));
        } catch (err) {
            console.log(err, "err");
        }
    };
    useEffect(() => {
        getTopRatedMovies();
    }, []);
}

export default useTopRatedMovies;