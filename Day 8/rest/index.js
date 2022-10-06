const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

const { v4: uuidv4 } = require("uuid");

const port = 3000;

// Middleware for parsing json data
app.use(express.json());

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));

// Middleware for overriding the request method
app.use(methodOverride("_method"));

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

const tweets = [
    {
        id: uuidv4(),
        username: "user01",
        tweet: "How is the weekend",
    },
    {
        id: uuidv4(),
        username: "user12",
        tweet: "Yes we are",
    },
    {
        id: uuidv4(),
        username: "Caloocan_BOIII",
        tweet: "Eh paano kuuung",
    },
    {
        id: uuidv4(),
        username: "DOST",
        tweet: "ahay",
    },
];

// Views all tweets
app.get("/tweets", (req, res) => {
    res.render("tweets/index", { tweets });
});

// Show form for adding tweet
app.get("/tweets/new", (req, res) => {
    res.render("tweets/new");
});

// Add tweet
app.post("/tweets", (req, res) => {
    const { username, tweet } = req.body;
    tweets.push({ id: uuidv4(), username, tweet });
    res.redirect("/tweets");
});

// Update specific tweet
app.patch("/tweets/:id", (req, res) => {
    const { id } = req.params;
    const newTweetText = req.body.tweet;
    const foundTweet = tweets.find((t) => t.id === id);
    foundTweet.tweet = newTweetText;
    res.redirect("/tweets");
});

// View specific tweet
app.get("/tweets/:id", (req, res) => {
    const { id } = req.params;
    const tweet = tweets.find((t) => t.id === id);
    res.render("tweets/show", { tweet });
});

// Get form for updating tweet
app.get("/tweets/:id/edit", (req, res) => {
    const { id } = req.params;
    const tweet = tweets.find((t) => t.id === id);
    res.render("tweets/edit", { ...tweet });
});

app.listen(port, () => {
    console.log(`App running at port: ${port}`);
});
