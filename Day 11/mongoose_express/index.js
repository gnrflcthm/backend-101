const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

const PORT = 3000;
const categories = ["fruit", "vegetable", "dairy"];

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

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/products", async (req, res) => {
    const products = await Product.find({});

    res.render("products/index", { products });
});

app.get("/products/new", (req, res) => {
    res.render("products/new", { categories });
});

app.get("/products/:id/updateProduct", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render("products/edit", { product, categories });
});

app.put("/products/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
        runValidators: true,
        new: true,
    });
    res.redirect(`/products/${product._id}`);
});

app.post("/products", async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
});

app.get("/products/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);

    res.render("products/show", { product });
});

app.listen(PORT, () => {
    console.log(`Listing at Port ${PORT}`);
});
