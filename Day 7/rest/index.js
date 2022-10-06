const e = require('express');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/fruit', (req, res) =>{
    res.send("Get /fruit response.");
    
});

app.post('/fruit', (req, res) =>{
    const { nameOfFruit, qty } = req.body;
    if (qty > 1){
        res.send(`Here are your ${qty} ${nameOfFruit}s. Enjoy!`);
    } else{
        res.send(`Here is your ${qty} ${nameOfFruit}s. Enjoy!`);
    }
    
});

app.listen(PORT, () =>{
    console.log(`On Port ${PORT}`);
});