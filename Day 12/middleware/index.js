const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("tiny"));

app.get("/", (req, res) => {
    res.send("Homepage");
});

app.get("/dogs", (req, res) => {
    res.send("Dog");
});

app.listen(3000, () => {
    console.log("Running at localhost:3000");
});
