// Importing MovieItem component
import MovieItem from "./movieitem";
// Defining Movies component which takes props as an argument
const Movies = (props)=>{
    // Maps over myMovies array and returns a movie item 
    return props.myMovies.map(
    (movie)=>{
        // Key set to imbdID to identify each item 
        return <MovieItem myMovie={movie} key={movie.imbdID}/>
    }
);
}
// Exports Movies
export default Movies;