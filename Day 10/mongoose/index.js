const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp')
    .then(() =>{
        console.log("Connection Open")
    })
    .catch(err => {
        console.log("Error");
        console.log(err);
    })

const movieSchema = new mongoose.Schema(
    {
        title: String,
        year: Number,
        score: Number,
        rating: String
    }
)

const Movie = mongoose.model('Movie', movieSchema);

// const testMovie = new Movie({title: 'Greatest Movie', year: 2022, score: 10.0, rating: 'PG13'});
// testMovie.save();

// Movie.insertMany([
//     {title: 'Back To The Future', year: 1985, score: 8.5, rating: 'G'},
//     {title: 'Terminator 2: Judgment Day', year: 1991, score: 10.0, rating: 'G'},
//     {title: 'Star Wars', year: 1997, score: 8.0, rating: 'PG'},
//     {title: 'Instellar', year: 2014, score: 9.0, rating: 'PG13'},
//     {title: 'The Dark Night', year: 2008, score: 7.0, rating: 'PG'}
// ])
//     .then(data =>{
//         console.log("It worked!");
//         console.log(data);
//     })