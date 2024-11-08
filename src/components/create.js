// create.js

// Importing useState hook from react
import { useState } from "react";
import axios from "axios";


function Create() {
  // Defining state variables using useState
  const [title, setTitle] = useState('');
  const[year, setYear] = useState('');
  const[poster,setPoster] = useState('');


  // create.js
const handleSubmit = (e) => {
  e.preventDefault();
  
  //Logs values to console
  console.log(`Title: ${title}, Year: ${year}, Poster: ${poster}`);
  
  //Creating movie object 
  const movie = {
    title: title,
    year: year,
    poster: poster
  };
  // Posting to api the movie data 
  axios.post('http://localhost:4000/api/movies', movie)
    .then((res) => console.log(res.data))
    //Handles error if request fails 
    .catch((err) => console.log(err.data));
};
  

  return (
    <div>
      <h2>This is my Create Component.</h2>
      {/* Form to submit movie title*/ }
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input type="text"
            className="form-control"
            // Value set to title 
            value={title}
            // Updating state
            onChange={(e) => { setTitle(e.target.value) }}
          />
        
        </div>
      
      </form>
{/* Form to submit movie year*/ }
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Movie Year: </label>
          <input type="text"
            className="form-control"
            // Value set to year 
            value={year}
            // Updates state
            onChange={(e) => { setYear(e.target.value) }}
          />
        
        </div>
       
      </form>
{/* Form to submit movie poster URL*/ }
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Movie Poster URL: </label>
          <input type="text"
            className="form-control"
            // Value set to year 
            value={poster}
            // Updates state
            onChange={(e) => { setPoster(e.target.value) }}
          />
          <input type="submit" value="Add Movie" />
        </div>
      </form>
    </div>
  );
}

export default Create;

//comments on usestate, use