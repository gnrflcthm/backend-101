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

// Mongoose Virtuals Sample
const personSchema = new mongoose.Schema({
    first: String,
    last: String,
});

personSchema.virtual("fullname").get(function () {
    return `${this.first} ${this.last}`;
});

personSchema.pre("save", async function () {
    this.first = "Fname";
    this.last = "Lname";
    console.log("About to save...");
});

personSchema.post("save", async function () {
    console.log("Saved");
});

const Person = mongoose.model("Person", personSchema);

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
        min: [
            0,
            "Not a valid price." /** Specifying error messages in validator */,
        ],
    },
    onSale: {
        type: Boolean,
        default: false,
    },
    categories: [String], // Specifying tha the type is an array of values.
    size: {
        type: String,
        enum: ["S", "M", "L"],
    },
});

// Adding Instace Methods to the Schema
productSchema.methods.greet = function () {
    console.log("Hello There.");
};

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
};

productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save();
};

productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 });
};

const Product = mongoose.model("Product", productSchema);

// const bike = new Product({ name: "Mountain Bike", price: 1000 });

// Will fail because it is missing the required field "name"
// bike.save()
//     .then((data) => {
//         console.log("Successfully entered a new product");
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log("Failed to enter product");
//         console.log(err.errors.name.properties.message);
//     });

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: "Mountain Bike" });
    console.log(foundProduct);
    await foundProduct.toggleOnSale();
    console.log(foundProduct);
    await foundProduct.addCategory("Outdoor");
    console.log(foundProduct);
};

// Product.fireSale().then((res) => {
//     console.log(res);
// });

// findProduct();

const updateName = async () => {
    const product = await Product.findById("6344018e89a5fdeb7f7c43d9");
    product.name = "Dirt Bike";
    await product.save();
};

// updateName();
