// Import all the required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const api = require('./routes/api');


// Initialize the express app
const app = express();

//Set the port
const port = process.env.PORT || 3000;

// Connecting to Database
const db = "mongodb+srv://admin:1289lash@cmscluster.ia9hhvf.mongodb.net/CMSTest?retryWrites=true&w=majority";

mongoose.connect(db, err=>{
    if(err){
        console.log('Error!' + err);
    }
    else{
        console.log('Connected to MongoDB')
    }
});


// User cors for cross origin requests to get passed
app.use(cors());

// Setting up BodyParser 
app.use(bodyParser.json({
    limit: "200mb",
    type:'application/json'
  }));
  
app.use(bodyParser.urlencoded({
    limit: "200mb",  
    extended: true,
    parameterLimit: 1000000
  }));

// Setting up api Route
app.use('/api',api);

// Setting up Default Route
app.get('/',(req,res)=>{
    res.send('Welcome to Home Page');
})

// Setting up Category and Post Route
const categoryRouter=require('./routes/addcategory');
app.use('/categories',categoryRouter);

const postRouter=require('./routes/addpost');
app.use('/posts',postRouter);

//Listen on port 3000
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
