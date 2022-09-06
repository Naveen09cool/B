const mongoose = require('mongoose');

const productScheama = new mongoose.Schema({
    productId:{
        type: String,
        required : true,
        unique : true
    },
    productName:{
        type: String,
        required : true
    },
    quantity:{
        type: Number,
        required : true
    },
    price:{
        type: Number,
        required : true
    }
},{timestamps:true})

const Product = mongoose.model('Product', productScheama)

module.exports = Product;