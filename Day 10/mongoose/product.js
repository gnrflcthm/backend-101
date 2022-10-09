const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() =>{
        console.log("Connection Open")
    })
    .catch(err => {
        console.log("Error");
        console.log(err);
    })

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

const Product = mongoose.model('Product', productSchema);

const bike = new Product({name: 'Cycling Jersey', price: 500, categories: ['Cycling', 'Safety', 'Head Gear'], size: 'XL'});
bike.save()
    .then(data =>{
        console.log("Successfully entered a new product.");
        console.log(data);
    })
    .catch( err => {
        console.log("Failed to enter the product.");
        console.log(err);
    })

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
