const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand')
    .then(() => {
        console.log("Connection Open");
    })
    .catch(err =>{
        console.log("Error!");
        console.log(err);
    })

// const p = new Product({
//     name: 'Grapes',
//     price: 50,
//     category: 'fruit'
// })

const seedProducts = [
    {
        name: 'Eggplant',
        price: 20.00,
        category: 'vegetable'
    },
    {
        name: 'Melon',
        price: 20.50,
        category: 'fruit'
    },
    {
        name: 'Watermelon',
        price: 50.00,
        category: 'fruit'
    },
    {
        name: 'Whole Milk',
        price: 100.99,
        category: 'dairy'
    },
    {
        name: 'Butter',
        price: 99.00,
        category: 'dairy'
    },
];

Product.insertMany(seedProducts)
    .then(p =>{
        console.log(p);
    })
    .catch(e =>{
        console.log(e);
    })

// p.save()
//     .then(p =>{
//         console.log(p);
//     })
//     .catch(e =>{
//         console.log(e);
//     })