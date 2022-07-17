// Import all the required modules
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
// const bycrypt = require('bycrypt');
// const jwt = require('express-jwt');
// const passport = require('passport');
// const passportJWT = require('passport-jwt');
const User = require('../models/user');
let alert = require('alert'); 

// Router setup
router.get('/',(req,res)=>{
    res.send('Hello from API route');
})

// Signup Router
router.post('/signup', (req,res)=>{
   
    let userData = new User({
        username: req.body.userName,
        email: req.body.email,
        sub:req.body.subscribe,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
      });

      if((userData.email)=='super@domain.com'&&(userData.password)=='Super@1234'){
       alert("Hi! You can't Sign Up with Admin Credentials")
        }
        else if(userData.sub ==true){
            userData.role = 'Admin';
            userData.save((error,resgisteredUser)=>{
            if(error){
                console.log(error);
            }
            else{
            let payload={subject:resgisteredUser};
                let token =jwt.sign(payload,'secretKey')
                res.status(200).send({token});
            }})
        }
         else{
            userData.role = 'AuthUser';
          // let user = new User(userData);
          userData.save((error,resgisteredUser)=>{
              if(error){
                  console.log(error);
              }
              else{
                  let payload={subject:resgisteredUser};
                  let token =jwt.sign(payload,'secretKey')
                  res.status(200).send({token});
              }
          })
      }
    }
)

// Login Router
router.post('/login',(req,res)=>{
    let userData = new User({
        email: req.body.email,
        password: req.body.password
      });

      if(userData.email=="super@domain.com" && userData.password=="Super@1234")
      {
        User.findOne({email : userData.email},(error,user)=>
        {
            if(error)
            {
                console.log(error);
            }
            else
            if(!user)
            {
            userData.username="SuperAdmin";
            userData.role="SuperAdmin";
            userData.sub=true;
            userData.confirmPassword="Super@1234";
            let payload={subject:userData};
            let token =jwt.sign(payload,'secretKey')
            userData.save()
            res.status(200).send({token});
            }
            else{
            let payload={subject:user};
            let token =jwt.sign(payload,'secretKey')
            res.status(200).send({token});
            }
        })
        }
        else{
    User.findOne({email : userData.email},(error,user)=>
    {
        if(error)
        {
            console.log(error);
        }
        else{
            if(!user)
            {
                res.status(401).send('Invalid Email');
            }
            else
            if(user.password!== userData.password)
            {
                res.status(401).send('Invalid Password');
            }
            else{
                let payload={subject:user};
                let token =jwt.sign(payload,'secretKey')
                res.status(200).send({token});
            }
        }
    })
      }}
)

module.exports = router