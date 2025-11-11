import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieid)=>{
     const dispatch = useDispatch();
     const trailerVideo = useSelector(store => store.movies.trailerVideo);
    //fetch trailer movie background
    const getMovieVideos = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`,
            API_OPTIONS
        );
        const json = await data.json();
        const filterDatas = json?.results?.filter(
            (video) => video?.type === "Trailer"
        );
        const trailer = filterDatas?.length > 0 ? filterDatas[0] : json?.results[0];
        dispatch(addTrailerVideo(trailer))

    };
    useEffect(() => {
        !trailerVideo && getMovieVideos();
    }, []);
}

export default useMovieTrailer;