const mongoose = require ('mongoose');

// Define a Schema
const Schema = mongoose.Schema;

const postSchema = new Schema({
    head:{
        type:String, 
        required: true },
    subhead: {
        type:String, 
        required: true,
        },
    date: new Date()
        ,
    postImagePath: {
        type:String, 
        required: true
        },
    body:  {
        type:String, 
        required: true
        }
});


module.exports = mongoose.model('post',postSchema,'post')
