// const express=require('express')
// const Jwt=require('jsonwebtoken')
// const jwtKey="Rishukumar"
// const multer=require('multer')
// const path=require('path')
// const cors=require('cors')
// require('./config')
// const Product=require('./ProductData')
// const Products=require('./Product') 
// const app=express()
// app.use(express.json())
// app.use(cors())


// app.post('/register',signupValidation,async (req,res)=>{
//   const result=await Product.insertMany(req.body)
//   res.send(result)
 
// })
// app.post('/login',async (req,res)=>{ 
//   if(req.body.email && req.body.password){
//     const result=await Product.findOne(req.body).select("-password")
//     if(result){
//       Jwt.sign({result},jwtKey,(err,token)=>{ 
//          res.send({result,auth:token})
//       })
     
//     }
//     else{
//       res.send("record not found")
//     }
//   }
//   else{
//     res.send("record not found")
//   }
 
// })

// // app.post('/add',verifyToken,upload.fields([{ name: 'image' }]),async (req,res)=>{
  
// //     const product = new Product({
// //       name: req.body.name,
// //       price: req.body.price,
// //       category: req.body.category,
// //       number: req.body.number,
// //       email: req.body.email,
// //       image: req.file.filename, 
// //     });
// //     console.log(product)
  
// //     try {
// //       const result = await Products.insertMany(product); 
// //       res.send(result);
// //     } catch (error) {
// //       console.error("Error saving product:", error);
// //       res.status(500).send("Internal Server Error");
// //     }
// // })

// app.post('/add',verifyToken, async (req, res) => {
//   try {
    
   
//     // Save the product to the database
//     const result = await Products.insertMany(req.body);
//     res.send(result);
//   } catch (error) {
//     console.error("Error saving product:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// app.get('/add',verifyToken,async(req,res)=>{
//   try {
//     const result = await Products.find(); 
//     res.send(result); 
//   } catch (error) {
//     console.error("Error retrieving products:", error);
//     res.status(500).send("Internal Server Error");
//   }
// })

// app.delete('/add/:_id',verifyToken,async (req,res)=>{
//   const result=await Products.deleteOne(req.params)
//   res.send(result)
// })

// app.put('/add/:_id',verifyToken,async (req,res)=>{
//   const result=await Products.updateOne(req.params,{$set:req.body})
//   res.send(result)
// })

// app.get('/add/:_id',verifyToken,async (req,res)=>{
//   const result=await Products.findOne(req.params)
//   res.send(result)
// })

// app.get('/search/:key',verifyToken,async (req,res)=>{
//   const result=await Products.find({
//     "$or":[
//       {name:{$regex:req.params.key}},
//       {category:{$regex:req.params.key}}
//     ]
//   })
//   res.send(result)
// })

// function verifyToken(req,res,next){
// let token=req.headers['authorization']
// if(token){
// token=token.split(' ')[1] 
// console.log(token[1])
// Jwt.verify(token,jwtKey,(err,handle)=>{
//   if(err){
//     console.log(err)
//       res.send(err)
//   }
//   else{
//     next()
//   }
// })
// }
// else{
//       res.send("please send token with header")
// }


// }


// async function signupValidation(req,res,next){
  
//   const response=await Product.find({email:req.body.email})
//   if(response.length>0){
//     res.send("record already find")
//   }
//   else{
//     next()
//   }
//  }
// app.listen(4500)





//test

// const express=require('express')
// const Image=require('./image')
// const Jwt=require('jsonwebtoken')
// const jwtKey="Rishukumar"
// const multer=require('multer')
// const path=require('path')
// const cors=require('cors')
// require('./config')
// const Product=require('./ProductData')
// const Products=require('./Product') 
// const app=express()
// app.use(express.json())
// app.use(express.static('uploads'))
// app.use(cors())


// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     // Specify the directory where you want to store the uploaded files
//     cb(null, './uploads'); // You should create a 'uploads' directory in your project
//   },
//   filename: function (req, file, cb) {
//     // Generate a unique filename for the uploaded file
//     cb(null, file.fieldname+ "_" + Date.now() + path.extname(file.originalname));
//   },
// });
// // Create a Multer instance
// const upload = multer({ storage: storage });

// app.post('/register',signupValidation,async (req,res)=>{
//   const result=await Product.insertMany(req.body)
//   if(result){
//     Jwt.sign({result},jwtKey,(err,token)=>{ 
//       if(err){
//         res.send(err)
//       }else{
//        res.send({result,auth:token})
      
//       }
//     })
   
//   }
  
// })
// app.post('/login',async (req,res)=>{ 
//   if(req.body.email && req.body.password){
//     const result=await Product.findOne(req.body).select("-password")
//     if(result){
//       Jwt.sign({result},jwtKey,(err,token)=>{ 
//          res.send({result,auth:token})
//       })
     
//     }
//     else{
//       res.send("record not found")
//     }
//   }
//   else{
//     res.send("record not found")
//   }
 
// })

// // app.post('/add',verifyToken,upload.fields([{ name: 'image' }]),async (req,res)=>{
  
// //     const product = new Product({
// //       name: req.body.name,
// //       price: req.body.price,
// //       category: req.body.category,
// //       number: req.body.number,
// //       email: req.body.email,
// //       image: req.file.filename, 
// //     });
// //     console.log(product)
  
// //     try {
// //       const result = await Products.insertMany(product); 
// //       res.send(result);
// //     } catch (error) {
// //       console.error("Error saving product:", error);
// //       res.status(500).send("Internal Server Error");
// //     }
// // })

