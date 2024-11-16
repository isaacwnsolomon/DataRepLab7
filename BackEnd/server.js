const express = require('express');
const app = express();
//Defining server port number
const port = 4000;

//IMporting and using cors to allow browser to access server
const cors = require('cors');
app.use(cors());

//Handles cors requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//bodyParser to handle incoming requests
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//GET request handler for returning movie details 
app.get('/api/movies', (req, res) => {
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
             "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
              "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        }
    ];
    //Sends movie data as json 
    res.json({ movies });
});
    
// Sending POST request to server 
app.post('/api/movies',(req,res)=>{
    console.log("Movie: " +req.body.title);
    // Response if movie received
    res.send("Movies received");
});


// Connecting to mongo DB
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@admin.z44it.mongodb.net/myMovieDB');

// Defining schema and data model 
const movieSchema = new mongoose.Schema({
    title: String,
    year: String,
    poster: String
  });
 
  const Movie = mongoose.model('Movie', movieSchema);

  // Method to add data to MongoDB
  app.post('/api/movies', async (req, res)=>{

    const { title, year, poster } = req.body;
   
    const newMovie = new Movie({ title, year, poster });
    await newMovie.save();
   
    res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
    })

    //Implement a method to fetch all movie records
    app.get('/api/movies', async (req, res) => {
        const movies = await Movie.find({});
        res.json(movies);
      });
    //Retrieve data by ID
      app.get('/api/movie/:id', async (req, res) => {
        const movie = await Movie.findById(req.params.id);
        res.send(movie);
      });

      //Starting express server, must be at bottom
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
