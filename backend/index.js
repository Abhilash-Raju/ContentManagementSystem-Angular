// Import all the required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const api = require('./routes/api');
const dotenv = require('dotenv')
const connectDB = require('./config/db')

// Load Config File
dotenv.config({path:'./config/config.env'})

// Initialize the express app
const app = express();

//Set the port
const port = process.env.PORT || 4000;

// Connecting to Database

connectDB()

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

const postRouter = require('./routes/addpost')
app.use('/posts',postRouter);

//Listen on port 3000
app.listen(port, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode in port http://localhost:${port}`);
});
