const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017/shopApp")
    .then(() => {
        console.log("Connection Open");
    })
    .catch((err) => {
        console.log("Error");
        console.log(err);
    });

/**
 * Other Validators
 * By Default Validators are only run during the creation
 * of a document.
 * 
 * To enable valildators while updating a document, set the `runValidator` option to true
 * */
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        // maxLength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Not a valid price." /** Specifying error messages in validator */]
    },
    onSale: {
        type: Boolean,
        default: false,
    },
    categories: [String], // Specifying tha the type is an array of values.
});

const Product = mongoose.model("Product", productSchema);

const bike = new Product({ price: 1000 });

// Will fail because it is missing the required field "name"
bike.save()
    .then((data) => {
        console.log("Successfully entered a new product");
        console.log(data);
    })
    .catch((err) => {
        console.log("Failed to enter product");
        console.log(err.errors.name.properties.message);
    });
