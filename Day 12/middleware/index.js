const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = 3000;

app.use((req, res, next) => {
    req.requestTime = Date.now()
    console.log(req.method, req.path);
    next();
});

app.use('/dogs', (req, res, next) => {
    console.log('Doggos!');
    next();
});

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'pass123'){
        next();
    } else {
        res.send("Sorry, you have to enter the correct password!");
    }
};

// app.use(morgan('tiny'));
// app.use((req, res, next) => {
//     console.log("Hey!");
//     next();
//     console.log("After Hey!");
// });

// app.use((req, res, next) => {
//     console.log("2nd middleware");
// });

app.get('/', (req, res) => {
    console.log(`REQUEST DATE ${req.requestTime}`);
    res.send("Homepage");
});

app.get('/dogs', (req, res) => {
    console.log(`REQUEST DATE ${req.requestTime}`);
    res.send("Dog");
});

app.get('/secret', verifyPassword, (req, res) => {
    res.send("This is my secret!!");
});

app.use((req, res) => {
    res.status(404).send("Not found");
});

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});