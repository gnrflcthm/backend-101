const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const mongoose = require('mongoose');
const Product = require ("./models/product");
const methodOverride = require('method-override');

mongoose.connect('mongodb://localhost:27017/farmStand')
.then(() => {
    console.log("Connection Open");
})
.catch(err =>{
    console.log("Error!");
    console.log(err);
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

const categories = [
    'fruit',
    'vegetable',
    'dairy'
];

//Form to add new product
app.get('/products/new', (req, res) => {
    res.render('products/new', { categories });
});

//Insert new product
app.post('/products', async (req, res) =>{
    const newProduct = new Product(req.body);
    await newProduct.save();
    console.log(newProduct);
    res.redirect(`/products/${newProduct._id}`);
});

//Form to update a product
app.get('/products/:id/updateProduct', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product, categories });
});

//Update a product
app.put('/products/:id', async (req, res) =>{
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new: true});
    res.redirect(`/products/${product._id}`);
});

//Delete a product
app.delete('/products/:id', async (req, res) =>{
    const { id } = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products')
})

//View all products
app.get('/products', async (req,res) => {
    const { category } = req.query;
    if (category){
        const products = await Product.find({ category });
        res.render('products/index', { products, category });
    } else {
        const products = await Product.find({});
        res.render('products/index', {products, category: 'All'});
    }
});

//View Specific product
app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render("products/show", { product });
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`)
})