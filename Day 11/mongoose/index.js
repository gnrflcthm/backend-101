// Importing Mongoose
const mongoose = require("mongoose");

// Connecting to a database
mongoose
    .connect("mongodb://localhost:27017/movieApp")
    .then(() => {
        console.log("Connection Open");
    })
    .catch((err) => {
        console.log("Error");
        console.log(err);
    });

// Creating a Schema
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String,
});

// Creating a model using a Schema
/**
 * First Argument is "name" string which will be used as the name of the collection in the database.
 * By default, the specified name will pluralized and lowercased (eg. modelName: "Cat" = collectionName: "cats")
 */

const Movie = mongoose.model("Movie", movieSchema);

// Creating a new instace of the Model Class
/**
 * Instantiating a new instance of a model class does NOT create a document
 * in the database. It is only stored in memory until it is written to the database.
 * To add the document to the database, you need to use the .save() method on the instace
 */
const testMovie = new Movie({
    title: "Test Movie",
    year: 2022,
    score: 10.0,
    rating: "PG-13",
});

// testMovie.save()

/**
 * Performing CRUD Operations using the Model Class.
 * The model class provides us with CRUD methods suchs as 
 * .find(), .update(), insert(), and remove(). More can
 * be found at their official documentation.
 */
// Movie.insertMany(/*[ List of values to be inserted ]*/)
