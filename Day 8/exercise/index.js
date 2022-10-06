// Importing express and initializing express app
const path = require("path");
const express = require("express");

// Specifying what port to be used
const PORT = 3000;

// Execute Express
const app = express();

app.use(express.static(path.join(__dirname,'public')));

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
app.get("/home", (req, res) => {
    res.render("home");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/:any", (req, res) => {
    res.render("error");
});

// Starting Server
app.listen(PORT, () => {
    console.log(`Listening at port: ${PORT}`);
    console.log(`Visit at http://localhost:${PORT}`);
});
