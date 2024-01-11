const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/shopApp")
    .then(() => {
        console.log("CONNECTION OPEN!!!");
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!");
        console.log(err);
    });

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price must be positive you big doofus!"]
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ["S", "M", "L"]
    }
})

productSchema.methods.greet = function() {
    console.log("HELLOOOO!")
}

productSchema.methods.toggleOnSale = function() {
    this.onSale = !this.onSale;
    this.save();
}

const findProduct = async () => {
    const foundProduct = await Product.find({ name: "Bike Helmet"});
    foundProduct.greet();
}

const Product = mongoose.model("Product", productSchema);
/*
const bike = new Product({ name: "Cycling Jersey", price: 27.50, categories: ["Cycling", "Clothing"], size: "M", qty: {online: 18 } })

bike.save()
    .then(data => {
        console.log("IT WORKED!");
        console.log(data);
    })
    .catch(err => {
        console.log("OH NO ERROW!");
        console.log(err);
    })


Product.findOneAndUpdate({ name: "Tire Pump" }, { price: -10.99 }, { new: true, runValidators: true })
    .then(data => {
        console.log("IT WORKED!");
        console.log(data);
    })
    .catch(err => {
        console.log("OH NO ERROW!");
        console.log(err);
    })

*/