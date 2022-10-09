const express = require('express');
const path = require('path');
const PORT = 3000;
const { v4:uuidv4 } = require('uuid');
const methodOverride = require('method-override');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))

let listings = [
    {
        id: uuidv4(),
        username: 'dlmgl',
        textPost: 'Jabol',
        imageLink: 'https://pbs.twimg.com/profile_banners/2370335270/1664214105/1500x500'
    },
    {
        id: uuidv4(),
        username: 'jheeddi',
        textPost: 'Raw >>>>',
        imageLink: 'https://media.istockphoto.com/photos/variety-of-raw-black-angus-prime-meat-steaks-picture-id923692030?k=20&m=923692030&s=612x612&w=0&h=k-b2wtmHwBbpmSM74dN0gZzRD9oEwBUYiXdlWYD6mHY='
    },
    {
        id: uuidv4(),
        username: 'rowyourbowt',
        textPost: 'Seggs!',
        imageLink: 'https://i.pximg.net/img-master/img/2022/04/04/19/16/19/97404887_p0_master1200.jpg'
    },
    {
        id: uuidv4(),
        username: 'Gabb',
        textPost: 'Juandissimo',
        imageLink: 'https://64.media.tumblr.com/4186ef939bcb34a4a74051b582a1d061/814d5d1607f1f250-45/s500x750/019dae8bcdf6a0ed21b693d892155b1b5c689124.jpg'
    }
];

app.get('/', (req, res) => {
    res.render('home' , { listings });
});

//READ all listings to Home
app.get('/home', (req, res) => {
    res.render('home' , { listings });
});

app.post('/home', (req, res) => {
    res.render('home');
});

app.get('/signin', (req, res) => {
    res.render('signin');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});


app.get('/*', (req, res) => {
    res.render('error');
});

app.listen(PORT, () => {
    console.log(`Started on port ${PORT}`);
    console.log(`Access using localhost:${PORT}`);
});