const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const PORT = 3000;

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("*", (req, res) => {
    res.render("404");
});

app.listen(PORT, () => {
    console.log(`App Running at PORT: ${PORT}`);
    console.log(`URL: http://localhost:${PORT}/`);
});
