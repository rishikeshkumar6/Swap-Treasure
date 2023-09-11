const mongoose=require('mongoose')
const ProductSchema=new mongoose.Schema({
    name:String,
    email:String,
    address:String,
    password:Number

})

module.exports=mongoose.model('userInfos',ProductSchema)