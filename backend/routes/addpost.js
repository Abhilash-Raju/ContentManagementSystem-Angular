// Import all the required modules
const express = require('express');
const postRouter = express.Router();
const jwt = require('jsonwebtoken');
const PostData = require('../models/post');
let alert = require('alert'); 
const cors = require('cors');
var bodyparser=require('body-parser');
var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');


console.log("in addPostRoutes");

  postRouter.use(cors());
  
  postRouter.use(bodyparser.urlencoded({
    limit: "200mb",
    type:'application/json'
  }));

  postRouter.use(bodyparser.urlencoded({
    limit: "200mb",  
    extended: true,
    parameterLimit: 1000000
  }));


// Single Post //
    postRouter.get('/:id', verifyToken,  (req, res) => {
    const id = req.params.id;
    PostData.findOne({"_id":id})
      .then((post)=>{
          res.send(post);
      });
    })

// All Posts //
    postRouter.get('/',verifyToken, function (req, res) {
      PostData.find()
              .then(function(posts){
                  res.send(posts);
              })
    })    

// Create Post //
    postRouter.post('/insert',verifyToken,(req,res)=>{
      res.header("Access-Control-Allow-Origin","*")
      res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE')

      var post = {       
          head : req.body.head,
          subhead : req.body.subhead,
          body : req.body.body,
          category:req.body.category,
          authorname: localStorage.getItem('user'), 
          date : new Date().toDateString()       
        }       

        console.log(`This is the user ${localStorage.getItem('user')}`);
     var post = new PostData(post);
     console.log(post)
     post.save()
     .then((result) => {
      res.json({ success: true, message: "Post Created" })
    })
  .catch(err => {
      if (err.code === 11000) {
        return res.json({ success: false, message: "Post Heading, Subheading or Body already exists" })
      }
      return res.json({ success: false, message: `Error ${err}`} )

    })     
  });
  
// Delete a Post //

  postRouter.delete('/remove/:id',verifyToken,(req,res)=>{
     
    id = req.params.id;
    console.log(id);
    PostData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        alert("Post deleted successfully");
        res.send();
    })
  })
  
// Updating a Post //

  postRouter.put('/update',verifyToken,(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE')
    console.log(req.body)

    id=req.body._id,
    head = req.body.head,
    subhead = req.body.subhead,
    body = req.body.body
    category=req.body.category,
    authorname= localStorage.getItem('user'), 
    date = new Date().toDateString()    

    PostData.findByIdAndUpdate({"_id":id},
                                {$set:{
                                "head" : req.body.head,
                                "subhead" : req.body.subhead,
                                "body" : req.body.body,
                                "category":req.body.category,
                                "authorname": localStorage.getItem('user'), 
                                "date" : new Date().toDateString()    
                                }})
   .then(function(){
    
       res.send();
   })
  })
  
    module.exports=postRouter;
  
  
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