const Product = require('../models/product')

// You have to design an API that accepts multiple productIds and add and remove the quantities from inventory 
// payload = [{productId:123,quantity:10,operation:"add"},{productId:2345,quantity:10,operation:"subtract"}]

module.exports.payloads = async function(req, res){
    try {
        console.log(req.body.payload)
        for (const input of req.body.payload) {
            let quant =  parseInt(input.quantity)
            let operation = input.operation
            let prodId = input.productId
            let product = await Product.findOne({"productId" : prodId})
            if(product != null){
                if(operation == "subtract"){
                    if(product.quantity - quant < 0){
                        return res.status(400).json({
                            data:{
                                masage: 'ERROR!, Quantity can not be negative for Product ID : '+prodId
                            }
                        })
                    }else{
                        product.quantity = product.quantity - quant;
                        await product.save()
                    }
                }else if(operation == "add"){
                    product.quantity = product.quantity + quant;
                    await product.save()
                }
            }    
            
        }
        return res.status(200).json({
            data:{
                masage: "All Products Updated Successfully",
            }
        })
    } catch (error) {
        return res.send('Eror in updating'+error)
    }
}

module.exports.createProduct = async function(req, res){
    try {
        let quant =  req.body.quantity
        let price = req.body.price
        let productId =  req.body.productId
        let productName = req.body.productName
        let product = new Product({
            productId : productId,
            productName : productName,
            quantity : quant,
            price : price,
        })
        await product.save();
        return res.status(200).json({
            data:{
                masage: "Product Updated",
                product : product
            }
        })
    } catch (error) {
        return res.send('Eror in Creating product'+error)
    }
}

module.exports.home = async function(req, res){
    try {
        let products = await Product.find();
        return res.status(200).json({
            data:{
                AllProducts: products
            }
        })
    } catch (error) {
        return res.send('Eror'+error)
    }
}