const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const { v4:uuidv4 } = require('uuid');
const methodOverride = require('method-override');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let tweets = [
    {
        id: uuidv4(),
        username: 'NosyAussieBoi',
        tweet: 'A right knees-up over the weekend.'
    },
    {
        id: uuidv4(),
        username: 'PetLover',
        tweet: 'It\'s raining cats and dogs, innit?'
    },
    {
        id: uuidv4(),
        username: 'TheHotGal',
        tweet: 'Quite hot, innit?'
    },
    {
        id: uuidv4(),
        username: 'CouchPotato',
        tweet: 'Kinda brassed off, aight?'
    }
];

//Form to create new tweet
app.get('/tweets/new', (req, res) => {
    res.render('tweets/new');
});

//SHOW route - View details of specific tweet
app.get('/tweets/:id', (req, res) => {
    const { id } = req.params;
    const tweet = tweets.find(t => t.id === id);
    res.render('tweets/show', { tweet })
});

//UPDATE specific tweet
app.patch('/tweets/:id', (req,res) => {
    const { id } = req.params;
    const newTweetText = req.body.tweet;
    let foundTweet = tweets.find(t => t.id === id);
    foundTweet.tweet = newTweetText;
    res.redirect('/tweets');
});

app.get('/tweets/:id/edit',  (req, res) => {
    const { id } = req.params;
    const tweet = tweets.find(t => t.id === id);
    res.render('tweets/edit', { tweet })
});

//CREATE tweets
app.post('/tweets', (req,res) => {
    const {username, tweet} = req.body;
    tweets.push({ username, tweet, id:uuidv4() });
    res.redirect('/tweets');
});

//READ all tweets
app.get('/tweets', (req, res) => {
    res.render('tweets/index' , { tweets });
});

//DELETE tweet
app.delete('/tweet/:id', (req, res) => {
    const { id } = req.params;
    tweets = tweets.filter(t => t.id !== id);
    res.redirect('/tweets')
});

app.listen(PORT, () =>{
    console.log(`On Port ${PORT}`);
    console.log(`Access on localhost:${PORT}`);
});