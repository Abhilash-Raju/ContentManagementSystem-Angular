// Import all the required modules
const express = require('express');
const categoryRouter = express.Router();
const jwt = require('jsonwebtoken');
const CategoryData = require('../models/category');
let alert = require('alert'); 
const multer=require('multer')
const path = require('path');
var fs = require('fs');
const cors = require('cors');
var bodyparser=require('body-parser');

console.log("in addCategoryRoutes");

  categoryRouter.use(bodyparser.json({
    limit: "200mb",
    type:'application/json'
  }));

  categoryRouter.use(bodyparser.urlencoded({
    limit: "200mb",  
    extended: true,
    parameterLimit: 1000000
  }));

  categoryRouter.use(cors());

// Selecting one Category //
    categoryRouter.get('/:id',verifyToken,  (req, res) => {
    const id = req.params.id;
    CategoryData.findOne({"_id":id})
        .then((category)=>{
            res.send(category);
        });
    })

// Listing all the Categories //
    categoryRouter.get('/',verifyToken, (req, res)=> {
        CategoryData.find()
                .then(function(categories){
                    res.send(categories);
                })
    })    

// Creating or Adding a New Category //
    categoryRouter.post('/insert',verifyToken,(req,res)=>{
        res.header("Access-Control-Allow-Origin","*")
        res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE')
        var category = {       
            categoryName : req.body.categoryName,
            about : req.body.about
    }           
    var category = new CategoryData(category);
        category.save();
    });

// Deleting a Category //
    categoryRouter.delete('/remove/:id',verifyToken,(req,res)=>{
    id = req.params.id;
    console.log(id);
    CategoryData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        alert("Category deleted successfully");
        res.send();
    })
    })

// Update // 

        categoryRouter.put('/update',verifyToken,(req,res)=>{
        res.header("Access-Control-Allow-Origin","*")
        res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE')
        console.log(req.body)
        
        id=req.body._id,
        categoryName = req.body.categoryName,
        about = req.body.about
        
        CategoryData.findByIdAndUpdate({"_id":id},
                                    {$set:{
                                        "categoryName" : req.body.categoryName,
                                        "about" : req.body.about
                                    }})
        .then(function(){
        
            res.send();
        })
        })

  module.exports=categoryRouter;


  function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorised Request');
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token==='null'){
        return res.status(401).send('Unauthorised Request');
    }
    let payload = jwt.verify(token, 'secretKey');
    if(!payload){
        return res.status(401).send('Unauthorised Request');
    }
    req.userId = payload.subject;
    next()
}