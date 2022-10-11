const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose
    .connect("mongodb://localhost:27017/farmStand")
    .then(() => {
        console.log("Connection Open");
    })
    .catch((err) => {
        console.log("Error");
        console.log(err);
    });

const seedProducts = [
    {
        name: "Eggplant",
        price: 20.0,
        category: "vegetable",
    },
    {
        name: "Melon",
        price: 20.5,
        category: "fruit",
    },
    {
        name: "Watermelon",
        price: 50.0,
        category: "fruit",
    },
    {
        name: "Whole Milk",
        price: 100.99,
        category: "dairy",
    },
    {
        name: "Butter",
        price: 99.99,
        category: "dairy",
    },
];

Product.insertMany(seedProducts)
    .then((p) => console.log(p))
    .catch((err) => console.log(err));
