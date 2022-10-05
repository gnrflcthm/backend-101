const express = require("express");
const app = express();

const port = 3000;

// Middleware for parsing json data
app.use(express.json());

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));

app.get("/fruit", (req, res) => {
    res.send("get fruit response");
});

app.post("/fruit", (req, res) => {
    const { nameOfFruit, qty } = req.body;
    if (qty > 1) {
        res.send(`Here are your ${qty} ${nameOfFruit}s. Enjoy!`)
    } else {
        res.send(`Here is your ${qty} ${nameOfFruit}. Enjoy!`)
    }
});

app.listen(port, () => {
    console.log(`App running at port: ${port}`);
});
