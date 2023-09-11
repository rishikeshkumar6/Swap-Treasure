const mongoose=require('mongoose')
const ProductSchema=new mongoose.Schema({
   image:String,
   timestamp: { type: Date, default: Date.now }
})

module.exports=mongoose.model('images',ProductSchema)