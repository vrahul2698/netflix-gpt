
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";



const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />

      {/* 

        Main Container
          - VideoBackground
          - VideoTitle
        
          Secondary Container
            - Movies List * n , 
            - Cards * n 
      */}
    </div>
  );
};

export default Browse;
