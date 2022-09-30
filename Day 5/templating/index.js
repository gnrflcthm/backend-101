// Importing express and initializing express app
const path = require("path");
const express = require("express");
const app = express();
const redditData = require("./data.json");

// Specifying what port to be used
const PORT = 3000;

/**
 * Configuring Server
 * - Setting view engine to ejs
 * - Setting views folder
 */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home");
});

// EJS Looping Demo
app.get("/cats", (req, res) => {
    // Test Data
    const cats = ["Muning", "Chi-chi", "Garfield", "Ming-ming"];
    res.render("cats", { cats });
});

// EJS Passing Value Demo
app.get("/rand", (req, res) => {
    // 128000 - 128060
    // const randomNum = 128000 + Math.floor(Math.random() * 61);
    const randomNum = Math.floor(Math.random() * 10) + 1;
    res.render("random", { rand: randomNum });
});

// EJS Rendering and passing params as value
app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    res.render("subreddit", { data: redditData[subreddit] });
});

// Starting Server
app.listen(PORT, () => {
    console.log(`Listening at port: ${PORT}`);
    console.log(`Visit at http://localhost:${PORT}`);
});
