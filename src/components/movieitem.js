import { useEffect } from "react";
// Importing card component from boostrap 
import Card from 'react-bootstrap/Card';

function MovieItem(props) {
  useEffect(() => {
    console.log("Movie Item:", props.myMovie);
  }, [props.myMovie]); // Only run this effect when the mymovie prop changes

  return (
    <div>
      <Card>
        <Card.Header>{props.myMovie.Title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.myMovie.Poster} alt={props.myMovie.Title} />
            <footer>{props.myMovie.Year}</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}
// Exports MovieItem
export default MovieItem;