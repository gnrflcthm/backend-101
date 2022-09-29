const express = require("express");
const app = express();

const PORT = 3000;

// app.use((req, res) => {
//     res.send({
//         name: "Gian",
//         answer: "no",
//     });
// });

// / => Welcome to our homepage
app.get("/", (req, res) => {
    res.send("Welcome to our homepage.");
});

app.get("/r/:subreddit/:postId", (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing post ID ${postId} on ${subreddit} subreddit.</h1>`);
});

// /cats => meow
app.get("/cats", (req, res) => {
    res.send("meow");
});

// /dogs => arf
app.get("/dogs", (req, res) => {
    res.send("arf");
});

// Handling post requests sample
app.post("/cats", (req, res) => {
    res.send("Meow Post Request.");
});

// Sample of query strings in a get request
app.get("/search/", (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send("<h1>Nothing found.</h1>");
        return
    }
    res.send(`<h1>Search Results for ${q}</h1>`);
});

// Wildcard for handling unmatched get requests
app.get("*", (req, res) => {
    res.send("I do not know this path.");
});

app.listen(PORT, () => {
    console.log(`Listening at Port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
