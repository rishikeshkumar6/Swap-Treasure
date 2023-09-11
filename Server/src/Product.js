const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
    image:String,
    name:String,
    price:Number,
    category:String,
    number:Number,
    email:String,
    address:String
})

module.exports=mongoose.model('Productdatas',productSchema)