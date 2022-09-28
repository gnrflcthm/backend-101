// Import express module
const express = require("express");

// Create Express App
const app = express();

// Port Number
const PORT = 3000;

app.use((req, res, next) => {
    console.log("We got a new request.");
    next();
});

// Handling Requests
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Listening On Port: ${PORT}`);
    console.log(`Open at: http://localhost:${PORT}`);
});