// app.post('/add',verifyToken,upload.single("image"), async (req, res) => {
//   try {
    
//       // const obj=new Product({
//       //   image:req.file.filename,
//       //   name:req.body.name,
//       //   price:req.body.price,
//       //   category:req.body.category,
//       //   number:req.body.number,
//       //   email:req.body.email,
//       // })
//       console.log(req.body)
//     // Save the product to the database
//     const result = await Products.insertMany({image:req.file.filename,
//       name:req.body.name,
//       price:req.body.price,
//       category:req.body.category,
//       number:req.body.number,
//       email:req.body.email,
//       address:req.body.address
//     });
//     res.send(result);
//   } catch (error) {
//     console.error("Error saving product:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// app.get('/add',verifyToken,async(req,res)=>{
//   try {
//     const result = await Products.find(); 
//     res.send(result); 
//   } catch (error) {
//     console.error("Error retrieving products:", error);
//     res.status(500).send("Internal Server Error");
//   }
// })

// app.delete('/add/:_id',verifyToken,async (req,res)=>{
//   console.log(req.body)
//   const result=await Products.deleteOne(req.params)
//   res.send(result)
// })

// app.put('/add/:_id',verifyToken,async (req,res)=>{
//   const result=await Products.updateOne(req.params,{$set:req.body})
//   res.send(result)
// })

// app.get('/add/:_id',verifyToken,async (req,res)=>{
//   const result=await Products.findOne(req.params)
//   res.send(result)
// })

// app.get('/search/:key',verifyToken,async (req,res)=>{
//   const result=await Products.find({
//     "$or":[
//       {name:{$regex:req.params.key}},
//       {category:{$regex:req.params.key}}
//     ]
//   })
//   res.send(result)
// })



// // app.post("/uploads",upload.single("image"),async (req,res)=>{
// //   const obj=new Image({image:req.file.filename})
// // const response=await Image.insertMany(obj)
// // res.send(response)
// // })

// function verifyToken(req,res,next){
// let token=req.headers['authorization']
// if(token){
// token=token.split(' ')[1] 
// console.log(token[1])
// Jwt.verify(token,jwtKey,(err,handle)=>{
//   if(err){
//     console.log(err)
//       res.send(err)
//   }
//   else{
//     next()
//   }
// })
// }
// else{
//       res.send("please send token with header")
// }


// }


// async function signupValidation(req,res,next){
  
//   const response=await Product.find({email:req.body.email})
//   if(response.length>0){
//     res.send("record already find")
//   }
//   else{
//     next()
//   }
//  }
// app.listen(4500)



//secend test

const express = require('express');
const Jwt = require('jsonwebtoken');
const jwtKey = "Rishukumar";
const multer = require('multer');
const path = require('path');
const cors = require('cors');
require('./config');
const Product = require('./ProductData');
const Products = require('./Product');

const app = express();
app.use(express.json());
app.use(express.static('uploads'));
app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.post('/register', signupValidation, async (req, res) => {
  const result = await Product.insertMany(req.body);
  if (result) {
    Jwt.sign({ result }, jwtKey, (err, token) => {
      if (err) {
        res.send(err);
      } else {
        res.send({ result, auth: token });
      }
    });
  }
});

app.post('/login', async (req, res) => {
  if (req.body.email && req.body.password) {
    const result = await Product.findOne(req.body).select("-password");
    if (result) {
      Jwt.sign({ result }, jwtKey, (err, token) => {
        res.send({ result, auth: token });
      });
    } else {
      res.send("record not found");
    }
  } else {
    res.send("record not found");
  }
});

app.post('/add', verifyToken, upload.single("image"), async (req, res) => {
  try {
    const result = await Products.insertMany({
      image: req.file.filename,
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      number: req.body.number,
      email: req.body.email,
      address: req.body.address
    });
    res.send(result);
  } catch (error) {
    console.error("Error saving product:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get('/add', verifyToken, async (req, res) => {
  try {
    const result = await Products.find();
    res.send(result);
  } catch (error) {
    console.error("Error retrieving products:", error);
    res.status(500).send("Internal Server Error");
  }
});

// app.post('/search', verifyToken, async (req, res) => {
//   const name = typeof req.body.name === 'string' ? req.body.name : '';
//   const category = typeof req.body.category === 'string' ? req.body.category : '';

//   const result = await Products.find({
//     "$or": [
//       { name: { $regex: name } },
//       { category: { $regex: category } },
//     ]
//   });
  
//   res.send(result);
// });



app.delete('/add/:_id', verifyToken, async (req, res) => {
  const result = await Products.deleteOne(req.params);
  res.send(result);
});

app.put('/add/:_id', verifyToken, async (req, res) => {
  const result = await Products.updateOne(req.params, { $set: req.body });
  res.send(result);
});

app.get('/add/:_id', verifyToken, async (req, res) => {
  const result = await Products.findOne(req.params);
  res.send(result);
});




function verifyToken(req, res, next) {
  let token = req.headers['authorization'];
  if (token) {
    token = token.split(' ')[1];
    Jwt.verify(token, jwtKey, (err, handle) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        req.user = handle.result;
        next();
      }
    });
  } else {
    res.send("please send token with header");
  }
}

async function signupValidation(req, res, next) {
  const response = await Product.find({ email: req.body.email });
  if (response.length > 0) {
    res.send("record already found");
  } else {
    next();
  }
}

 

app.listen(4500);
