const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() =>{
        console.log("Connection Open")
    })
    .catch(err => {
        console.log("Error");
        console.log(err);
    })

const personSchema = new mongoose.Schema({
    first: String,
    last: String
});

personSchema.virtual('fullName').get(
    function(){
        return `${this.first} ${this.last}`;
    }
);

personSchema.pre('save', async function(){
    this.first = 'Fname';
    this.last = 'Lname';
    console.log("About to save...");
});

personSchema.post('save', async function(){
    console.log("Saved.");
})

const Person = mongoose.model('Person', personSchema);

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        maxLength: 20
    },
    price:{
        type: Number,
        required: true,
        min: [0, 'Price must be a positive number']
    },
    onsale:{
        type: Boolean,
        default: false
    },
    categories: [String],
    qty:{
        online:{
            type:Number,
            default:0
        },
        inStore:{
            type:Number,
            default:0
        }
    },
    size: {
        type:String,
        enum: ['S','M','L']
    }
})

productSchema.methods.toggleOnsale = function () {
    this.onsale = !this.onsale;
    return this.save();
}

productSchema.methods.addCategory = function (newCat){
    this.categories.push(newCat);
    return this.save();
}

productSchema.methods.greet = function(){
    console.log("Hello there!");
    console.log(`- from ${this.name}`);
}

productSchema.statics.fireSale = function() {
    return this.updateMany({}, {onSale: true, price: 0});
}

const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
    const foundProduct = await Product.findOne({name: 'Bike Helmet'});
    console.log(foundProduct);
    await foundProduct.toggleOnsale();
    console.log(foundProduct);
    await foundProduct.addCategory('Outdoors');
    console.log(foundProduct);
}

Product.fireSale().then(res => console.log(res));

findProduct();

// const bike = new Product({name: 'Cycling Jersey', price: 500, categories: ['Cycling', 'Safety', 'Head Gear'], size: 'XL'});
// bike.save()
//     .then(data =>{
//         console.log("Successfully entered a new product.");
//         console.log(data);
//     })
//     .catch( err => {
//         console.log("Failed to enter the product.");
//         console.log(err);
//     })

// Product.findOneAndUpdate(
//     {name: 'Tire Pump'}, 
//     {price: -300}, 
//     {new: true, runValidators: true}
//     )
//     .then(data =>{
//         console.log("You have successfully updated the product");
//         console.log(data);
//     })
//     .catch(err =>{
//         console.log("Failed to update the product.")
//         console.log(err)
//     })
